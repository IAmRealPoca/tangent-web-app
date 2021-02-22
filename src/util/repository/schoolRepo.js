import { axiosBase } from '../http/Client'
import { axiosInstance } from '../http/Handler'

const http = axiosInstance(axiosBase());

const path = "/schools";

export default {
    get() {
        return http.get(`${path}/list`);
    },

    getListStudent(schoolId) {
        return http.get(`${path}/${schoolId}/students`);
    }
}