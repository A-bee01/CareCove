<template>
    <div>
      <NuxtPage />
    </div>
  </template>
  <script setup lang="ts">
  import { useStore } from '~/data_providers/donation_handler.js';
  import { provide } from 'vue';
  
  const store = useStore();
  provide('store', store);
  
  useHead({
    title: 'CareCove',
    meta: [
      { name: 'description', content: 'Donation platform using tbDEX SDK' }
    ]
  })
  </script>
  