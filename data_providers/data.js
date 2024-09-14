import { reactive, watch, onMounted } from 'vue';
import { Close, Order, Rfq, TbdexHttpClient } from '@tbdex/http-client';
import { DidDht } from '@web5/dids';
import { Jwt, PresentationExchange } from '@web5/credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '~/src/firebaseConfig'; // Firestore instance
import { useRouter } from 'vue-router';

// TODO 1: Choose Mock PFI DIDs using info about services they provide.
const mockProviderDids = {
  aquafinance_capital: {
    uri: 'did:dht:3fkz5ssfxbriwks3iy5nwys3q5kyx64ettp9wfn1yfekfkiguj1y',
    name: 'AquaFinance Capital',
    description: 'Provides exchanges with the Ghanaian Cedis: GHS to USDC, GHS to KES'
  },
  flowback_financial: {
    uri: 'did:dht:zkp5gbsqgzn69b3y5dtt5nnpjtdq6sxyukpzo68npsf79bmtb9zy',
    name: 'Flowback Financial',
    description: 'Offers international rates with various currencies - USD to GBP, GBP to CAD.'
  },
  vertex_liquid_assets: {
    uri: 'did:dht:enwguxo8uzqexq14xupe4o9ymxw3nzeb9uug5ijkj9rhfbf1oy5y',
    name: 'Vertex Liquid Assets',
    description: 'Offers currency exchanges between African currencies - MAD to EGP, GHS to NGN.'
  },
  titanium_trust: {
    uri: 'did:dht:ozn5c51ruo7z63u1h748ug7rw5p1mq3853ytrd5gatu9a8mm8f1o',
    name: 'Titanium Trust',
    description: 'Provides offerings to exchange USD to African currencies - USD to GHS, USD to KES.'
  }
};

