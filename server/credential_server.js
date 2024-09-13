import express from 'express';
import cors from 'cors';  // Import CORS middleware

const app = express();
const port = 9000;

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mock function to generate a Verifiable Credential (VC)
const generateCredential = (name, countryCode, did) => {
  const currentDate = new Date().toISOString();
  return {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential"],
    issuer: "did:web:localhost:9000",
    issuanceDate: currentDate,
    credentialSubject: {
      id: did,
      name: name,
      countryCode: countryCode,
    },
    proof: {
      type: "Ed25519Signature2020",
      created: currentDate,
      verificationMethod: "did:web:localhost:9000#key-1",
      proofPurpose: "assertionMethod",
    },
  };
};

// Endpoint to create a Verifiable Credential (VC)
app.get('/vc', (req, res) => {
  const { name, country, did } = req.query;

  if (!name || !country || !did) {
    return res.status(400).send('Missing required parameters: name, country, or did');
  }

  const credential = generateCredential(name, country, did);

  // Respond with the credential as a JSON string
  res.json(credential);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
