import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/recruitment-posts";

export default {
    get() {
        return http.get(`${path}`);
    },

    getOneById(jobId) {
        return http.get(`${path}` + "/" + jobId);
    },

    getWithParam(param) {
        return http.get(`${path}` + param);
    },

    postNewJob(newJob) {
        return http.post(`${path}`, newJob);
    },

    updateJob(jobId, updatedJob) {
        return http.put(`${path}/${jobId}`, updatedJob)
    },

    postJobToSchool(jobId, payload) {
        return http.post(`${path}/${jobId}/post-job`, payload);
    },
}