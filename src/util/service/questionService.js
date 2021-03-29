import repoFactory from "@/util/repoFactory";

const questionRepo = repoFactory.get("questionRepo");


const getQuestionSets = () => {
    return questionRepo.get();
};

const getQuestion = (id) => {
    return questionRepo.getQuestion(id);
};

const createQuestionSet = (payload) => {
  return questionRepo.create(payload);
};

const createQuestion = (setId, newQuestion) => {
    return questionRepo.createQuestion(setId, newQuestion);
};

const deleteQuestion = (setId, questionId) => {
    return questionRepo.deleteQuestion(setId, questionId);
};

export { getQuestionSets, getQuestion, createQuestionSet, createQuestion, deleteQuestion };