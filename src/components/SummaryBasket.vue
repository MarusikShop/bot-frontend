<template>
    <article class="summary">
        <div class="summary__row">
            <div class="summary__title">Ваша корзина</div>
            <div class="summary__column">3 товара на сумму <b class="font-size--16">5 893 ₽</b></div>
        </div>
    </article>
</template>

<script setup>

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