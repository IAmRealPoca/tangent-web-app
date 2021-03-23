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

const deleteJob = (jobId) => {
  return recruitmentPostRepo.deleteJob(jobId);
}

const markAsFavorite = (applicationId, payload) => {
  return recruitmentPostRepo.markAsFavorite(applicationId, payload);
};

const applyJob = (jobId, payload) => {
  return recruitmentPostRepo.applyJob(jobId, payload);
};
export {
  getListOfJobs,
  getListOfExpiredJobs,
  getOneById,
  postNewJob,
  updateJob,
  deleteJob,
  markAsFavorite,
  applyJob,
};
// export default recruitmentPostService
