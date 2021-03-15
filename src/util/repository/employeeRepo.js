import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/employees";

export default {
    getCurrEmployeeInfo() {
        return http.get(`${path}` + "/info");
    },
    getListStudentCV() {
        return http.get(`${path} + "/cvs"`);
    },
}