import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/employee/current-employee";

export default {
    getCurrEmployeeInfo() {
        return http.get(`${path}` + "/info");
    },
}