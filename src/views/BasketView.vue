<template>
    <main class="container-basket">
        <ProductInBasket v-for="(item, index) in products" :key="'baseket_' + index" :data="item" />
        <SummaryBasket :products="products" />
    </main>
</template>

<script setup>
    import ProductInBasket from '../components/ProductInBasket.vue';
    import SummaryBasket from '../components/SummaryBasket.vue';

    import { useGeneralStore } from '../stores/general.store';
    import { onMounted, ref } from 'vue';

    const store = useGeneralStore();
    const { getBasket } = store;

    const products = ref([]);

    onMounted(async () => {
        products.value = await getBasket();
    })

</script>

<style lang="scss" scoped>
    .container-basket {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
</style>