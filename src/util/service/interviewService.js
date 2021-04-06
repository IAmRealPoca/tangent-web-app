import repoFactory from "@/util/repoFactory";
import qs from "query-string";

const interviewRepo = repoFactory.get("interviewRepo");

const interviewService = () => {
  const getInterviews = (boothId) => {
    return interviewRepo.getInterviews(boothId);
  };

  const createInterview = (payload) => {
    return interviewRepo.createInterview(payload);
  }

  return {
    getInterviews,
    createInterview,
  };
}

export {interviewService as useInterviewService };