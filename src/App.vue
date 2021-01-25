<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import "../src/assets/js/app.js";
import "../src/assets/js/scrollspy.min.js";


export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* Main Css */
@import "../src/assets/css/style.css";
/* Slider */
/* @import "../src/assets/css/owl.carousel.min.css";
@import "../src/assets/css/owl.theme.default.min.css"; */
</style>
