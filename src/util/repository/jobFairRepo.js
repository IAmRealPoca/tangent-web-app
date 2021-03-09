import { axiosBase } from "../http/client";
import { axiosInstance } from "../http/handler";

const path = "/job-fair";
const http = axiosInstance(axiosBase());

export default {
  get() {
    return http.get(`${path}`);
  },
  getFair(id) {
    return http.get(`${path}/${id}`);
  },
  create(payload) {
    return http.post(`${path}`, payload);
  },
  update(payload, id) {
    return http.put(`${path}/${id}`, payload);
  },
  delete(id) {
    return http.delete(`${path}/${id}`);
  },
};
