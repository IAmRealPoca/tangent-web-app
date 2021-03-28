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
    getAppliedJob(cvId) {
      return http.get(`${path}/applied-jobs?cvId=${cvId}`);
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
    createCoverLetter(payload, hasPDF, hasVideo) {
      return http.post(`/cover-letters?hasPDF=${hasPDF}&hasVideo=${hasVideo}`, payload);
    },
    updateCoverLetter(coverLetterId, payload, hasPDF, hasVideo) {
      return http.put(`/cover-letters/${coverLetterId}?hasPDF=${hasPDF}&hasVideo=${hasVideo}`, payload);
    }
}