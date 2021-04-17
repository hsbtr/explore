/**
 * localStorage 存贮
 * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
 * @param { String } key  属性 存储名
 * @param { string } value 值
 */
export const localStorageSet = (key, value) => {
  if (typeof value === "object") value = JSON.stringify(value);
  localStorage.setItem(key, value);
};
/**
 * localStorage 获取
 * @param { String } key  属性 存储名
 */
export const localStorageGet = key => {
  return JSON.parse(localStorage.getItem(key));
};
/**
 * localStorage 删除
 * @param { String } key  属性 存储名
 */
export const localStorageRemove = key => {
  localStorage.removeItem(key);
};
/**
 * localStorage 存贮某一段时间失效
 * @param { String } key  属性 存储名
 * @param { * } value 存贮值
 * @param { number } expire 过期时间,毫秒数
 */
export const localStorageSetExpire = (key, value, expire) => {
  if (typeof value === "object") value = JSON.stringify(value);
  localStorage.setItem(key, value);
  setTimeout(() => {
    localStorage.removeItem(key);
  }, expire);
};

/**
 * sessionStorage 临时存贮
 * 存储之前都会序列化
 * @param { String } key  属性
 * @param { * } value 存储值
 */
export const sessionStorageSet = (key, value) => {
  if (typeof value === "object") value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
};
/**
 * sessionStorage 获取
 * @param { String } key  属性
 */
export const sessionStorageGet = key => {
  return sessionStorage.getItem(key);
};
/**
 * sessionStorage 删除
 * @param { String } key  属性
 */
export const sessionStorageRemove = key => {
  sessionStorage.removeItem(key);
};
/**
 * sessionStorage 存贮一段时间失效
 * @param { String } key  属性
 * @param { * } value 存贮值
 * @param { number } expire 过期时间,毫秒数
 */
export const sessionStorageSetExpire = (key, value, expire) => {
  if (typeof value === "object") value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
  setTimeout(() => {
    sessionStorage.removeItem(key);
  }, expire);
};
/**
 * 生成唯一id
 * @returns {string}
 */
export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    let r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
/**
 * 返回当前协议域名
 * @returns {string}
 */
export const tcpDns = () => {
  return location.protocol + "//" + location.host;
};
/**
 * 重写域名
 * @param { string } url
 */
export const rewriteDns = url => {
  if (process.env.NODE_ENV !== "development") return url;
  return url.replace(
    "http://localhost:7001",
    tcpDns() + process.env.VUE_APP_DISCERN.slice(0, -1)
  );
};
