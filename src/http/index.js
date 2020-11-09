import axios from "axios";

const http = axios.create({
  baseURL: "/api/",
  timeout: 5000,
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [
    function(data) {
      // 对 data 进行任意转换处理
      console.log(data);
      return JSON.stringify(data);
    }
  ],
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true
});
if (process.env.NODE_ENV === "development") {
  http.defaults.baseURL = "/api/"; //开发环境下的代理地址，解决本地跨域
} else {
  http.defaults.baseURL = "http://192.168.5.179:3030"; //生产环境下的地址
}
// 请求拦截器
http.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);
    console.log(config);
    if (localStorage.getItem("Authorization")) {
      config.headers.Authorization = localStorage.getItem("Authorization");
    }
    // 根据请求方式更改请求头
    config.headers = Object.assign(
      config.method === "get"
        ? {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8"
          }
        : {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
      config.headers
    );
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
http.interceptors.request.use(
  response => {
    if (response.status === 200) {
      return response;
    }
  },
  error => {
    if (error) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);
export default http;
