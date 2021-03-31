import { axiosBase } from '../http/client.js';

import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/admin";

export default {
  getAccounts() {
    return http.get(`${path}/accounts`);
  },
  approveSchool(schoolId) {
    return http.put(`${path}/school/${schoolId}`);
  },
  approveCompany(companyId) {
    return http.put(`${path}/company/${companyId}`);
  },
    
};