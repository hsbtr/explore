import http from "../http";

/**
 * 接口前缀
 * */
const PR = "/base";
export default {
  csrfToken() {
    return http.get(PR + "/", { data: { text: "三火" } });
  },
  getTabBar(data) {
    return http.get(PR + "/tabBar", { data: data });
  }
};
