import { axiosBase } from '../http/Client'
import { axiosInstance } from '../http/Handler'

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
        return http.post(`${path}`,newJob);
    },

    updateJob(jobId, updatedJob) {
        return http.put(`${path}/${jobId}`,updatedJob)
    }
}