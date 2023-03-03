<template>
    <main class="container">
        <Product v-for="item in products" :key="item.id" :data="item" />
    </main>
</template>

<script setup>
    import Product from '../components/Product.vue';
    import { useGeneralStore } from '../stores/general.store';
    import { storeToRefs } from 'pinia';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router'

    const route = useRoute()

    const store = useGeneralStore();

    const { products } = storeToRefs(store);
    const { getProducts } = store;

    onMounted(async () => {
        await getProducts(route.params.id);
    })
</script>