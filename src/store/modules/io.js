import {
  SOCKET_CONNECT,
  SOCKET_ERROR,
  SOCKET_DISCONNECT,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ATTEMPT,
  SOCKET_RECONNECTING,
  SOCKET_RECONNECTING_ERROR,
  SOCKET_RECONNECTING_FAILED,
  SOCKET_CONNECT_ERROR,
  SOCKET_CONNECT_TIMEOUT,
  SOCKET_CONNECTING,
  SOCKET_PING,
  SOCKET_PONG
} from "../types";

const state = {
  person: 1
};

const getters = {};

const mutations = {};

const actions = {
  // 在连接到命名空间时触发（包括成功的重新连接）。
  socket_connect() {},
  // 发生错误时触发
  socket_error() {},
  // 断开连接时触发。可能的断开连接原因列表
  socket_disconnect() {},
  // 重新连接成功后触发
  socket_reconnect() {},
  // 尝试重新连接时触发。
  socket_reconnect_attempt() {},
  // 尝试重新连接时触发。
  socket_reconnecting() {},
  // 重新连接尝试错误时触发。
  socket_reconnect_error() {},
  // 当客户端无法重新连接时触发 reconnectionAttempts
  socket_reconnect_failed() {},
  // 连接错误时触发
  socket_connect_error() {},
  // 连接超时触发
  socket_connect_timeout() {},
  // 接通事件
  socket_connecting() {},
  // 当ping发送到服务器时触发。
  socket_ping() {},
  // 当从服务器接收到一个Pong时触发。
  socket_pong() {},
  // 自定义事件 初始化
  socket_init() {},

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
