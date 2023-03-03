<template>
    <article class="product" @click="goToPage">
        <div class="product__cover" :style="{ 'background-image': `url(${data?.images?.[0]})` }"></div>
        <div class="product_info">
            <div class="product_info__price">{{ data?.price }} ₽</div>
            <div class="product_info__name">{{ data?.name }}</div>
        </div>
        <div class="product__actions" v-if="!data.modifications.length">
            <ProductToBasket :data="data" />
        </div>
    </article>
</template>

<script setup>
    import ProductToBasket from './ProductToBasket.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const props = defineProps({
        data: Object
    })

    function goToPage() {
        router.push({ path: `/product/${props.data?.id}` })
    }
    
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
            height: 100%;

            &__price {
                font-size: 18px;
                font-weight: bold;
            }
        }
        &__actions {
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 0px 20px;
        }
    }
</style>