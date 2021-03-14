import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/schools";

export default {
    get() {
        return http.get(`${path}/list`);
    },

    getListStudent(schoolId) {
        return http.get(`${path}/students`);
    },

    getListCompanies() {
        return http.get(`${path}/employers`);
    },

    getListOfMajors() {
        return http.get(`${path}/majors`);
    },

    getMajorById(majorId) {
        return http.get(`${path}/majors/${majorId}`);
    },
    getCompanyDetailsAsSchool(companyId) {
        return http.get(`${path}/employers/${companyId}`);
    },
}