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
  actions: {},
  modules: modules
});
