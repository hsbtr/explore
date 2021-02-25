import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import bus from "./bus";
import directive from "./directive";
import { Toast } from "vant";
// import VueSocketIO from "vue-socket.io";
import SocketIo from "socket.io-client";
import VueSocketIO from "@/plugin/socket.io";
// import VueAxios from "vue-axios";
// import http from "./http";
import "./css/base.css";
import "vant/lib/index.css";
import "nprogress/nprogress.css";

// eslint-disable-next-line no-unused-vars
const options = {
  // path: process.env.VUE_APP_DISCERN,
  rejectUnauthorized: false
};
// Vue.use(VueAxios, http);
Vue.use(Toast);
Vue.use(bus);
Vue.use(directive);
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIo("http://localhost:7001", options),
    vuex: {
      store,
      actionPrefix: "socket_",
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
