import { axiosBase } from '../http/Client'
import { axiosInstance } from '../http/Handler'

const http = axiosInstance(axiosBase());

const path = "/vc/getToken";

export default {
    get() {
        return http.get(`${path}`);
    },
    post(data){
        return http.post(`${path}`,data);
    }
}