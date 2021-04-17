import Vue from "vue";
import Vuex from "vuex";
import { localStorageGet, localStorageSet, uuid } from "@/libs/utils";
import { SET_TAB_LIST, SET_TAB_IS_ASK } from "@/store/types";
import { getTabBar } from "@/api/base";

const files = require.context("./modules", false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  modules[key.replace(/(.*\/)*([^.]+).*/gi, "$2")] = files(key).default;
});
console.log(modules);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 底部tabBar 列表
    tabBarList: [
      {
        id: uuid(),
        name: "home",
        text: "首页",
        sort: 1,
        src: "/Home",
        defaultIcon: require("./../assets/img/home.png"),
        selectIcon: require("./../assets/img/home1.png")
      },
      {
        id: uuid(),
        name: "find",
        text: "发现",
        sort: 2,
        src: "/Find",
        defaultIcon: require("./../assets/img/find.png"),
        selectIcon: require("./../assets/img/find1.png")
      },
      {
        id: uuid(),
        name: "mess",
        text: "消息",
        sort: 3,
        src: "/Mess",
        defaultIcon: require("./../assets/img/mess.png"),
        selectIcon: require("./../assets/img/mess1.png")
      },
      {
        id: uuid(),
        name: "my",
        text: "我的",
        sort: 4,
        src: "/My",
        defaultIcon: require("./../assets/img/my.png"),
        selectIcon: require("./../assets/img/my1.png")
      }
    ],
    tabIsAsk: false
  },
  mutations: {
    [SET_TAB_LIST](state, payload) {
      state.tabBarList = payload;
    },
    [SET_TAB_IS_ASK](state, payload) {
      state.tabIsAsk = payload.isAsk;
    }
  },
  actions: {
    /**
     * 查询底部按钮列表
     * */
    getTabBarList({ commit, state }, products) {
      const { type } = products;
      let tabBar = localStorageGet("tabBarList");
      let tabList = [];
      if (state.tabIsAsk) {
        return;
      }
      getTabBar({ is: 1, type })
        .then(res => {
          console.log(res);
          if (res.result && res.state === 200) {
            let data = res.result;
            localStorageSet("tabBarList", data);
            commit(SET_TAB_LIST, data);
            commit(SET_TAB_IS_ASK, { isAsk: true });
          } else {
            if (!tabBar) tabBar = tabList;
            commit(SET_TAB_LIST, tabBar);
          }
        })
        .catch(err => {
          console.log(err);
          if (!tabBar) tabBar = tabList;
          commit(SET_TAB_LIST, tabBar);
        });
    }
  },
  modules: modules
});
