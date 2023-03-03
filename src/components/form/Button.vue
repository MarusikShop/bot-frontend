<template>
    <button class="button" @click="event => $emit('click', event)">
        <slot></slot>
    </button>
</template>

<script setup>
    defineEmits(['click']);
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/variables.scss';

    .button {
        width: 100%;
        height: 30px;
        color: #fff;
        background-color: $base-color;
        border-radius: 5px;
        border: none;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
</style>