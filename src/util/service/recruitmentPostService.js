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
};

const postJobToSchool = (jobId, payload) => {
    return recruitmentPostRepo.postJobToSchool(jobId, payload);
}

export {getListOfJobs, getListOfExpiredJobs, getOneById, postNewJob, updateJob, postJobToSchool};
// export default recruitmentPostService