import repoFactory from "@/util/repoFactory";
import qs from "query-string";

const interviewRepo = repoFactory.get("interviewRepo");

const interviewService = () => {
  const getInterviews = () => {
    return interviewRepo.getInterviews();
  };

  return {
    getInterviews,
  };
}

export {interviewService as useInterviewService };