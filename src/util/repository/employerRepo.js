import { axiosBase } from '../http/Client.js';
import { axiosInstance } from '../http/Handler.js';

const http = axiosInstance(axiosBase());

const path = "/employers/current-employer";

export default {
    getCurrEmployerInfo() {
        return http.get(`${path}` + "/info");
    },

    getCurrEmpJobs() {
        return http.get(`${path}/recruitment-posts`);
    },

    getOneByIdCurrEmployer(jobId) {
        return http.get(`${path}/recruitment-posts/${jobId}`);
    },

    getAppliedCVFromJobId(jobId) {
        return http.get(`${path}/recruitment-posts/${jobId}/applied-cvs`);
    },

    getAppliedCVFromJobIdAndApplicationId(jobId, applicationId) {
        return http.get(`${path}/recruitment-posts/${jobId}/applied-cvs/${applicationId}`);
    }
}