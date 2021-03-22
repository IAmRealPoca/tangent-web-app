<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";

import "./assets/js/volt.js";

export default {
  name: "App",
  components: {
    MainContent,
  },
  mounted() {
    // const plugin = document.createElement("script");
    // plugin.setAttribute("src", "/volt.js");
    // plugin.async = true;
    // plugin.type = "module";
    // document.head.appendChild(plugin);
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
<style>
:root {
  --ck-z-default: 100 !important;
  --ck-z-modal: calc(var(--ck-z-default) + 999);
}
</style>
