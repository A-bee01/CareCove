import { reactive, watch } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue/index.mjs';
import { TbdexHttpClient, Rfq, Close, Order } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/@tbdex/http-client/dist/esm/src/main.js';
import { PresentationExchange, Jwt } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/@web5/credentials/dist/esm/index.js';
import { getAuth, onAuthStateChanged } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/firebase/auth/dist/index.mjs';
import { doc, setDoc } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/firebase/firestore/dist/index.mjs';
import { e as db } from './server.mjs';
import { useRouter } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue-router/dist/vue-router.node.mjs';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const mockProviderDids = {
  aquafinance_capital: {
    uri: "did:dht:3fkz5ssfxbriwks3iy5nwys3q5kyx64ettp9wfn1yfekfkiguj1y",
    name: "AquaFinance Capital",
    description: "Provides exchanges with the Ghanaian Cedis: GHS to USDC, GHS to KES"
  },
  flowback_financial: {
    uri: "did:dht:zkp5gbsqgzn69b3y5dtt5nnpjtdq6sxyukpzo68npsf79bmtb9zy",
    name: "Flowback Financial",
    description: "Offers international rates with various currencies - USD to GBP, GBP to CAD."
  },
  vertex_liquid_assets: {
    uri: "did:dht:enwguxo8uzqexq14xupe4o9ymxw3nzeb9uug5ijkj9rhfbf1oy5y",
    name: "Vertex Liquid Assets",
    description: "Offers currency exchanges between African currencies - MAD to EGP, GHS to NGN."
  },
  titanium_trust: {
    uri: "did:dht:ozn5c51ruo7z63u1h748ug7rw5p1mq3853ytrd5gatu9a8mm8f1o",
    name: "Titanium Trust",
    description: "Provides offerings to exchange USD to African currencies - USD to GHS, USD to KES."
  }
};
const useStore = () => {
  const state = reactive({
    balance: 1e3,
    transactions: [],
    transactionsLoading: true,
    pfiAllowlist: Object.keys(mockProviderDids).map((key) => ({
      pfiUri: mockProviderDids[key].uri,
      pfiName: mockProviderDids[key].name,
      pfiDescription: mockProviderDids[key].description
    })),
    selectedTransaction: null,
    offering: null,
    payinCurrencies: [],
    payoutCurrencies: [],
    offerings: [],
    customerDid: null,
    customerCredentials: []
  });
  const auth = getAuth();
  const router = useRouter();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/login");
    }
  });
  const fetchOfferings = async () => {
    try {
      const allOfferings = [];
      for (const pfi of state.pfiAllowlist) {
        const pfiUri = pfi.pfiUri;
        const offerings = await TbdexHttpClient.getOfferings({
          pfiDid: pfiUri
        });
        allOfferings.push(...offerings);
      }
      state.offerings = allOfferings;
      updateCurrencies();
    } catch (error) {
      console.error("Failed to fetch offerings:", error);
    }
  };
  const createExchange = async (offering, amount, payoutPaymentDetails) => {
    const selectedCredentials = PresentationExchange.selectCredentials({
      vcJwts: state.customerCredentials,
      presentationDefinition: offering.data.requiredClaims
    });
    const rfq = Rfq.create({
      metadata: {
        from: state.customerDid.uri,
        to: offering.metadata.from,
        protocol: "1.0"
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
      }
    });
    try {
      rfq.verifyOfferingRequirements(offering);
    } catch (e) {
      console.log("Offering requirements not met", e);
    }
    await rfq.sign(state.customerDid);
    console.log("RFQ:", rfq);
    try {
      await TbdexHttpClient.createExchange(rfq);
    } catch (error) {
      console.error("Failed to create exchange:", error);
    }
  };
  const fetchExchanges = async (pfiUri) => {
    try {
      const exchanges = await TbdexHttpClient.getExchanges({
        pfiDid: pfiUri,
        did: state.customerDid
      });
      const mappedExchanges = formatMessages(exchanges);
      return mappedExchanges;
    } catch (error) {
      console.error("Failed to fetch exchanges:", error);
    }
  };
  const addClose = async (exchangeId, pfiUri, reason) => {
    const close = Close.create({
      metadata: {
        from: state.customerDid.uri,
        to: pfiUri,
        exchangeId
      },
      data: {
        reason
      }
    });
    await close.sign(state.customerDid);
    try {
      await TbdexHttpClient.submitClose(close);
    } catch (error) {
      console.error("Failed to close exchange:", error);
    }
  };
  const addOrder = async (exchangeId, pfiUri) => {
    const order = Order.create({
      metadata: {
        from: state.customerDid.uri,
        to: pfiUri,
        exchangeId
      }
    });
    await order.sign(state.customerDid);
    try {
      return await TbdexHttpClient.submitOrder(order);
    } catch (error) {
      console.error("Failed to submit order:", error);
    }
  };
  const pollExchanges = () => {
    const fetchAllExchanges = async () => {
      console.log("Polling exchanges again...");
      if (!state.customerDid)
        return;
      const allExchanges = [];
      try {
        for (const pfi of state.pfiAllowlist) {
          const exchanges = await fetchExchanges(pfi.pfiUri);
          allExchanges.push(...exchanges);
        }
        console.log("All exchanges:", allExchanges);
        updateExchanges(allExchanges.reverse());
        state.transactionsLoading = false;
      } catch (error) {
        console.error("Failed to fetch exchanges:", error);
      }
    };
    fetchAllExchanges();
    setInterval();
  };
  const formatMessages = (exchanges) => {
    const formattedMessages = exchanges.map((exchange) => {
      var _a2, _b2, _c2;
      var _a, _b, _c, _d, _e, _f;
      const latestMessage = exchange[exchange.length - 1];
      const rfqMessage = exchange.find((message) => message.kind === "rfq");
      const quoteMessage = exchange.find((message) => message.kind === "quote");
      const status = generateExchangeStatusValues(latestMessage);
      const fee = (_a = quoteMessage == null ? void 0 : quoteMessage.data["payin"]) == null ? void 0 : _a["fee"];
      const payinAmount = (_b = quoteMessage == null ? void 0 : quoteMessage.data["payin"]) == null ? void 0 : _b["amount"];
      const payoutPaymentDetails = (_c = rfqMessage.privateData) == null ? void 0 : _c.payout.paymentDetails;
      return {
        id: latestMessage.metadata.exchangeId,
        payinAmount: (fee ? Number(payinAmount) + Number(fee) : Number(payinAmount)).toString() || rfqMessage.data["payinAmount"],
        payinCurrency: (_a2 = (_d = quoteMessage.data["payin"]) == null ? void 0 : _d["currencyCode"]) != null ? _a2 : null,
        payoutAmount: (_b2 = (_e = quoteMessage == null ? void 0 : quoteMessage.data["payout"]) == null ? void 0 : _e["amount"]) != null ? _b2 : null,
        payoutCurrency: (_f = quoteMessage.data["payout"]) == null ? void 0 : _f["currencyCode"],
        status,
        createdTime: rfqMessage.createdAt,
        ...latestMessage.kind === "quote" && { expirationTime: (_c2 = quoteMessage.data["expiresAt"]) != null ? _c2 : null },
        from: "You",
        to: (payoutPaymentDetails == null ? void 0 : payoutPaymentDetails.address) || (payoutPaymentDetails == null ? void 0 : payoutPaymentDetails.accountNumber) + ", " + (payoutPaymentDetails == null ? void 0 : payoutPaymentDetails.bankName) || (payoutPaymentDetails == null ? void 0 : payoutPaymentDetails.phoneNumber) + ", " + (payoutPaymentDetails == null ? void 0 : payoutPaymentDetails.networkProvider) || "Unknown",
        pfiDid: rfqMessage.metadata.to
      };
    });
    return formattedMessages;
  };
  const addCredential = async (credential) => {
    state.customerCredentials.push(credential);
    localStorage.setItem("customerCredentials", JSON.stringify(state.customerCredentials));
    const user = auth.currentUser;
    if (user) {
      const donorRef = doc(db, "donors", user.email);
      await setDoc(donorRef, {
        credentials: JSON.stringify(state.customerCredentials)
      }, { merge: true });
    }
  };
  const renderCredential = (credentialJwt) => {
    const vc = Jwt.parse({ jwt: credentialJwt }).decoded.payload["vc"];
    return {
      title: vc.type[vc.type.length - 1].replace(new RegExp("(?<!^)(?<![A-Z])[A-Z](?=[a-z])", "g"), " $&"),
      // get the last credential type in the array and format it with spaces
      name: vc.credentialSubject["name"],
      countryCode: vc.credentialSubject["countryOfResidence"],
      issuanceDate: new Date(vc.issuanceDate).toLocaleDateString(void 0, { dateStyle: "medium" })
    };
  };
  watch(() => state.balance, async (newBalance) => {
    try {
      const auth2 = getAuth();
      const user = auth2.currentUser;
      if (!user) {
        console.log("User is not authenticated, redirecting to login...");
        router.push("/login");
        return;
      }
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { balance: newBalance }, { merge: true });
      console.log("Balance updated in Firestore:", newBalance);
      if (false)
        ;
    } catch (error) {
      console.error("Error updating balance in Firestore:", error);
    }
  });
  const generateExchangeStatusValues = (exchangeMessage) => {
    if (exchangeMessage instanceof Close) {
      if (exchangeMessage.data.reason.toLowerCase().includes("complete") || exchangeMessage.data.reason.toLowerCase().includes("success")) {
        return "completed";
      } else if (exchangeMessage.data.reason.toLowerCase().includes("expired")) {
        return exchangeMessage.data.reason.toLowerCase();
      } else if (exchangeMessage.data.reason.toLowerCase().includes("cancelled")) {
        return "cancelled";
      } else {
        return "failed";
      }
    }
    return exchangeMessage.kind;
  };
  const renderOrderStatus = (exchange) => {
    const status = generateExchangeStatusValues(exchange);
    switch (status) {
      case "rfq":
        return "Requested";
      case "quote":
        return "Quoted";
      case "order":
      case "orderstatus":
        return "Pending";
      case "completed":
        return "Completed";
      case "expired":
        return "Expired";
      case "cancelled":
        return "Cancelled";
      case "failed":
        return "Failed";
      default:
        return status;
    }
  };
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
        const auth2 = getAuth();
        const user = auth2.currentUser;
        if (!user) {
          console.log("User is not authenticated, redirecting to login...");
          router.push("/login");
          return;
        }
        const userDocRef = doc(db, "donors", user.email);
        await setDoc(userDocRef, { balance: state.balance }, { merge: true });
        console.log("Balance deducted and updated in Firestore:", state.balance);
        localStorage.setItem("walletBalance", state.balance.toString());
      } catch (error) {
        console.error("Error deducting balance in Firestore:", error);
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
    const selectedOffering = state.offerings.find((offering) => offering.id === offeringId);
    console.log("Selected offering:", selectedOffering);
    return selectedOffering;
  };
  const updateCurrencies = () => {
    const payinCurrencies = /* @__PURE__ */ new Set();
    const payoutCurrencies = /* @__PURE__ */ new Set();
    state.offerings.forEach((offering) => {
      payinCurrencies.add(offering.data.payin.currencyCode);
      payoutCurrencies.add(offering.data.payout.currencyCode);
    });
    state.payinCurrencies = Array.from(payinCurrencies);
    state.payoutCurrencies = Array.from(payoutCurrencies);
  };
  const filterOfferings = (payinCurrency, payoutCurrency) => {
    return state.offerings.filter(
      (offering) => offering.data.payin.currencyCode === payinCurrency && offering.data.payout.currencyCode === payoutCurrency
    );
  };
  const satisfiesOfferingRequirements = (offering, credentials) => {
    if (credentials.length === 0 || !offering.data.requiredClaims) {
      return false;
    }
    try {
      PresentationExchange.satisfiesPresentationDefinition({
        vcJwts: credentials,
        presentationDefinition: offering.data.requiredClaims
      });
      return true;
    } catch (e) {
      return false;
    }
  };
  const updateExchanges = (newTransactions) => {
    state.transactions.map((tx) => tx.id);
    const updatedExchanges = [...state.transactions];
    newTransactions.forEach((newTx) => {
      const existingTxIndex = updatedExchanges.findIndex((tx) => tx.id === newTx.id);
      if (existingTxIndex > -1) {
        updatedExchanges[existingTxIndex] = newTx;
      } else {
        updatedExchanges.push(newTx);
      }
    });
    state.transactions = updatedExchanges;
  };
  return { state, selectTransaction, setOffering, deductAmount, formatAmount, fetchOfferings, filterOfferings, satisfiesOfferingRequirements, addCredential, renderCredential, createExchange, fetchExchanges, renderOrderStatus, addOrder, addClose, getOfferingById, pollExchanges };
};

export { useStore as u };
//# sourceMappingURL=data-BXX_a5-m.mjs.map
