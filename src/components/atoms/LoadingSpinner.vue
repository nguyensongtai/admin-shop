<!-- components/atoms/LoadingSpinner.vue -->
<template>
  <div class="loading-spinner"></div>
</template>

<script setup lang="ts">
// Add any props or setup code here if needed
</script>

<style scoped>
@keyframes spinner {
  to { transform: rotate(360deg); }
}

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spinner 0.6s linear infinite;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9999;
}

</style>
