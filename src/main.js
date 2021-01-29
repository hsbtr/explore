import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import VueAxios from "vue-axios";
// import http from "./http";
import bus from "./bus";
import { Toast } from "vant";
import "./css/base.css";
import "vant/lib/index.css";
import "nprogress/nprogress.css";

// Vue.use(VueAxios, http);
Vue.use(bus);
Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
