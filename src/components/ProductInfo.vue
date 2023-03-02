<template>
    <div class="product-info">
        <div class="product-info_item product-info_item--center">
            <div class="product-info__cover"></div>
            <div class="product-info_switch">
                <div class="product-info_switch__item active"></div>
                <div class="product-info_switch__item"></div>
                <div class="product-info_switch__item"></div>
            </div>
        </div>
        <div class="product-info_item">
            <div class="product-info__price">1550 ₽</div>
            <div class="product-info__name">Сумка мужская, redmond</div>
        </div>
        <div class="product-info_item">
            <div class="product-info_modifications">
                <div class="product-info_modifications__title">
                    <p>Название характеристики: <span>Наименование выбранной</span></p>
                </div>
                <div class="product-info_modifications_body scroll">
                    <div class="product-info_modifications_body__item">Зеленый</div>
                    <div class="product-info_modifications_body__item active">Красный</div>
                    <div class="product-info_modifications_body__item">Синий</div>
                    <div class="product-info_modifications_body__item">Фиолетовый</div>
                    <div class="product-info_modifications_body__item">Зеленый</div>
                    <div class="product-info_modifications_body__item">Красный</div>
                    <div class="product-info_modifications_body__item">Синий</div>
                    <div class="product-info_modifications_body__item">Фиолетовый</div>
                </div>
            </div>
            <div class="product-info_item_menu">
                <div class="product-info_item_menu__item active">Описание</div>
                <div class="product-info_item_menu__item">Характеристики</div>
            </div>
            <div class="product-info__description">
                <p>Современные технологии достигли такого уровня, что дальнейшее развитие различных форм деятельности говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности. Но представители современных социальных резервов, инициированные исключительно синтетически, обнародованы. С учётом сложившейся международной обстановки, постоянный количественный рост и сфера нашей активности, в своём классическом представлении, допускает внедрение вывода текущих активов.</p>
            </div>
        </div>
    </div>
</template>

<script setup>

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