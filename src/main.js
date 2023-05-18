import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import Notifications from '@kyvg/vue3-notification'
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(Notifications)
app.use(pinia);
app.use(router);

app.mount("#app");