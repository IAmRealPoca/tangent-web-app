<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div class="content" :class="{ contract: isContracted }">
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
import { useStore } from "vuex";
import { ref } from "vue";
import { watchEffect } from "@vue/runtime-core";
export default {
  name: "MainContent",
  components: {
    Header,
    Footer,
    Navbar,
  },
  setup() {
    const store = useStore();
    const isContracted = ref(false);

    watchEffect(() => {
      console.log("store.state.isContracted :>> ", store.state.isContracted);
      isContracted.value = store.state.isContracted;
    });

    return {
      isContracted,
    };
  },
};
</script>

<style scoped>
.contract {
  margin-left: 95px !important;
}
</style>
