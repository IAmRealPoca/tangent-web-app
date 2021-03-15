import repoFactory from "@/util/repoFactory";

const employeeRepo = repoFactory.get("employeeRepo");

const getCurrEmployeeInfo = () => {
    return employeeRepo.getCurrEmployerInfo();
};

const getListStudentCV = () => {
    return employeeRepo.getListStudentCV();
}

export {
    getCurrEmployeeInfo,
    getListStudentCV,
}