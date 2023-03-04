import { defineStore } from 'pinia';
import { axiosBase } from '../modules/axios';

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
        },
        isBasket: (state) => Boolean(state.basket.length)
    },
    actions: {
        async getPurchase() {
            try {

                const res = await axiosBase.get('/purchase');
                const { data, status } = res;

                if (status === 200) this.purchase = data.rows;

            } catch(e) {
                console.error(e);
            }
        },
        async getProducts(purchaseId) {
            try {

                const res = await axiosBase.get('/product/' + purchaseId);
                const { data, status } = res;

                if (status === 200) this.products = data.rows;

            } catch(e) {
                console.error(e);
            }
        },
        async updateBasket({ action=null, productId, modificationId=null }) {
            const indexProduct = this.basket.findIndex(item => item.productId == productId && item.modificationId == modificationId);
            if (indexProduct >= 0) {
                action == '+' ? this.basket[indexProduct].count ++ : this.basket[indexProduct].count --;
                if (this.basket[indexProduct].count === 0) {
                    this.basket.splice(indexProduct, 1);
                }

            } else {
                this.basket.push({ productId, modificationId, count: 1 });
            }

            await this.fetchUpdateBasket();

            this.toggleMainButton('Перейти в корзину');

        },
        async removeProductFromBasket(id) {
            const index = this.basket.findIndex(item => item.productId === id);
            if (index >= 0) {
                this.basket.splice(index, 1);
                this.toggleMainButton('Перейти в корзину');
            }
        },
        async fetchDataForBasket() {
            try {

                const userId = this.tg.initDataUnsafe?.user?.id;

                const res = await axiosBase.get(`/basket/${userId}`);
                
                const { status, data } = res;

                if (status === 200) {
                    this.basket = data.basket;
                    this.toggleMainButton('Перейти в корзину');
                }

            } catch(e) {
                console.error(e);
            }
        },
        getBasket() {

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
        },

        // Телеграм функции
        initAppTg() {
            this.tg.ready();
            this.tg.expand();
        },
        toggleBackButton(status=null) {
            const showButton = () => {
                this.tg.BackButton.show();
                this.tg.BackButton.onClick(this.onBackPage);
            }
            const hideButton = () => {
                this.tg.BackButton.offClick(this.onBackPage);
                this.tg.BackButton.hide();
            }

            if (status) {
                if (!this.tg.BackButton.isVisible) {
                    showButton()
                }
            } else {
                if (this.tg.BackButton.isVisible) {
                    hideButton();
                }
            }

        },
        toggleMainButton(textButton, pathName=null) {
            const isVisible = this.tg.MainButton.isVisible;
            const text = this.tg.MainButton.text;
            const isBasket = this.isBasket;

            if (!pathName) pathName = this.router.currentRoute._value.name;

            if (isBasket) {
                if (!isVisible) {
                    this.tg.MainButton.show();

                    if (text === textButton) return;

                    this.tg.MainButton.setText(textButton);
                    
                    if (textButton === 'Перейти в корзину') {
                        this.tg.MainButton.onClick(this.goToBasket);
                    }
                    if (textButton === 'Заказать') {
                        this.tg.MainButton.onClick(this.createOrder);
                    }
                } else {

                    if (textButton === 'Перейти в корзину' && pathName !== 'basket') {
                        this.tg.MainButton.offClick(this.createOrder);
                        this.tg.MainButton.onClick(this.goToBasket);
                        this.tg.MainButton.setText(textButton);
                    }
                    if (textButton === 'Заказать') {
                        this.tg.MainButton.offClick(this.goToBasket);
                        this.tg.MainButton.onClick(this.createOrder);
                        this.tg.MainButton.setText(textButton);
                    }
                }
            } else {
                this.tg.MainButton.offClick(this.goToBasket);
                this.tg.MainButton.offClick(this.createOrder);

                this.tg.MainButton.hide();
            }
        },

        onBackPage() {

            const pathName = this.router.currentRoute._value.name;

            if (pathName === 'catalog') {
                this.router.replace({ name: 'purchases' });
            } else {
                this.router.back();
            }
        },
        async goToBasket() {
            this.tg.MainButton.showProgress();
            await this.router.push({ name: 'basket' });
            this.tg.MainButton.hideProgress();
        },
        async fetchUpdateBasket() {
            try {

                this.tg.MainButton.showProgress();

                const dataBasket = {
                    userInfo: this.tg.initDataUnsafe,
                    basket: this.basket
                }

                const res = await axiosBase.patch('/basket', dataBasket);

                const { status } = res;

                if (status !== 200) {
                    return this.tg.showAlert('Ошибка сохранения корзины');
                }

                this.tg.MainButton.hideProgress();

            } catch(e) {
                console.error(e);
                this.tg.showAlert('Ошибка сохранения корзины');
            }
        },
        async createOrder() {
            console.log('Создаем заказ ...');
            this.tg.showAlert('Заказ оформлен. Спасибо', () => {
                this.tg.close();
            })
        }
    }
})
