<template>
  <div>
    <h1>Nuxt + Catalyst Auth Demo</h1>
    <p v-if="isAuthenticated">✅ User is authenticated</p>
    <p v-else>❌ Not authenticated</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isAuthenticated = ref(false);

onMounted(() => {
  if (window.catalyst?.auth) {
    isAuthenticated.value = window.catalyst.auth.isUserAuthenticated();
  }
});
</script>

<style>
/* Optional styling */
h1 {
  color: #2c3e50;
}
</style>
