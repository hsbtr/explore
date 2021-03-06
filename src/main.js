import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import bus from "./bus";
import directive from "./directive";
import { Toast } from "vant";
// import VueSocketIO from "vue-socket.io";
import VueSocketIO from "@/plugin/socket.io";
import { tcpDns } from "@/libs/utils";
// import VueAxios from "vue-axios";
// import http from "./http";
import "./css/base.scss";
import "vant/lib/index.css";
import "nprogress/nprogress.css";

const host = tcpDns();
// const port = process.env.NODE_ENV === "production" ? "443" : "8081";

// Vue.use(VueAxios, http);
Vue.use(Toast);
Vue.use(bus);
Vue.use(directive);
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: host, // 此地址需要与axios 请求地址一样， 否则代理失败
    vuex: {
      store,
      actionPrefix: "socket_", // 开启了vuex模式 配置了action监听事件 就不需要配置mutation
      mutationPrefix: ""
    },
    options: {
      rejectUnauthorized: false
    }
  })
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
