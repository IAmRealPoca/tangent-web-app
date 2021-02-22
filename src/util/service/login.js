import repoFactory from "@/util/repoFactory";
import firebase from 'firebase/app';

const authRepo = repoFactory.get("authRepo");
// const FLG = "1"; //employee
// const FLG = "2"; //employer

//For testing purpose. TO BE CHANGED
//To the line above: WHEN TO CHANGE -Nyam IV-
const login = (schoolId, accountTypeId) => {
    console.log('login');
    return new Promise((resolve, reject) => {
        console.log('id ',schoolId);
        const provider = new firebase.auth.GoogleAuthProvider();
        console.log(provider);
        firebase.auth().signInWithPopup(provider)
            .then(userCredential => {
                return userCredential.user?.getIdToken(true)
            })
            .then(token => {
                return authRepo.getLogin({
                    token,
                    flg: accountTypeId,
                    schoolId,
                });
            })
            .then(resp => {
                resolve(resp.data);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });
};
export { login as loginService };