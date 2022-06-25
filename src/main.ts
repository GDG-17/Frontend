import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/";

createApp(App).use(router).use(createPinia()).mount("#app");
