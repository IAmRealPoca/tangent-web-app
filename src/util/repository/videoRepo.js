import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/videos";

export default {
    getVideo(employeeId) {
        return http.get(`${path}?employeeId=${employeeId}`);
    },

    addVideo(payload) {
        return http.post(`${path}`, payload);
    },

}