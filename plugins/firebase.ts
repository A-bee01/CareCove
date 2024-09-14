import { defineNuxtPlugin } from '#app';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin(nuxtApp => {
  // Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyDT2vb-sMcMnDH92HpYe0zFZkB9KeWg0J4',
    authDomain: 'care-cove.firebaseapp.com',
    projectId: 'care-cove',
    storageBucket: 'care-cove.appspot.com',
    messagingSenderId: '206987749536',
    appId: '1:206987749536:web:cf0625e1d6a41cb108c1c5',
    measurementId: 'G-7CY3YDPWCV',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  nuxtApp.provide('db', db);
  nuxtApp.provide('auth', auth);
});
