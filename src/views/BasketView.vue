<template>
    <main class="container-basket">
        <ProductInBasket />
        <ProductInBasket />
        <ProductInBasket />
        <SummaryBasket />
    </main>
</template>

<script setup>
    import ProductInBasket from '../components/ProductInBasket.vue';
    import SummaryBasket from '../components/SummaryBasket.vue';
</script>

<style lang="scss" scoped>
    .container-basket {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
</style>