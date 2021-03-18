<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import { onMounted, provide } from "vue";
// import firebaseMessaging from "@/util/firebase/firebaseMessaging.js";
import firebase from "firebase/app";
// import "./assets/js/volt.js";

export default {
  name: "App",
  components: {
    MainContent,
  },
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute("src", "/volt.js");
    plugin.async = true;
    plugin.type = "module";
    document.head.appendChild(plugin);
  },
  setup() {
    const registerServiceWorker = () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/firebase-messaging-sw.js", {
            scope: "/",
          })
          .then(function (reg) {
            // registration worked
            console.log("Registration succeeded. Scope is " + reg.scope);
          })
          .catch(function (error) {
            // registration failed
            console.log("Registration failed with " + error);
          });
      }
    };

    const messaging = firebase.messaging();

    console.log("firebase cm object: ", messaging);
    messaging.requestPermission().then(() => {
      messaging
        .getToken({
          vapidKey:
            "BKmp1XnZf4-nc0ZjbVw_DJh9PKZy7AfsSPbp1IB9IoabSdk94_jTjg36mQvJlwFwBgfiJrmkaGv57Ud9Fls8p2c",
        })
        .then((currentToken) => {
          if (currentToken) {
            console.log("CurrToken: ", currentToken);
          } else {
            console.log(
              "No registration token available. Reequest permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occured while retrieving token: ", err);
        });
    });

    messaging.onMessage((payload) => {
      console.log("Message received: ", payload);
    });

    

    provide("messaging", messaging);
    onMounted(() => {
      registerServiceWorker();
    });
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* Main Css */
@import "./assets/css/volt.css";

/* @import "./assets/vendor/bootstrap/dist/js/bootstrap.min.js"; */
/* Slider */
/* @import "../src/assets/css/owl.carousel.min.css";
@import "../src/assets/css/owl.theme.default.min.css"; */
@import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css");
</style>
