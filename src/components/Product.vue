<template>
    <article class="product">
        <div class="product__cover"></div>
        <div class="product_info">
            <div class="product_info__price">1 394 ₽</div>
            <div class="product_info__name">
                <RouterLink to="/product/123">Сумка мужская, RCJSK82953</RouterLink>
            </div>
        </div>
        <div class="product__actions">
            <RouterLink to="/basket"><Button>В корзину</Button></RouterLink>
        </div>
    </article>
</template>

<script setup>
    import Button from './form/Button.vue';
</script>

<style lang="scss" scoped>
    @import '../assets/styles/template.scss';
    .product {
        @extend %card;

        &__cover {
            @extend %cover;
            background-image: url('../assets/images/redmond.jpg');
        }
        &_info {
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 0px 20px;

            &__price {
                font-size: 18px;
                font-weight: bold;
            }
        }
        &__actions {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 0px 20px;
        }
    }
</style>