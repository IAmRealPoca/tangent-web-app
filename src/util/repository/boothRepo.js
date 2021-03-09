import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/booth";

export default {
    getBoothList() {
        return http.get(`${path}` + "/info");
    },

    getBoothById(boothId) {
        return http.get(`${path}/${boothId}`);
    },

    createBooth(payload) {
        return http.post(`${path}`,payload);
    }
}