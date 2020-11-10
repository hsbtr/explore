import http from "../http";

export default {
  csrfToken() {
    return http.get("/", {});
  },
  sigIn(data) {
    return http.post("/sigin", { data: data });
  }
};
