<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div class="content">
      <Header />
      <slot></slot>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/navbar/LeftNavbar.vue";
export default {
  name: "MainContent",
  components: {
    Header,
    Footer,
    Navbar,
  },
};
</script>

<style></style>
