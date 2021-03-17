import repoFactory from "@/util/repoFactory";

const employeeRepo = repoFactory.get("employeeRepo");

const getCurrEmployeeInfo = () => {
    return employeeRepo.getCurrEmployeeInfo();
};

const getListCV = () => {
    return employeeRepo.getListStudentCV();
};

const getStudentCVDetail = (cvId) => {
  return employeeRepo.getStudentCVDetail(cvId);
}

const getListCoverLetter = () => {
    return employeeRepo.getListStudentCoverLetter();
};

const deleteCV = (cvId) => {
    return employeeRepo.deleteStudentCV(cvId);
};

const deleteCoverLetter = (coverletterId) => {
    return employeeRepo.deleteStudentCoverLetter(coverletterId);
};

const uploadCVFile = (payload) => {
  return employeeRepo.uploadCVFile(payload);
};

const createCV = (payload) => {
  return employeeRepo.createCV(payload);
};

export {
    // get
    getCurrEmployeeInfo,
    getListCV,
    getStudentCVDetail,
    getListCoverLetter,
    // delete
    deleteCV,
    deleteCoverLetter,
    //post
    uploadCVFile,
    createCV,
}