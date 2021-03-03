import repoFactory from "@/util/repoFactory";

const schoolRepo = repoFactory.get("skillRepo");

//TO BE CHANGED
const getListOfSkills = () => {
    return schoolRepo.getList();
}


export {getListOfSkills};