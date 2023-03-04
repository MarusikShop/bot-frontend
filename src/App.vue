<template>
  <RouterView />
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import { useGeneralStore } from './stores/general.store';
  import { onMounted } from 'vue';

  const store = useGeneralStore();
  const { initAppTg, fetchDataForBasket } = store;

  onMounted(async () => {
    initAppTg();
    await fetchDataForBasket();
  })

</script>

<style scoped>

</style>
