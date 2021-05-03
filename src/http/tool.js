import Qs from "qs";
import Axios from "axios";

/**
 * 获取cookie 上的csrfToken
 * @param name {string} 要获取的参数名
 * */
export function getCookie(name) {
  const str = document.cookie.split("; ");
  for (let i = 0; i < str.length; i++) {
    const temp = str[i].split("=");
    if (temp[0] === name) return unescape(temp[1]);
  }
  return "";
}

/**
 * 请求记录map
 * @type {Map<any, any>}
 */
const pendingRequest = new Map();
/**
 * 用于把当前请求信息添加到pendingRequest对象中
 * @param config {object} 请求对象
 */
export function addPendingRequest(config) {
  const requestKey = generateReqKey(config);
  config.cancelToken =
    config.cancelToken ||
    new Axios.CancelToken(cancel => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel);
      }
    });
}

/**
 * 用于根据当前请求的信息，生成请求 Key
 * @param config {object} 请求对象
 */
export function generateReqKey(config) {
  const { method, url, params, data } = config;
  return [method, url, Qs.stringify(params), Qs.stringify(data)].join("&");
}

/**
 * 删除请求
 * @param config {object} 请求对象
 */
export function removePendingRequest(config) {
  const requestKey = generateReqKey(config);
  if (pendingRequest.has(requestKey)) {
    const cancelToken = pendingRequest.get(requestKey);
    cancelToken(requestKey);
    pendingRequest.delete(requestKey);
  }
}