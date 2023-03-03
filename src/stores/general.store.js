import { defineStore } from 'pinia';
import axios from 'axios';

export const useGeneralStore = defineStore('general', {
    state() {
        return {
            purchase: [],
            products: [],
            basket: []
        }
    },
    getters: {
        findProductById: (state) => (id) => {
            return state.products.find(item => item.id == id)
        }
    },
    actions: {
        async getPurchase() {
            try {

                const res = await axios.get('http://localhost:3003/purchase');
                const { data, status } = res;

                if (status === 200) this.purchase = data.rows;

            } catch(e) {
                console.error(e);
            }
        },
        async getProducts(purchaseId) {
            try {

                const res = await axios.get('http://localhost:3003/product/' + purchaseId);
                const { data, status } = res;

                if (status === 200) this.products = data.rows;

            } catch(e) {
                console.error(e);
            }
        },
        async updateBasket({ action=null, productId, modificationId=null }) {
            const rowInBasket = this.basket.find(item => item.productId == productId && item.modificationId == modificationId);
            if (rowInBasket) {
                action == '+' ? rowInBasket.count ++ : rowInBasket.count --;
            } else {
                this.basket.push({ productId, modificationId, count: 1 });
            }
        },
        async getBasket() {

            const basketData = this.basket.map(item => {

                const { productId: id, modificationId: modId, count } = item

                const product = this.findProductById(id);

                const modification = product?.modifications?.[0]?.props?.find(item => item.id == modId);

                return {
                    id,
                    modId,
                    images: product.images,
                    name: product.name,
                    price: product.price,
                    modification: { name: product?.modifications?.[0]?.name || null, value: modification?.name },
                    count
                }
            })

            return basketData;
        }
    }
})
