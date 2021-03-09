import repoFactory from "@/util/repoFactory";

const jobFairRepo = repoFactory.get("jobFairRepo");

const jobFairService = () => {
  const getAllFair = () => {
    return jobFairRepo.get();
  };
  const getFair = (id) => {
    return jobFairRepo.getFair(id);
  };
  const createFair = (data) => {
    return jobFairRepo.create(data);
  };
  return { createFair, getAllFair, getFair };
};

export { jobFairService as useJobFairService };
