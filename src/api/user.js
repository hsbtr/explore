import http from "../http";

/**
 * 接口前缀
 * */
const PR = "/user";

export function sigIn(data) {
  return http.post(PR + "/sigIn", { data: data });
}
