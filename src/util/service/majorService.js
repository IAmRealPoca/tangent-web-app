import repoFactory from "@/util/repoFactory";

const majorRepo = repoFactory.get("majorRepo");

const majorService = () => {

  const createMajor = (payload) => {
    return majorRepo.createMajor(boothId);
  };

  const addStudentToMajor = (majorId, payload) => {
    return majorRepo.addStudentToMajor(majorId, payload);
  };

  const removeStudentFromMajor = (majorId, payload) => {
    return majorRepo.removeStudentFromMajor(majorId, payload);
  };

  const deleteMajor = (majorId) => {
    return majorRepo.deleteMajor(majorId);
  };
  return { createMajor, addStudentToMajor, removeStudentFromMajor, deleteMajor };
};

export { majorService as useMajorService };
