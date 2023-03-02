<template>
    <article class="purchase">
        <div class="purchase__cover"></div>
        <div class="purchase_info">
            <h2 class="purchase_info__title">Мужские сумки Redmond</h2>
            <p class="purchase_info__description">
                Супер красивые сумки. Очень удобные. Всем советую. Ваши мужчины будут в восторге
            </p>
        </div>
        <div class="purchase__actions">
            <RouterLink to="/purchase/1/catalog">Открыть закупку</RouterLink>
        </div>
    </article>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    @import '../assets/styles/template.scss';
    @import '../assets/styles/variables.scss';
    .purchase {
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

            &__title {
                font-size: 18px;
                font-weight: 600;
            }
        }
        &__actions {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 0px 20px;

            a {
                width: 100%;
                height: 30px;
                background: $base-color;
                border: none;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                cursor: pointer;
                transition: 200ms;

                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
</style>