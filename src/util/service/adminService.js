import repoFactory from "@/util/repoFactory";

const adminRepo = repoFactory.get("adminRepo");

const adminService = () => {
  const getAccounts = () => {
    return adminRepo.getAccounts();
  };
  
  return { getAccounts };
};

export { adminService as useAdminService };
