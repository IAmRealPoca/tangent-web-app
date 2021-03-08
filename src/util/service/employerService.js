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

export {getCurrEmployerInfo, getCurrEmpJobs, getOneByIdCurrEmployer, getAppliedCVFromJobId, getAppliedCVFromJobIdAndApplicationId, getApprovalInfo};