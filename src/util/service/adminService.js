import repoFactory from "@/util/repoFactory";

const adminRepo = repoFactory.get("adminRepo");

const adminService = () => {
  const getAccounts = () => {
    return adminRepo.getAccounts();
  };
  const getEvents = () => {
    return adminRepo.getEvents();
  };
  const approveEvent = () => {
    return adminRepo.approveEvent();
  };
  const rejectEvent = () => {
    return adminRepo.rejectEvent();
  }
  return {
    getAccounts,
    getEvents,
    approveEvent,
    rejectEvent
  };
};

export { adminService as useAdminService };
