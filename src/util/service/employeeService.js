import repoFactory from "@/util/repoFactory";

const employeeRepo = repoFactory.get("employeeRepo");

const getCurrEmployeeInfo = () => {
    return employeeRepo.getCurrEmployerInfo();
};

const getListCV = () => {
    return employeeRepo.getListStudentCV();
};

const getListCoverLetter = () => {
    return employeeRepo.getListStudentCoverLetter();
};

export {
    getCurrEmployeeInfo,
    getListCV,
    getListCoverLetter,
}