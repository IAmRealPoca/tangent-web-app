import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'chartist/dist/chartist.js';
import App from './App.vue';

import router from "@/router/router.js";

const app = createApp(App);

app.use(router);

app.mount('#app');
