import { createRouter, createWebHistory } from 'vue-router';

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

export default router
