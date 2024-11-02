<template>
  <div class="bg-white dark:bg-[#10673b] rounded-lg shadow p-6">
    <h2 class="text-2xl font-bold mb-4">Credentials</h2>
    <div v-if="parsedCredentials.length">
      <div v-for="credential, index in parsedCredentials" :key="index" class="mb-4 p-4 border rounded-lg lg:w-1/2 w-full">
        <p><strong>{{ credential.title }} </strong></p>
        <p><strong>Name:</strong> {{ credential.name }}</p>
        <p><strong>Country Code:</strong> {{ credential.countryCode }}</p>
        <p><strong>Date:</strong> {{ credential.issuanceDate }}</p>
      </div>
    </div>
    <div v-else>
      <p>No credentials found.</p>
      <br />
      <button @click="createCredential" class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2">
        Create Credential
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '~/src/data';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const { state, renderCredential } = useStore();

const parsedCredentials = computed(() =>
  state.customerCredentials.map(jwt => renderCredential(jwt))
);

const createCredential = () => {
  router.push('/credentials');
};
</script>
