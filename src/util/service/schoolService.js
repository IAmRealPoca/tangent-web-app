import repoFactory from "@/util/repoFactory";

const schoolRepo = repoFactory.get("schoolRepo");

//TO BE CHANGED
const getListOfSchools = () => {
    return schoolRepo.get();
}

const getStudentListFromSchoolId = (schoolId) => {
    return schoolRepo.getListStudent(schoolId);
}

export { getListOfSchools, getStudentListFromSchoolId }