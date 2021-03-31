import authRepo from "./repository/authRepo";
import employerRepo from './repository/employerRepo';
import QuestionRepo from "./repository/questionRepo";
import recruitmentPostRepo from './repository/recruitmentPostRepo';
import skillRepo from "./repository/skillRepo";
import schoolRepo from './repository/schoolRepo';
import videoChatRepo from './repository/videoChatRepo';
import jobFairRepo from './repository/jobFairRepo';
import boothRepo from './repository/boothRepo';
import majorRepo from './repository/majorRepo';
import adminRepo from "./repository/adminRepo";

import employeeRepo from "./repository/employeeRepo";
import videoRepo from "./repository/videoRepo";

const repositories = {
    "authRepo": authRepo,
    "questionRepo": QuestionRepo,
    "schoolRepo": schoolRepo,
    "recruitmentPostRepo": recruitmentPostRepo,
    "videoChatRepo": videoChatRepo,
    "employerRepo": employerRepo,
    "employeeRepo": employeeRepo,
    "skillRepo": skillRepo,
    "jobFairRepo":jobFairRepo,
    "boothRepo": boothRepo,
    "majorRepo": majorRepo,
    "videoRepo": videoRepo,
    "adminRepo": adminRepo,
}
export default {
    get: (name) => repositories[name]
};