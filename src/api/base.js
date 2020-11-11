import http from "../http";

export default {
  csrfToken() {
    return http.get("/", { data: { text: "三火" } });
  },
  sigIn(data) {
    return http.post("/sigin", { data: data });
  }
};
