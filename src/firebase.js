import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getAnalytics } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDT2vb-sMcMnDH92HpYe0zFZkB9KeWg0J4",
    authDomain: "care-cove.firebaseapp.com",
    projectId: "care-cove",
    storageBucket: "care-cove.appspot.com",
    messagingSenderId: "206987749536",
    appId: "1:206987749536:web:cf0625e1d6a41cb108c1c5",
    measurementId: "G-7CY3YDPWCV"
})

const app = initializeApp(firebaseApp);
getAnalytics(app);

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')