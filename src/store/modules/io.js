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

const mutations = {
  // 在连接到命名空间时触发（包括成功的重新连接）。
  [SOCKET_CONNECT]() {},
  // 发生错误时触发
  [SOCKET_ERROR]() {},
  // 断开连接时触发。可能的断开连接原因列表
  [SOCKET_DISCONNECT]() {},
  // 重新连接成功后触发
  [SOCKET_RECONNECT]() {},
  // 尝试重新连接时触发。
  [SOCKET_RECONNECT_ATTEMPT]() {},
  // 尝试重新连接时触发。
  [SOCKET_RECONNECTING]() {},
  // 重新连接尝试错误时触发。
  [SOCKET_RECONNECTING_ERROR]() {},
  // 当客户端无法重新连接时触发 reconnectionAttempts
  [SOCKET_RECONNECTING_FAILED]() {},
  // 连接错误时触发
  [SOCKET_CONNECT_ERROR]() {},
  // 连接超时触发
  [SOCKET_CONNECT_TIMEOUT]() {},
  // 接通事件
  [SOCKET_CONNECTING]() {},
  // 当ping发送到服务器时触发。
  [SOCKET_PING]() {},
  // 当从服务器接收到一个Pong时触发。
  [SOCKET_PONG]() {}

};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
