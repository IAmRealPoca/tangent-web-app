import repoFactory from "@/util/repoFactory";

const boothRepo = repoFactory.get("boothRepo");

const boothService = () => {
  const getAllBooth = () => {
    return boothRepo.getBoothList();
  };
  const getBoothById = (boothId) => {
    return boothRepo.getBoothById(boothId);
  };
  const getBoothByComId = (comId) => {
    return boothRepo.getBoothByComId(comId);
  };
  const createBooth = (data) => {
    return boothRepo.createBooth(data);
  };
  const deleteBooth = (data) => {
    return boothRepo.createBooth(data);
  };
  return { getAllBooth, getBoothById, createBooth, getBoothByComId };
};

export { boothService as useBoothService };
