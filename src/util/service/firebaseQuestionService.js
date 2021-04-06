import { questionDB } from "../firebase/firebaseUtil";
const firebaseQuestionService = () => {
  /**
   *   Get All value from DB
   * @returns
   */
  const getAll = () => {
    return questionDB;
  };
  /**
   * 
   * @param {Object} payload 
   * @returns 
   */
  const create = (payload) => {
    return questionDB.push(payload);
  };
  const update = (key, payload) => {
    return questionDB.child(key).update(payload);
  };
  const del = (key) => {
    return questionDB.child(key).remove();
  };

  return { getAll, create, upload: update, del };
};
export { firebaseQuestionService as useFirebaseService };
