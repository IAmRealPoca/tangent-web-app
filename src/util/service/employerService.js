import repoFactory from "@/util/repoFactory";

const employerRepo = repoFactory.get("employerRepo");

const getCurrEmployerInfo = () => {
    return employerRepo.getCurrEmployerInfo();
};

const getCurrEmpJobs = () => {
    return employerRepo.getCurrEmpJobs();
};

const getOneByIdCurrEmployer = (jobId) => {
    return employerRepo.getOneByIdCurrEmployer(jobId);
};

const getAppliedCVFromJobId = (jobId) => {
    return employerRepo.getAppliedCVFromJobId(jobId);
};

const getAppliedCVFromJobIdAndApplicationId = (jobId, applicationId) => {
    return employerRepo.getAppliedCVFromJobIdAndApplicationId(jobId, applicationId);
};

const getApprovalInfo = () => {
    return employerRepo.getApprovalInfo();
};

const requestConnection = (payload) => {
  return employerRepo.requestConnection(payload);
}

const removeConnection = (payload) => {
  return employerRepo.removeConnection(payload);
}

const postJobToSchool = (jobId, payload) => {
    return employerRepo.postJobToSchool(jobId, payload);
}

const removeJobFromSchool = (jobId, schoolId) => {
  return employerRepo.removeJobFromSchool(jobId, schoolId);
}

const getJobPostedToSchool = () => {
    return employerRepo.getJobPostedToSchool();
}

const getPostedSchoolListByJobPostId = (postId) => {
    return employerRepo.getPostedSchoolListByJobPostId(postId);
}

export {getCurrEmployerInfo, getCurrEmpJobs, getOneByIdCurrEmployer, getAppliedCVFromJobId, getAppliedCVFromJobIdAndApplicationId, getApprovalInfo, postJobToSchool, requestConnection, getJobPostedToSchool, getPostedSchoolListByJobPostId, removeConnection, removeJobFromSchool};