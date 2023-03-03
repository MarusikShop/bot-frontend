<template>
    <main class="container">
        <Purchase v-for="item in purchase" :key="item.id" :data="item" />
    </main>
</template>

<script setup>
    import Purchase from '../components/Purchase.vue';
    import { useGeneralStore } from '../stores/general.store';
    import { storeToRefs } from 'pinia';
    import { onMounted } from 'vue';

    const store = useGeneralStore();

    const { purchase } = storeToRefs(store);
    const { getPurchase } = store;

    onMounted(async () => {
        await getPurchase();
    })

</script>