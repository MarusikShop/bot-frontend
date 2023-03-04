import { createRouter, createWebHistory } from 'vue-router';
import { useGeneralStore } from '../stores/general.store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'purchases',
            component: () => import('../views/PurchasesView.vue')
        },
        {
            path: '/purchase/:id/catalog',
            name: 'catalog',
            component: () => import('../views/CatalorView.vue')
        },
        {
            path: '/product/:id',
            name: 'product',
            component: () => import('../views/ProductView.vue')
        },
        {
            path: '/basket',
            name: 'basket',
            component: () => import('../views/BasketView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: { name: 'purchases' }
        }
    ]
})

router.beforeEach((to, from) => {
    const store = useGeneralStore();

    if (to.name === 'basket') {
        store.toggleMainButton('Заказать', to.name);
    } else {
        store.toggleMainButton('Перейти в корзину', to.name);
    }

    if (to.name === 'purchases') {
        store.toggleBackButton(false);
    } else {
        store.toggleBackButton(true);
    }
})

export default router
