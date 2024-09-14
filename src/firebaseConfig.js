import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDT2vb-sMcMnDH92HpYe0zFZkB9KeWg0J4",
  authDomain: "care-cove.firebaseapp.com",
  projectId: "care-cove",
  storageBucket: "care-cove.appspot.com",
  messagingSenderId: "206987749536",
  appId: "1:206987749536:web:cf0625e1d6a41cb108c1c5",
  measurementId: "G-7CY3YDPWCV"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
