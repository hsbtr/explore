import Axios from "axios";
import Qs from "qs";
import { getCookie, addPendingRequest, removePendingRequest } from "./tool";

const axios = Axios.create({
  timeout: 5000,
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [
    function(data) {
      // 对 data 进行任意转换处理
      // return JSON.stringify(data); // post请求协议如使用 "Content-Type": "application/json; charset=UTF-8", 请用这个序列化
      return Qs.stringify(data);
    }
  ],
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true
});

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = process.env.VUE_APP_API || "/api/"; //开发环境下的代理地址，解决本地跨域
} else if (process.env.NODE_ENV === "test") {
  axios.defaults.baseURL = process.env.VUE_APP_API || "/test/"; //生产环境下的地址
} else {
  axios.defaults.baseURL = process.env.VUE_APP_API || "/save/";
}

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);
    if (localStorage.getItem("Authorization")) {
      config.headers.Authorization = localStorage.getItem("Authorization");
    }
    if (["post", "put"].includes(config.method.toLocaleLowerCase())) {
      // 参数统一处理，请求都使用data传参
      config.data = config.data.data;
    } else if (["get", "delete"].includes(config.method.toLocaleLowerCase())) {
      // 参数统一处理
      config.params = config.data;
    } else {
      alert("不允许的请求方法：" + config.method);
    }
    // 根据请求方式更改请求头
    config.headers = Object.assign(
      config.method.toLocaleLowerCase() === "get"
        ? {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8"
          }
        : {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            // "Content-Type": "application/json; charset=UTF-8",
            "x-csrf-token": getCookie("csrfToken")
          },
      config.headers
    );
    removePendingRequest(config);
    addPendingRequest(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    removePendingRequest(response.config);
    return response.data;
  },
  error => {
    const { data, status } = error.response;
    const { message } = data;
    removePendingRequest(error.config || {});
    if (axios.isCancel(error)) {
      console.log("已取消的重复请求： " + error.message);
    } else {
      console.log(message, status);
    }
    return Promise.reject(error);
  }
);

export default axios;
