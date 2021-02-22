import repoFactory from "@/util/repoFactory";

const employerRepo = repoFactory.get("employerRepo");

const getCurrEmployeeInfo = () => {
    return employerRepo.getCurrEmployerInfo();
};

export{ getCurrEmployeeInfo }