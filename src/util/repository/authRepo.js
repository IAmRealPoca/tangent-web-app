import { axiosBase } from '../http/client.js';
// import { axiosInstance } from '../http/handler'

// const http = axiosInstance(axiosBase());
const http = axiosBase();

const path = "/auth/google";

export default {
    getLogin(payload) {
        return http.post(`${path}`,payload);
    },
};