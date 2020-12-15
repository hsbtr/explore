import base from "./base";
import user from "./user";

const install = function(Vue) {
  if (install.installed) return; // 已经被安装
  install.installed = true;
  Vue.prototype.$api = {
    base,
    user
  };
};

export default {
  install
};
