<template>
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-1 bg-[#ffffff] dark:bg-[#ffffff] py-8 px-6 md:px-8">
        <div class="max-w-3xl mx-auto bg-white dark:bg-[#10673b] rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4 dark:text-white">Login / Register</h2>
  
          <form @submit.prevent="loginWithEmail">
            <div class="mb-4">
              <label class="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input v-model="email" type="email" required class="w-full p-2 border rounded" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
              <input v-model="password" type="password" required class="w-full p-2 border rounded" />
            </div>
            <button type="submit" class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2">
             Continue
            </button>
          </form>
  
          <div class="mt-4">
            <button @click="loginWithGoogle" class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 h-10 px-4 py-2">
             Continue with Google
            </button>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
  import { firebaseApp } from '~/src/firebaseConfig'; // Adjust based on where you place your Firebase config
  import Header from '~/components/Header.vue';
  
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const email = ref('');
  const password = ref('');
  
  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      router.push('/dashboard'); // Redirect after successful login
    } catch (error) {
      console.error('Error logging in with email/password:', error);
      if (error.code === 'auth/user-not-found') {
        console.error('User not found. Please sign up.');
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        router.push('/dashboard'); // Redirect after successful signup
      }
    }
  };
  
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard'); // Redirect after successful login
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };
  </script>
  