<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Dashboard from "@/views/Dashboard.vue";
import Navbar from "@/components/navbar/LeftNavbar.vue";

import "./assets/js/volt.js";

import "@/assets/vendor/popperjs/core/dist/umd/popper.min.js";
// import "@/assets/vendor/bootstrap/dist/js/bootstrap.min.js";
import "@/assets/vendor/onscreen/dist/on-screen.umd.min.js";
import "@/assets/vendor/nouislider/distribute/nouislider.min.js";
import "@/assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js";
import "@/assets/vendor/countup.js/dist/countUp.umd.js";
// import "@/assets/vendor/chartist/dist/chartist.min.js";
// import "@/assets/vendor/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js";
import "@/assets/vendor/vanillajs-datepicker/dist/js/datepicker.min.js";
import "@/assets/vendor/simple-datatables/dist/umd/simple-datatables.js";
import "@/assets/vendor/sweetalert2/dist/sweetalert2.all.min.js";
import "@/assets/vendor/vanillajs-datepicker/dist/js/datepicker.min.js";
import "@/assets/vendor/fullcalendar/main.min.js";
import "@/assets/vendor/dropzone/dist/min/dropzone.min.js";
import "@/assets/vendor/choices.js/public/assets/scripts/choices.min.js";
import "@/assets/vendor/notyf/notyf.min.js";
import "@/assets/vendor/leaflet/dist/leaflet.js";
// import "@/assets/vendor/svgmap/dist/svgMap.min.js";
import "@/assets/vendor/simplebar/dist/simplebar.min.js";
import "@/assets/vendor/sortablejs/Sortable.min.js";

export default {
  name: "App",
  components: {
    Dashboard,
    Navbar,
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
</style>
