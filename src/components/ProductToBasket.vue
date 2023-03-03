<template>
    <Counter v-if="count()" @increase="addToBasket" @decrase="removeToBasket" :count="count()" />
    <Button @click="addToBasket" v-else>В корзину</Button>
</template>

<script setup>
    import Counter from './form/Counter.vue';
    import Button from './form/Button.vue';

    import { useGeneralStore } from '../stores/general.store';
    import { storeToRefs } from 'pinia';

    const store = useGeneralStore();
    const { basket } = storeToRefs(store);
    const { updateBasket } = store;

    const props = defineProps({
        data: Object,
        modification: { type: String, default: null }
    });

    function addToBasket(e) {
        e.stopPropagation();

        updateBasket({ action: '+', productId: props.data.id, modificationId: props.modification });
    }
    function removeToBasket(e) {
        e.stopPropagation();

        updateBasket({ action: '-', productId: props.data.id, modificationId: props.modification });
    }

    function count() {
        return basket.value.find(item => item.productId == props.data.id && item.modificationId == props.modification)?.count || 0;
    }
</script>

<style lang="scss" scoped>

</style>