import { axiosBase } from '../http/client.js';
import { axiosInstance } from '../http/handler.js';

const http = axiosInstance(axiosBase());

const path = "/employers";

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
    },

    getApprovalInfo() {
        return http.get(`${path}/approvals`);
    },
}