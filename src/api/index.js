import base from "./base";
import user from "./user";

// 此方法可以用插件的形式安装在全局 为加快首次加载速度废弃
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
