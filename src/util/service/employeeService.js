import repoFactory from "@/util/repoFactory";

const employeeRepo = repoFactory.get("employeeRepo");

const getCurrEmployeeInfo = () => {
    return employeeRepo.getCurrEmployeeInfo();
};

const getListCV = () => {
    return employeeRepo.getListStudentCV();
};

const getAppliedJob = (cvId) => {
  return employeeRepo.getAppliedJob(cvId);
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

const createCoverLetter = (payload, hasPDF = false, hasVideo = false) => {
  return employeeRepo.createCoverLetter(payload, hasPDF,hasVideo);
};

const updateCoverLetter = (coverLetterId, payload, hasPDF = false, hasVideo = false) => {
  return employeeRepo.updateCoverLetter(coverLetterId, payload, hasPDF,hasVideo);
};

export {
    // get
    getCurrEmployeeInfo,
    getListCV,
    getStudentCVDetail,
    getListCoverLetter,
    getAppliedJob,
    // delete
    deleteCV,
    deleteCoverLetter,
    //post
    uploadCVFile,
    createCV,
    createCoverLetter,
    //put
    updateCoverLetter,
}