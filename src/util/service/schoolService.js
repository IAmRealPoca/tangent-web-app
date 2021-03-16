import repoFactory from "@/util/repoFactory";

const schoolRepo = repoFactory.get("schoolRepo");

//TO BE CHANGED
const getListOfSchools = () => {
    return schoolRepo.get();
}

const getStudentListFromSchoolId = () => {
    return schoolRepo.getListStudent();
}

const getListOfCompany = () => {
    return schoolRepo.getListCompanies();
}

const getListOfMajors = () => {
    return schoolRepo.getListOfMajors();
}

const getMajorById = (majorId) => {
    return schoolRepo.getMajorById(majorId);
}

const getCompanyDetailsAsSchool = (companyId) => {
    return schoolRepo.getCompanyDetailsAsSchool(companyId);
}

const changeApprovalStatus = (payload) => {
  return schoolRepo.changeApprovalStatus(payload);
}

const changeStudentStatus = (studentId, payload) => {
  return schoolRepo.changeStudentStatus(studentId, payload);
}

export {
    getListOfSchools,
    getStudentListFromSchoolId,
    getListOfCompany,
    getListOfMajors,
    getMajorById,
    getCompanyDetailsAsSchool,
    changeApprovalStatus,
    changeStudentStatus,
}