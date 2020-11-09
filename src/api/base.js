import http from "../http";

const base = {
  sigin(prams) {
    return http.post("/sigin", prams);
  }
};

export default base;
