<template>
    <div>
      <NuxtPage />
    </div>
  </template>
  <script setup lang="ts">
  import { useStore } from '~/data_providers/data';
  import { firebaseApp } from '~/src/firebaseConfig';
  import { provide } from 'vue';
  
  const store = useStore();
  provide('store', store);
  firebaseApp.automaticDataCollectionEnabled;
  
  useHead({
    title: 'CareCove',
    meta: [
      { name: 'description', content: 'Donation platform using tbDEX SDK' }
    ]
  })
  </script>
  