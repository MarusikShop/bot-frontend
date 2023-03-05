<template>
    <main class="container-basket">
        <ProductInBasket v-for="(item, index) in basket" :key="'basket_' + index" :data="item" />
        <SummaryBasket :products="basket" />
    </main>
</template>

<script setup>
    import ProductInBasket from '../components/ProductInBasket.vue';
    import SummaryBasket from '../components/SummaryBasket.vue';

    import { useGeneralStore } from '../stores/general.store';
    import { storeToRefs } from 'pinia';

    const store = useGeneralStore();
    const { basket } = storeToRefs(store);

</script>

<style lang="scss" scoped>
    .container-basket {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
</style>