<template>
    <div class="product-info">
        <div class="product-info_item product-info_item--center">
            <div class="product-info__cover" :style="{ 'background-image': `url(${data.images[0]})` }"></div>
            <div class="product-info_switch">
                <div class="product-info_switch__item active"></div>
                <div class="product-info_switch__item"></div>
                <div class="product-info_switch__item"></div>
            </div>
        </div>
        <div class="product-info_item">
            <div class="product-info__price">{{ data.price }} ₽</div>
            <div class="product-info__name">{{ data.name }}</div>
        </div>
        <div class="product-info_item">
            <div class="product-info_modifications" v-if="data.modifications.length">
                <div class="product-info_modifications__title">
                    <p>{{ data?.modifications[0]?.name }}: <span>{{ data?.modifications[0]?.props?.[0].name }}</span></p>
                </div>
                <div class="product-info_modifications_body scroll">
                    <div class="product-info_modifications_body__item" 
                        v-for="item in data?.modifications?.[0]?.props" 
                        :key="item.id"
                        @click="() => changeActive(item.id)" 
                        :class="{ 'active': item.id == activeModification }">
                            {{ item.name }}
                        </div>
                </div>
            </div>
            <div class="product-info_item_menu">
                <div class="product-info_item_menu__item active">Описание</div>
                <div class="product-info_item_menu__item">Характеристики</div>
            </div>
            <div class="product-info__description">
                <p v-html="data?.description.replace(/\n/g, '<br />')"></p>
            </div>
        </div>
        <div class="product-info_item">
            <div class="product-info__actions">
                <ProductToBasket :data="data" :modification="activeModification" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import ProductToBasket from './ProductToBasket.vue';

    const props = defineProps({
        data: Object
    })

    const activeModification = ref(props.data?.modifications?.[0]?.props?.[0].id);

    function changeActive(id) {
        activeModification.value = id;
    }

</script>

<style lang="scss" scoped>
    @import '../assets/styles/template.scss';
    @import '../assets/styles/variables.scss';
    .product-info {
        width: 100%;
        max-width: 800px;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        gap: 10px;

        &__cover {
            width: 300px;
            @extend %background-image;
            height: 400px;
            background-image: url('../assets/images/redmond.jpg');
        }
        &__price {
            font-weight: bold;
            font-size: 30px;
        }
        &__name {
            font-weight: bold;
            font-size: 20px;
        }
        &__actions {
            width: 50%;
            max-width: 200px;
            margin: 0px auto;
        }


        &_switch {
            display: flex;
            gap: 5px;

            .active {
                width: 20px;
                height: 10px;
                background-color: #000;
                border-radius: 10px;
            }

            &__item {
                width: 10px;
                height: 10px;
                background-color: rgb(122, 122, 122);
                border-radius: 50%;
            }
        }
        &_modifications {
            display: flex;
            flex-direction: column;
            gap: 10px;
            user-select: none;

            &__title {
                span {
                    color: rgb(97, 97, 97);
                }
            }

            &_body {
                width: 100%;
                display: flex;
                align-items: center;
                overflow: auto;
                gap: 5px;
                padding-bottom: 5px;

                .active {
                    border-color: $base-color;
                }
                
                &__item {
                    width: auto;
                    height: auto;
                    padding: 10px;
                    border: 2px solid rgb(230, 230, 230);
                    border-radius: 5px;

                }
            }
        }
        &_item {
            width: 100%;
            height: auto;
            padding: 20px;
            @extend %box-shadow;
            display: flex;
            flex-direction: column;
            gap: 10px;

            &_menu {
                display: flex;
                align-items: center;
                gap: 5px;
                user-select: none;

                .active {
                    background-color: $base-color;
                    color: #fff;
                }

                &__item {
                    width: auto;
                    border-radius: 5px;
                    padding: 5px 10px;
                    @extend %box-shadow;
                    border: 1px solid lightgray;
                }
            }

            &--center {
                align-items: center;
            }
        }
    }
</style>