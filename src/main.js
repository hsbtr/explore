import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import VueAxios from "vue-axios";
// import http from "./http";
import bus from "./bus";
import extend from "./directive";
import { Toast } from "vant";
import VueSocketIO from "vue-socket.io";
import "./css/base.css";
import "vant/lib/index.css";
import "nprogress/nprogress.css";

// Vue.use(VueAxios, http);
Vue.use(bus);
Vue.use(extend);
Vue.use(Toast);
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://192.168.0.103:7001",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    },
    options: {
      path: "/socket.io/"
    }
  })
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
