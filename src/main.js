import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/styles/main.scss';

const app = createApp(App)
const pinia = createPinia();
pinia.use(({ store }) => {
    store.router = markRaw(router);
    store.tg = markRaw(window.Telegram.WebApp);
})

app.use(pinia)
app.use(router)

app.mount('#app')