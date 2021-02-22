import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/question-sets";
const sectionPath = "/cvs/section-types?lang=en";

export default {
    get() {
        return http.get(`${path}`);
    },
    getSection() {
        return http.get(`${sectionPath}`);
    },
    getQuestion(id) {
        return http.get(`${path}/${id}`);
    },
    create(payload) {
        return http.post(`${path}`, payload);
    },
    update(payload, id) {
        return http.put(`${path}/${id}`, payload);
    },
    delete(id) {
        return http.delete(`${path}/${id}`);
    },

    createQuestion(setId, payload) {
        return http.post(`${path}/${setId}/questions`, payload);
    },

    deleteQuestion(setId, questionId) {
        return http.delete(`${path}/${setId}/questions/${questionId}`);
    },
    // MANY OTHER ENDPOINT RELATED STUFFS
};