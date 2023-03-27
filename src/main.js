import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core
import 'primeicons/primeicons.css'; //icons

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);
app.component('InputTextUI', InputText);
app.component('ToastUI', Toast);
app.component('ButtonUI',Button);
app.mount('#app');
