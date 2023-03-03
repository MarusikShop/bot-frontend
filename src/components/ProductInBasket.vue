<template>
    <article class="product">
        <div class="product_body">
            <div class="product__cover" :style="{ backgroundImage: `url(${data.images[0]})` }"></div>
            <div class="product_info">
                <div class="product_info__price">{{ data.price * data.count }} ₽</div>
                <div class="product_info__name">{{ data.name }}</div>
                <div class="product_info__name" v-if="data.modId">{{ data.modification?.name }}: {{ data.modification?.value }}</div>
                <div class="product_info__price-per-unit">{{ data.price }} ₽ / ед.</div>
            </div>
        </div>
        <div class="product_footer">
            <div class="product_footer_delete">
                <span class="product_footer__icon"></span>
                <span>Удалить</span>
            </div>
            <span>{{ data.count }} шт.</span>
        </div>
    </article>
</template>

<script setup>
    defineProps({
        data: Object
    });
</script>

<style lang="scss" scoped>
    @import '../assets/styles/template.scss';

    .product {
        width: 100%;
        min-height: 1px;
        max-width: 600px;
        background-color: #fff;
        @extend %box-shadow;

        &_body {
            display: flex;
            gap: 20px;
            padding: 15px 20px;
        }
        &_footer {
            border-top: 1px solid rgb(236, 236, 236);
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 40px;
            padding: 15px 20px;

            &_delete {
                display: flex;
                align-items: center;
                gap: 5px;
            }

            &__icon {
                width: 20px;
                height: 20px;
                @extend %background-image;
                background-image: url('../assets/images/icons/delete-basket.svg');
            }
        }

        &__cover {
            width: 150px;
            height: 100px;
            @extend %background-image;
            background-image: url('../assets/images/redmond.jpg');
        }
        &_info {
            display: flex;
            flex-direction: column;
            gap: 5px;

            &__price {
                font-weight: bold;
                font-size: 18px;
            }
            &__price-per-unit {
                font-size: 14px;
                color: gray;
            }
        }
    }
</style>