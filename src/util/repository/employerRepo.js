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


  postJobToSchool(jobId, payload) {
    return http.post(`${path}/recruitment-posts/${jobId}/post-job`, payload);
  },

  requestConnection(payload) {
    return http.post(`${path}/approvals/request`, payload);
  },

  removeConnection(payload) {
    return http.put(`${path}/approvals/remove`, payload);
  },

  getJobPostedToSchool() {
    return http.get(`${path}/recruitment-posts/posted-jobs`);
  },

  getPostedSchoolListByJobPostId(postId) {
    return http.get(`${path}/recruitment-posts/${postId}/posted-jobs/schools`);
  },
}