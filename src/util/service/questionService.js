import repoFactory from "@/util/repoFactory";

const questionRepo = repoFactory.get("questionRepo");


const getQuestionSets = () => {
    return questionRepo.get();
};

const getQuestion = (id: string) => {
    return questionRepo.getQuestion(id);
};

const createQuestion = (setId: any, newQuestion: any) => {
    return questionRepo.createQuestion(setId, newQuestion);
};

const deleteQuestion = (setId: any, questionId: any) => {
    return questionRepo.deleteQuestion(setId, questionId);
};

export { getQuestionSets, getQuestion, createQuestion, deleteQuestion };