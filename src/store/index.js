import Vue from "vue";
import Vuex from "vuex";

const files = require.context("./modules", false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  modules[key.replace(/(.*\/)*([^.]+).*/gi, "$2")] = files(key).default;
});
console.log(modules);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    SOCKET_connect(state, arge) {
      console.log(state, arge, 1);
    },
    SOCKET_disconnect() {},
    SOCKET_connect_error(state, err) {
      console.log(state, err);
    },
    SOCKET_init() {}
  },
  modules: modules
});
