import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/skills";

export default {
    getList() {
        return http.get(`${path}/list`);
    },

    // getListStudent(schoolId) {
    //     return http.get(`${path}/${schoolId}/students`);
    // }
}