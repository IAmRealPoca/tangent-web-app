import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/schools";

export default {
    get() {
        return http.get(`${path}/list`);
    },

    getListStudent(schoolId) {
        return http.get(`${path}/students`);
    },

    getListCompanies() {
        return http.get(`${path}/employers`);
    }
}