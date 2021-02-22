import { axiosBase } from '../http/Client'
import { axiosInstance } from '../http/Handler'

const http = axiosInstance(axiosBase());

const path = "/employee/current-employee";

export default {
    getCurrEmployeeInfo() {
        return http.get(`${path}` + "/info");
    },
}