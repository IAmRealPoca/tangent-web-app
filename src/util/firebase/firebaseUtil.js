import firebase from "firebase/app";
import "firebase/database";

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCj4pN0htCDHQR72-LgEsFx6QlItAoBlqw",
    authDomain: "cvideos-905a8.firebaseapp.com",
    databaseURL: "https://cvideos-905a8.firebaseio.com",
    projectId: "cvideos-905a8",
    storageBucket: "cvideos-905a8.appspot.com",
    messagingSenderId: "933755551828",
    appId: "1:933755551828:web:e2c0dd8ac018e2ea932dc1",
  };

  firebase.initializeApp(firebaseConfig);
}
else{
    firebase.app()
}

const db = firebase.database();

const questionDB = db.ref("/question");

export { questionDB };
