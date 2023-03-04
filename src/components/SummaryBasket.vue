<template>
    <article class="summary">
        <div class="summary__row">
            <div class="summary__title">Ваша корзина</div>
            <div class="summary__column">{{ countProducts }} товара на сумму <b class="font-size--16">{{ (amount).toFixed(0) }} ₽</b></div>
        </div>
    </article>
</template>

<script setup>
    import { onMounted, ref, watch } from 'vue';

    const props = defineProps({
        products: Array
    })

    const countProducts = ref(0);
    const amount = ref(0);

    watch(props, (data) => {
        amount.value = 0;
        countProducts.value = data.products.length;
        for (let row of data.products) {
            amount.value += row.count * row.price;
        }
    })

    onMounted(() => {
        countProducts.value = props.products.length;
        for (let row of props.products) {
            amount.value += row.count * row.price;
        }
    })

</script>

<style lang="scss" scoped>
    @import '../assets/styles/template.scss';
    .summary {
        width: 100%;
        min-height: 1px;
        max-width: 600px;
        background-color: #fff;
        padding: 20px;
        @extend %box-shadow;

        &__row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__column {
            font-size: 16px;
        }
        &__title {
            font-weight: bold;
            font-size: 20px;
        }
    }
</style>