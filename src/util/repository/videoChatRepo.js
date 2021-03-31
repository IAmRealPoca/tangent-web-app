import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/vc/getToken";
const path2 = '/vc/getSubs';

export default {
    get() {
        return http.get(`${path}`);
    },
    getSub(sid){
        return http.get(`${path2}/${sid}`);
    },
    post(data){
        return http.post(`${path}`,data);
    }
}