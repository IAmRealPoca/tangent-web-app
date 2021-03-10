import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/booth";

export default {
    getBoothList() {
        return http.get(`${path}`);
    },

    getBoothById(boothId) {
        return http.get(`${path}/${boothId}`);
    },
    getBoothByComId(boothId) {
        return http.get(`${path}/com/${boothId}`);
    },

    createBooth(payload) {
        return http.post(`${path}`,payload);
    }
}