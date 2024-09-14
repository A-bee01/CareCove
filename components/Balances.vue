<template>
  <div class="bg-white dark:bg-[#10673b] rounded-lg shadow p-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold">Balance</h2>
    </div>
    <div class="text-4xl font-bold my-4">TB$ {{ balance }}</div>
  </div>
  <div class="bg-[#10673b] rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-4">Donate</h2>
    <form @submit.prevent="submitDonation" class="space-y-4">
      <div>
        <label for="cause" class="block text-sm font-medium mb-1"
          >Cause</label
        >
        <select
          v-model="selectedCause"
          id="cause"
          class="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-700"
          required
        >
          <option value="">Select a cause</option>
          <option v-for="cause in causes" :key="cause" :value="cause">
            {{ cause }}
          </option>
        </select>
      </div>
      <nuxt-link
        to="/donate"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-5 h-5 mr-2"
        >
          <path d="m22 2-7 20-4-9-9-4Z"></path>
          <path d="M22 2 11 13"></path>
        </svg>
        Donate
      </nuxt-link>
    </form>
  </div>
</template>

<script setup>
import { useStore } from "~/data_providers/data";
const selectedCause = ref("");

const causes = [
  "Environmental Conservation",
  "Education for All",
  "Healthcare Access",
  "Animal Welfare",
  "Hunger Relief",
];
const { state } = useStore();
const balance = computed(() => state.balance);

</script>
