<template>
    <main>
        <ProductInfo :data="findProductById(route.params.id)" />
        <RouterLink to="/basket">Перейти в корзину</RouterLink>
    </main>
</template>

<script setup>
    import ProductInfo from '../components/ProductInfo.vue';
    import { useGeneralStore } from '../stores/general.store';
    import { storeToRefs } from 'pinia';
    import { useRoute } from 'vue-router'

    const route = useRoute()

    const store = useGeneralStore();

    const { findProductById } = storeToRefs(store);
</script>

<style lang="scss" scoped>

</style>