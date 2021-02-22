import authRepo from "./repository/authRepo";
import employerRepo from './repository/employerRepo';
import QuestionRepo from "./repository/questionRepo";
import recruitmentPostRepo from './repository/recruitmentPostRepo';
import schoolRepo from './repository/schoolRepo';
import videoChatRepo from './repository/videoChatRepo';

import employeeRepo from "./repository/employeeRepo";

const repositories = {
    "authRepo": authRepo,
    "questionRepo": QuestionRepo,
    "schoolRepo": schoolRepo,
    "recruitmentPostRepo": recruitmentPostRepo,
    "videoChatRepo": videoChatRepo,
    "employerRepo": employerRepo,
    "employeeRepo": employeeRepo,
}
export default {
    get: (name) => repositories[name]
};