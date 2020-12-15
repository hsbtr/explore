import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import http from "./http";
import api from "./api";
import bus from "./bus";
import { Notify } from "vant";
import "./css/base.scss";
import "vant/lib/index.css";
import "nprogress/nprogress.css";

Vue.use(api);
Vue.use(VueAxios, http);
Vue.use(bus);
Vue.use(Notify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
