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
import SocketIo from "socket.io-client";
import "./css/base.css";
import "vant/lib/index.css";
import "nprogress/nprogress.css";

// eslint-disable-next-line no-unused-vars
const options = {
  path: "/news/"
};

// Vue.use(VueAxios, http);
Vue.use(bus);
Vue.use(extend);
Vue.use(Toast);
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIo("http://localhost:7001"),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
