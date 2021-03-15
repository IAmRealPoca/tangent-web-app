import repoFactory from "@/util/repoFactory";

const employeeRepo = repoFactory.get("employeeRepo");

const getCurrEmployeeInfo = () => {
    return employeeRepo.getCurrEmployerInfo();
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

export {
    getCurrEmployeeInfo,
    getListCV,
    getStudentCVDetail,
    getListCoverLetter,
}