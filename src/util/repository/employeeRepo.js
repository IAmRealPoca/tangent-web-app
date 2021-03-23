import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/employees";

export default {
    getCurrEmployeeInfo() {
        return http.get(`${path}` + "/info");
    },
    getListStudentCV() {
        return http.get(`${path}` + "/cvs");
    },
    getStudentCVDetail(cvId) {
        return http.get(`/cvs/${cvId}`);
    },
    getListStudentCoverLetter() {
        return http.get(`${path}` + "/cover-letter");
    },
    deleteStudentCV(id) {
        return http.delete(`/cvs/${id}`);
    },
    deleteStudentCoverLetter(id) {
        return http.delete(`${path}/cover-letters/${id}`);
    },
    uploadCVFile(payload) {
      return http.post(`/cvs/upload-file`, payload);
    },
    createCV(payload) {
      return http.post(`/cvs`, payload);
    },
}