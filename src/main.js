import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

// scss & css style
import './assets/scss/_cssReset.scss';
import 'primeflex/primeflex.scss';
/** primeflex
 * Doc: https://www.primefaces.org/primeflex/setup
 * GitHub: https://github.com/primefaces/primeflex
 */

// import 'primevue/resources/themes/lara-light-indigo/theme.css'; // 官方預設 theme
import './assets/scss/theme.scss';
/** 自定 primevue 主題
 * primevue-sass-theme: https://github.com/primefaces/primevue-sass-theme
*/
import 'primevue/resources/primevue.min.css'; // 官方預設 core
import 'primeicons/primeicons.css'; //icons

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);
app.component('InputTextUI', InputText);
app.component('ToastUI', Toast);
app.component('ButtonUI',Button);
app.mount('#app');
