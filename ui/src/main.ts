import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';
import App from "./App.vue";
import router from "./router";
import PrimeVueImporter from "./plugins/primevue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(PrimeVueImporter);
app.use(ToastService);
app.mount("#app");
