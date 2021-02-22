import { axiosBase } from '../http/Client.js';
// import { axiosInstance } from '../http/Handler'

// const http = axiosInstance(axiosBase());
const http = axiosBase();

const path = "/auth/google";

export default {
    getLogin(payload) {
        return http.post(`${path}`,payload);
    },
};