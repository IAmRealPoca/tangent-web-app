import repoFactory from "@/util/repoFactory";

const schoolRepo = repoFactory.get("schoolRepo");

//TO BE CHANGED
const getListOfSchools = () => {
    return schoolRepo.get();
}

const getStudentListFromSchoolId = () => {
    return schoolRepo.getListStudent();
}

export { getListOfSchools, getStudentListFromSchoolId }