import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/majors";

export default {
    createMajor(payload) {
        return http.post(`${path}`, payload);
    },

    addStudentToMajor(majorId, payload) {
        return http.put(`${path}/${majorId}/students/add`, payload);
    },

    removeStudentFromMajor(majorId, payload) {
        return http.patch(`${path}/${majorId}/students/remove`, payload);
    },

    deleteMajor(majorId) {
        return http.delete(`${path}/${majorId}`);
    }
}