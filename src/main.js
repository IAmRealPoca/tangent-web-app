import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App.vue";

import router from "@/router/router.js";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj4pN0htCDHQR72-LgEsFx6QlItAoBlqw",
  authDomain: "cvideos-905a8.firebaseapp.com",
  databaseURL: "https://cvideos-905a8.firebaseio.com/",
  projectId: "cvideos-905a8",
  storageBucket: "cvideo-905a8.appspot.com",
  messagingSenderId: "596123512687",
  appId: "1:596123512687:web:0e2c4583dc46ec02f0029a",
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
