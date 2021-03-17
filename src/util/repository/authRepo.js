import { axiosBase } from '../http/client.js';
// import { axiosInstance } from '../http/handler'

// const http = axiosInstance(axiosBase());
const http = axiosBase();

const path = "/auth";

export default {
    getLogin(payload) {
        return http.post(`${path}/login/google`,payload);
    },

    getRegister(payload) {
      return http.post(`${path}/register/google`,payload);
    }
};