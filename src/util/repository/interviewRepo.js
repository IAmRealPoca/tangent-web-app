import { axiosBase } from '../http/client'
import { axiosInstance } from '../http/handler'

const http = axiosInstance(axiosBase());

const path = "/interviews";

export default {
  getInterviews(boothId) {
    return http.get(`${path}?boothId=${boothId}`);
  },
  getInterviewsById(interviewId) {
    return http.get(`${path}/${interviewId}`);
  },
  createInterview(payload) {
    return http.post(`${path}`, payload);
  },
  
  joinInterview(interviewId, participantBoothId) {
    return http.put(`${path}/${interviewId}/join?participantBoothId=${participantBoothId}`);
  },
  leaveInterview(interviewId, participantBoothId) {
    return http.put(`${path}/${interviewId}/leave?participantBoothId=${participantBoothId}`);
  },
}