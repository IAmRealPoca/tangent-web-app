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
  const deleteFair = (id) => {
    return jobFairRepo.delete(id);
  };
  const registerFair = (data) => {
    return jobFairRepo.regis(data);
  };
  const unregisterFair = (data) => {
    const payload = qs.stringify(data);
    return jobFairRepo.unregis(payload);
  };
  const joinFair = (data) => {
    return jobFairRepo.join(data);
  };
  const leaveFair = (data) => {
    const payload = qs.stringify(data);
    return jobFairRepo.leave(payload);
  };
  return {
    createFair,
    deleteFair,
    getAllFair,
    getFair,
    registerFair,
    unregisterFair,
    joinFair,
    leaveFair
  };
};

export { jobFairService as useJobFairService };
