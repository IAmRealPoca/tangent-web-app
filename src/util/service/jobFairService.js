import repoFactory from "@/util/repoFactory";
import qs from "query-string";

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
  const registerFair = (data) => {
    return jobFairRepo.regis(data);
  };
  const unregisterFair = (data) => {
    const payload = qs.stringify(data);
    return jobFairRepo.unregis(payload);
  };
  return { createFair, getAllFair, getFair, registerFair, unregisterFair };
};

export { jobFairService as useJobFairService };
