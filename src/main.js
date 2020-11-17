import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import api from "./api";
import bus from "./bus";
import "./css/base.scss";

Vue.use(VueAxios, api);
Vue.use(bus);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
