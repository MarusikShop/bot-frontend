<template>
    <article class="purchase">
        <div class="purchase__cover" :style="{ 'background-image': `url(${data?.cover})` }"></div>
        <div class="purchase_info">
            <h2 class="purchase_info__title">{{ data?.name }}</h2>
            <p class="purchase_info__description"></p>
        </div>
        <div class="purchase__actions">
            <RouterLink :to="{ path: `/purchase/${data?.id}/catalog` }">Открыть закупку</RouterLink>
        </div>
    </article>
</template>

<script setup>
    defineProps({
        data: Object
    })
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
            height: 100%;

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