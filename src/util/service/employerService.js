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

const postJobToSchool = (jobId, payload) => {
    return employerRepo.postJobToSchool(jobId, payload);
}

const requestConnection = (payload) => {
    return employerRepo.requestConnection(payload);
}

const getJobPostedToSchool = () => {
    return employerRepo.getJobPostedToSchool();
}

const getPostedSchoolListByJobPostId = (postId) => {
    return employerRepo.getPostedSchoolListByJobPostId(postId);
}

export {getCurrEmployerInfo, getCurrEmpJobs, getOneByIdCurrEmployer, getAppliedCVFromJobId, getAppliedCVFromJobIdAndApplicationId, getApprovalInfo, postJobToSchool, requestConnection, getJobPostedToSchool, getPostedSchoolListByJobPostId};