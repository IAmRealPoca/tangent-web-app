import repoFactory from "@/util/repoFactory";

const majorRepo = repoFactory.get("majorRepo");

const majorService = () => {

  const createMajor = (payload) => {
    return majorRepo.createMajor(payload);
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

  const updateMajor = (majorId, payload) => {
    return majorRepo.updateMajor(majorId, payload);
  }
  return { createMajor, addStudentToMajor, removeStudentFromMajor, deleteMajor, updateMajor };
};

export { majorService as useMajorService };
