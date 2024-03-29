import { createApp } from "vue";
import Toast from "vue-toastification";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "vue-toastification/dist/index.css";
import "./assets/style.css";
import App from "./App.vue";

const app = createApp(App);
//app.use(bootstrap);
app.use(Toast);

app.mount("#app");
