import { questionDB } from "../firebase/firebaseUtil";
const firebaseAnswerService = (idx) => {
    console.log("I am here");
    const answerDB = questionDB.child(`${idx}/answer`);
    console.warn("answerDB: ",answerDB);
    /**
     *   Get All value from DB
     * @returns
     */
    const getAll = () => {
        return answerDB;
    };
    /**
     *
     * @param {Object} payload
     * @returns
     */
    const create = (payload) => {
        console.log("payload: ",payload);
        return answerDB.set(payload);
    };
    const update = (key, payload) => {
        return answerDB.child(key).update(payload);
    };
    const del = (key) => {
        return answerDB.child(key).remove();
    };

    return { getAll, create, upload: update, del };
};
export { firebaseAnswerService as useAnswerService };
