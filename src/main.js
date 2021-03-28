import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App.vue";

import CKEditor from "@ckeditor/ckeditor5-vue";

import axios from 'axios';

import store from "@/store/store";

import router from "@/router/router.js";

import { sync } from 'vuex-router-sync';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyCj4pN0htCDHQR72-LgEsFx6QlItAoBlqw",
//   authDomain: "cvideos-905a8.firebaseapp.com",
//   databaseURL: "https://cvideos-905a8.firebaseio.com/",
//   projectId: "cvideos-905a8",
//   storageBucket: "cvideo-905a8.appspot.com",
//   messagingSenderId: "596123512687",
//   appId: "1:596123512687:web:0e2c4583dc46ec02f0029a",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCj4pN0htCDHQR72-LgEsFx6QlItAoBlqw",
  authDomain: "cvideos-905a8.firebaseapp.com",
  databaseURL: "https://cvideos-905a8.firebaseio.com",
  projectId: "cvideos-905a8",
  storageBucket: "cvideos-905a8.appspot.com",
  messagingSenderId: "933755551828",
  appId: "1:933755551828:web:e2c0dd8ac018e2ea932dc1"
};

firebase.initializeApp(firebaseConfig);
// const mess = firebase.messaging();
// mess.getToken({
//   vapidKey:
//     "BKmp1XnZf4-nc0ZjbVw_DJh9PKZy7AfsSPbp1IB9IoabSdk94_jTjg36mQvJlwFwBgfiJrmkaGv57Ud9Fls8p2c",
// });
// mess.onMessage((payload) => {
//   console.log("Message :>> ", payload);
// });

const app = createApp(App);



app.config.globalProperties.$http = axios

app.use(store);

app.use(CKEditor);

app.use(router);

sync(store,router);

app.mount("#app");
