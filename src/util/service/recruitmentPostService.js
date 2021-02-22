import repoFactory from "@/util/repoFactory";

const recruitmentPostRepo = repoFactory.get("recruitmentPostRepo");

const getListOfJobs = () => {
    return recruitmentPostRepo.get();
};

const getOneById = (jobId: number) => {
    return recruitmentPostRepo.getOneById(jobId);
};

const getListOfExpiredJobs = (param: string) => {
    return recruitmentPostRepo.getWithParam(param);
};

const postNewJob = (newJob: any) => {
    return recruitmentPostRepo.postNewJob(newJob);
};

const updateJob = (jobId: number, updatedJob: any) => {
    return recruitmentPostRepo.updateJob(jobId, updatedJob);
}

export {getListOfJobs, getListOfExpiredJobs, getOneById, postNewJob, updateJob};
// export default recruitmentPostService