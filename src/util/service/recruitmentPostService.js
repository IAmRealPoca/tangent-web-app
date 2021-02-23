import repoFactory from "@/util/repoFactory";

const recruitmentPostRepo = repoFactory.get("recruitmentPostRepo");

const getListOfJobs = () => {
    return recruitmentPostRepo.get();
};

const getOneById = (jobId) => {
    return recruitmentPostRepo.getOneById(jobId);
};

const getListOfExpiredJobs = (param) => {
    return recruitmentPostRepo.getWithParam(param);
};

const postNewJob = (newJob) => {
    return recruitmentPostRepo.postNewJob(newJob);
};

const updateJob = (jobId, updatedJob) => {
    return recruitmentPostRepo.updateJob(jobId, updatedJob);
}

export {getListOfJobs, getListOfExpiredJobs, getOneById, postNewJob, updateJob};
// export default recruitmentPostService