export const useStore = () => {
  const state = reactive({
    balance: 100,
    transactions: [],
    transactionsLoading: true,
    pfiAllowlist: Object.keys(mockProviderDids).map(key => ({
      pfiUri: mockProviderDids[key].uri,
      pfiName: mockProviderDids[key].name,
      pfiDescription: mockProviderDids[key].description,
    })),
    selectedTransaction: null,
    offering: null,
    payinCurrencies: [],
    payoutCurrencies: [],
    offerings: [],
    customerDid: null,
    customerCredentials: [],
  });

  // Check if window object is available (client-side)
  if (typeof window !== 'undefined') {
    const storedBalance = localStorage.getItem('walletBalance');
    state.balance = parseFloat(storedBalance) || 10000;
  }

  const loadBalance = async () => {
    try {
      // Get the currently authenticated user
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        // Redirect to login page if not authenticated
        console.log('User is not authenticated, redirecting to login...');
        router.push('/login'); // Adjust the URL as per your routing
        return;
      }

      // Fetch balance from Firestore
      const userDocRef = doc(db, 'donors', user.email); // Assuming 'users' collection with documents named after user IDs
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const data = userDoc.data();
        if (data.balance) {
          // Load balance from Firestore
          state.balance = data.balance;
          console.log('Balance loaded from Firestore:', state.balance);

          // Optionally, save balance to localStorage for offline access
          localStorage.setItem('walletBalance', state.balance.toString());
        } else {
          // Set default balance if none is found
          state.balance = 10000;
          console.log('No balance found, setting to default (1000)');
        }
      } else {
        console.log('User document does not exist in Firestore.');
        state.balance = 10000; // Set default balance if user doc doesn't exist
        await setDoc(userDocRef, { balance: state.balance }); // Save default balance to Firestore
      }
    } catch (error) {
      console.error('Error loading balance from Firestore:', error);
    }
  };

  const auth = getAuth();
  const router = useRouter();

  // Redirect to login if user is not authenticated
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  });

  const fetchOfferings = async () => {
    try {
      const allOfferings = []
      for (const pfi of state.pfiAllowlist) {
        const pfiUri = pfi.pfiUri
        // TODO 2: Fetch offerings from PFIs
        const offerings = await TbdexHttpClient.getOfferings({
          pfiDid: pfiUri
        })
        allOfferings.push(...offerings)
      }

      state.offerings = allOfferings
      updateCurrencies();
    } catch (error) {
      console.error('Failed to fetch offerings:', error);
    }
  };

  const createExchange = async (offering, amount, payoutPaymentDetails) => {
    // TODO 3: Choose only needed credentials to present using PresentationExchange.selectCredentials
    const selectedCredentials = PresentationExchange.selectCredentials({
      vcJwts: state.customerCredentials,
      presentationDefinition: offering.data.requiredClaims,
    })

    // TODO 4: Create RFQ message to Request for a Quote
    const rfq = Rfq.create({
      metadata: {
        from: state.customerDid.uri,
        to: offering.metadata.from,
        protocol: '1.0'
      },
      data: {
        offeringId: offering.id,
        payin: {
          amount: amount.toString(),
          kind: offering.data.payin.methods[0].kind,
          paymentDetails: {}
        },
        payout: {
          kind: offering.data.payout.methods[0].kind,
          paymentDetails: payoutPaymentDetails
        },
        claims: selectedCredentials
      },
    })

    try {
      // TODO 5: Verify offering requirements with RFQ - rfq.verifyOfferingRequirements(offering)
      rfq.verifyOfferingRequirements(offering)
    } catch (e) {
      // handle failed verification
      console.log('Offering requirements not met', e)
    }

    // TODO 6: Sign RFQ message
    await rfq.sign(state.customerDid)

    console.log('RFQ:', rfq)

    try {
      // TODO 7: Submit RFQ message to the PFI .createExchange(rfq)
      await TbdexHttpClient.createExchange(rfq)
    }
    catch (error) {
      console.error('Failed to create exchange:', error);
    }
  }

  const fetchExchanges = async (pfiUri) => {
    try {
      // TODO 8: get exchanges from the PFI
      const exchanges = await TbdexHttpClient.getExchanges({
        pfiDid: pfiUri,
        did: state.customerDid
      });

      const mappedExchanges = formatMessages(exchanges)
      return mappedExchanges
    } catch (error) {
      console.error('Failed to fetch exchanges:', error);
    }
  }

  const addClose = async (exchangeId, pfiUri, reason) => {
    // TODO 9: Create Close message, sign it, and submit it to the PFI
    const close = Close.create({
      metadata: {
        from: state.customerDid.uri,
        to: pfiUri,
        exchangeId,
      },
      data: {
        reason
      }
    })

    await close.sign(state.customerDid)
    try {
      // send Close message
      await TbdexHttpClient.submitClose(close)
    }
    catch (error) {
      console.error('Failed to close exchange:', error);
    }
  }

  const addOrder = async (exchangeId, pfiUri) => {
    // TODO 10: Create Order message, sign it, and submit it to the PFI
    const order = Order.create({
      metadata: {
        from: state.customerDid.uri,
        to: pfiUri,
        exchangeId
      }
    })

    await order.sign(state.customerDid)
    try {
      // Send order message
      return await TbdexHttpClient.submitOrder(order)
    } catch (error) {
      console.error('Failed to submit order:', error);
    }
  };

  const pollExchanges = () => {
    const fetchAllExchanges = async () => {
      console.log('Polling exchanges again...');
      if (!state.customerDid) return
      const allExchanges = []
      try {
        for (const pfi of state.pfiAllowlist) {
          const exchanges = await fetchExchanges(pfi.pfiUri);
          allExchanges.push(...exchanges)
        }
        console.log('All exchanges:', allExchanges);
        updateExchanges(allExchanges.reverse());
        state.transactionsLoading = false;
      } catch (error) {
        console.error('Failed to fetch exchanges:', error);
      }
    };

    // Run the function immediately
    fetchAllExchanges();

    // Set up the interval to run the function periodically
    setInterval(fetchAllExchanges, 5000); // Poll every 5 seconds
  };

  const initializeDid = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        console.error('No user is logged in');
        router.push('/login');
        return;
      }

      const email = user.email;
      const donorRef = doc(db, 'donors', email);
      const donorDoc = await getDoc(donorRef);

      if (donorDoc.exists()) {
        // If a DID is stored in Firestore, retrieve it
        const storedDid = donorDoc.data().did;
        state.customerDid = await DidDht.import({ portableDid: JSON.parse(storedDid) });

        // Load stored credentials if they exist
        const storedCredentials = donorDoc.data().credentials;
        if (storedCredentials) {
          state.customerCredentials = JSON.parse(storedCredentials);
          localStorage.setItem('customerCredentials', JSON.stringify(state.customerCredentials));
        }

      } else {
        // If no DID is stored, create one and save it to Firestore
        state.customerDid = await DidDht.create({ options: { publish: true } });
        const exportedDid = await state.customerDid.export();

        // Save the DID and initial credentials to Firestore
        await setDoc(donorRef, {
          email: email,
          did: JSON.stringify(exportedDid),
          credentials: JSON.stringify(state.customerCredentials), // Save empty credentials initially
          createdAt: new Date(),
        });

        //Save to localStorage as a fallback
        localStorage.setItem('customerDid', JSON.stringify(exportedDid));
      }
    } catch (error) {
      console.error('Failed to initialize DID:', error);
    }
  };

  const formatMessages = (exchanges) => {
    const formattedMessages = exchanges.map(exchange => {
      const latestMessage = exchange[exchange.length - 1]
      const rfqMessage = exchange.find(message => message.kind === 'rfq')
      const quoteMessage = exchange.find(message => message.kind === 'quote')
      // console.log('quote', quoteMessage)
      const status = generateExchangeStatusValues(latestMessage)
      const fee = quoteMessage?.data['payin']?.['fee']
      const payinAmount = quoteMessage?.data['payin']?.['amount']
      const payoutPaymentDetails = rfqMessage.privateData?.payout.paymentDetails
      return {
        id: latestMessage.metadata.exchangeId,
        payinAmount: (fee ? Number(payinAmount) + Number(fee) : Number(payinAmount)).toString() || rfqMessage.data['payinAmount'],
        payinCurrency: quoteMessage.data['payin']?.['currencyCode'] ?? null,
        payoutAmount: quoteMessage?.data['payout']?.['amount'] ?? null,
        payoutCurrency: quoteMessage.data['payout']?.['currencyCode'],
        status,
        createdTime: rfqMessage.createdAt,
        ...latestMessage.kind === 'quote' && { expirationTime: quoteMessage.data['expiresAt'] ?? null },
        from: 'You',
        to: payoutPaymentDetails?.address || payoutPaymentDetails?.accountNumber + ', ' + payoutPaymentDetails?.bankName || payoutPaymentDetails?.phoneNumber + ', ' + payoutPaymentDetails?.networkProvider || 'Unknown',
        pfiDid: rfqMessage.metadata.to
      }
    })

    return formattedMessages;
  }

  const loadCredentials = async () => {
    try {
      // Get the currently authenticated user
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.error('No user is logged in');
        router.push('/login');
        return;
      }

      // Fetch credentials from Firestore
      const userDocRef = doc(db, 'users', user.uid); // Assuming 'users' collection with documents named after user IDs
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const data = userDoc.data();
        if (data.credentials) {
          // Load credentials from Firestore
          state.customerCredentials = data.credentials;
          console.log('Credentials loaded from Firestore:', state.customerCredentials);

          // Optionally, save credentials to localStorage for offline access
          localStorage.setItem('customerCredentials', JSON.stringify(state.customerCredentials));
        } else {
          console.log('No credentials found in Firestore.');
        }
      } else {
        console.log('User document does not exist in Firestore.');
      }
    } catch (error) {
      console.error('Error loading credentials from Firestore:', error);
    }
  };


  const addCredential = async (credential) => {
    state.customerCredentials.push(credential);
    localStorage.setItem('customerCredentials', JSON.stringify(state.customerCredentials));
    const user = auth.currentUser;
    if (user) {
      const donorRef = doc(db, 'donors', user.email);
      // Update Firestore with new credentials
      await setDoc(donorRef, {
        credentials: JSON.stringify(state.customerCredentials)
      }, { merge: true });
    }

  };

  const renderCredential = (credentialJwt) => {
    const vc = Jwt.parse({ jwt: credentialJwt }).decoded.payload['vc']
    return {
      title: vc.type[vc.type.length - 1].replace(/(?<!^)(?<![A-Z])[A-Z](?=[a-z])/g, ' $&'), // get the last credential type in the array and format it with spaces
      name: vc.credentialSubject['name'],
      countryCode: vc.credentialSubject['countryOfResidence'],
      issuanceDate: new Date(vc.issuanceDate).toLocaleDateString(undefined, { dateStyle: 'medium' }),
    }
  }

  // Watch the balance and persist it to localStorage on change
  watch(() => state.balance, async (newBalance) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.log('User is not authenticated, redirecting to login...');
        router.push('/login'); // Adjust the URL as per your routing
        return;
      }

      // Persist balance to Firestore
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, { balance: newBalance }, { merge: true }); // Merge to avoid overwriting other fields
      console.log('Balance updated in Firestore:', newBalance);

      // Optionally, persist to localStorage for offline access
      if (typeof window !== 'undefined') {
        localStorage.setItem('walletBalance', newBalance.toString());
      }
    } catch (error) {
      console.error('Error updating balance in Firestore:', error);
    }
  });


  const generateExchangeStatusValues = (exchangeMessage) => {
    if (exchangeMessage instanceof Close) {
      if (exchangeMessage.data.reason.toLowerCase().includes('complete') || exchangeMessage.data.reason.toLowerCase().includes('success')) {
        return 'completed'
      } else if (exchangeMessage.data.reason.toLowerCase().includes('expired')) {
        return exchangeMessage.data.reason.toLowerCase()
      } else if (exchangeMessage.data.reason.toLowerCase().includes('cancelled')) {
        return 'cancelled'
      } else {
        return 'failed'
      }
    }
    return exchangeMessage.kind
  }

  const renderOrderStatus = (exchange) => {
    const status = generateExchangeStatusValues(exchange)
    switch (status) {
      case 'rfq':
        return 'Requested'
      case 'quote':
        return 'Quoted'
      case 'order':
      case 'orderstatus':
        return 'Pending'
      case 'completed':
        return 'Completed'
      case 'expired':
        return 'Expired'
      case 'cancelled':
        return 'Cancelled'
      case 'failed':
        return 'Failed'
      default:
        return status
    }
  }

  const selectTransaction = (transaction) => {
    state.selectedTransaction = transaction;
  };

  const setOffering = (offering) => {
    state.offering = offering;
  };

  const deductAmount = async (amount) => {
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount) && numericAmount > 0) {
      state.balance -= numericAmount;

      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
          console.log('User is not authenticated, redirecting to login...');
          router.push('/login'); // Adjust the URL as per your routing
          return;
        }

        // Persist balance to Firestore
        const userDocRef = doc(db, 'donors', user.email);
        await setDoc(userDocRef, { balance: state.balance }, { merge: true });
        console.log('Balance deducted and updated in Firestore:', state.balance);

        // Optionally, persist to localStorage for offline access
        localStorage.setItem('walletBalance', state.balance.toString());
      } catch (error) {
        console.error('Error deducting balance in Firestore:', error);
      }
    }
  };


  const formatAmount = (amount) => {
    if (Math.abs(amount) >= 1) {
      return amount.toFixed(2);
    }

    const precision = Math.abs(amount) >= 0.01 ? 4 : 6;
    return parseFloat(amount.toFixed(precision)).toString();
  };


  const getOfferingById = (offeringId) => {
    const selectedOffering = state.offerings.find(offering => offering.id === offeringId);
    console.log('Selected offering:', selectedOffering);
    return selectedOffering;
  }

  const updateCurrencies = () => {
    const payinCurrencies = new Set();
    const payoutCurrencies = new Set();

    state.offerings.forEach(offering => {
      payinCurrencies.add(offering.data.payin.currencyCode);
      payoutCurrencies.add(offering.data.payout.currencyCode);
    });

    state.payinCurrencies = Array.from(payinCurrencies);
    state.payoutCurrencies = Array.from(payoutCurrencies);
  };

  const filterOfferings = (payinCurrency, payoutCurrency) => {
    return state.offerings.filter(offering =>
      offering.data.payin.currencyCode === payinCurrency &&
      offering.data.payout.currencyCode === payoutCurrency
    );
  };

  const satisfiesOfferingRequirements = (offering, credentials) => {
    if (credentials.length === 0 || !offering.data.requiredClaims) {
      return false;
    }

    try {
      // Validate customer's VCs against the offering's presentation definition
      PresentationExchange.satisfiesPresentationDefinition({
        vcJwts: credentials,
        presentationDefinition: offering.data.requiredClaims,
      })
      return true
    } catch (e) {
      return false
    }
  }

  const updateExchanges = (newTransactions) => {
    const existingExchangeIds = state.transactions.map(tx => tx.id);
    const updatedExchanges = [...state.transactions];

    newTransactions.forEach(newTx => {
      const existingTxIndex = updatedExchanges.findIndex(tx => tx.id === newTx.id);
      if (existingTxIndex > -1) {
        // Update the existing transaction
        updatedExchanges[existingTxIndex] = newTx;
      } else {
        // Add the new transaction
        updatedExchanges.push(newTx);
      }
    });

    // Sort the transactions if needed
    // updatedTransactions.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime));

    // Update the state with the new transactions
    state.transactions = updatedExchanges;
  };

  // Automatically fetch offerings on load
  onMounted(async () => {
    console.log('Fetching offerings...');
    fetchOfferings();
    console.log('Initializing DID...');
    await initializeDid();
    console.log('Loading credentials...');
    loadCredentials();
    console.log('Loading balance...');
    await loadBalance();
  });

  return { state, selectTransaction, setOffering, deductAmount, formatAmount, fetchOfferings, filterOfferings, satisfiesOfferingRequirements, addCredential, renderCredential, createExchange, fetchExchanges, renderOrderStatus, addOrder, addClose, getOfferingById, pollExchanges };

};
