<template>
    <div class="counter">
        <div class="counter__decrase" @click="event => $emit('decrase', event)">-</div>
        <div class="counter__count">{{ count }}</div>
        <div class="counter__increase" @click="event => $emit('increase', event)">+</div>
    </div>
</template>

<script setup>
    defineProps({
        count: { type: Number, default: 0 }
    })
    defineEmits(['decrase', 'increase'])
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/variables.scss';
    .counter {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;

        &__decrase, &__increase {
            flex: 1 1 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 0px;
            background-color: $base-color;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }
        }

        &__count {
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 0px;
            flex: 2 2 auto;
            color: black;
        }
    }
</style>