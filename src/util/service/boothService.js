import repoFactory from "@/util/repoFactory";

const boothRepo = repoFactory.get("boothRepo");

const boothService = () => {
  const getAllBooth = () => {
    return boothRepo.getBoothList();
  };
  const getBoothById = (boothId) => {
    return boothRepo.getBoothById(boothId);
  };
  const createBooth = (data) => {
    return boothRepo.createBooth(data);
  };
  return { getAllBooth, getBoothById, createBooth };
};

export { boothService as useBoothService };
