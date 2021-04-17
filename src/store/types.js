export const UPDATE = "UPDATE";

/**
 * base 项目基础常量
 */

export const SET_TAB_LIST = "SET_TAB_LIST";
export const SET_TAB_IS_ASK = "TAB_IS_ASK";

/**
 * socket 事件
 */

export const SOCKET_CONNECT = "SOCKET_CONNECT"; // 在连接到命名空间时触发（包括成功的重新连接）。
export const SOCKET_ERROR = "SOCKET_ERROR"; // 发生错误时触发
export const SOCKET_DISCONNECT = "SOCKET_DISCONNECT"; // 断开连接时触发。可能的断开连接原因列表
export const SOCKET_RECONNECT = "SOCKET_RECONNECT"; // 重新连接成功后触发
export const SOCKET_RECONNECT_ATTEMPT = "SOCKET_RECONNECT_ATTEMPT"; // 尝试重新连接时触发。
export const SOCKET_RECONNECTING = "SOCKET_RECONNECTING"; // 尝试重新连接时触发。
export const SOCKET_RECONNECTING_ERROR = "SOCKET_RECONNECTING_ERROR"; // 重新连接尝试错误时触发。
export const SOCKET_RECONNECTING_FAILED = "SOCKET_RECONNECTING_FAILED"; // 当客户端无法重新连接时触发 reconnectionAttempts
export const SOCKET_CONNECT_ERROR = "SOCKET_CONNECT_ERROR"; // 连接错误时触发
export const SOCKET_CONNECT_TIMEOUT = "SOCKET_CONNECT_TIMEOUT"; // 连接超时触发
export const SOCKET_CONNECTING = "SOCKET_CONNECTING"; // 接通事件
export const SOCKET_PING = "SOCKET_PING"; // 当ping发送到服务器时触发。
export const SOCKET_PONG = "SOCKET_PONG"; // 当从服务器接收到一个Pong时触发。
