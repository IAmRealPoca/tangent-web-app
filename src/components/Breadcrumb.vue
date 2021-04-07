<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center"
    >
      <div class="d-block mb-2 mb-md-0">
        <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
          <ol class="breadcrumb breadcrumb-primary breadcrumb-transparent">
            <li class="breadcrumb-item">
              <a href="#"><span class="fas fa-home"></span></a>
            </li>
            <li
              class="breadcrumb-item active"
              aria-current="page"
              v-for="(item, index) in pathArr"
              :key="index"
            >
              <a href="">{{ item }}</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, Ref } from "vue";
// @ts-check
import { useRoute } from "vue-router";
import { useStore, mapGetters, mapActions } from "vuex";

export default {
  name: "Breadcrumb",
  mounted() {
    console.log("crumbv2", this.crumbV2);
  },
  computed: {
    ...mapGetters(["getBreadCrumb"]),
    crumbV2() {
      const abc = useStore().getters.getBreadCrumb();
      console.log("Breadcrumb Component: crumbV2", abc);
      return abc;
    },
    // crumbs: function() {
    //   let pathArray = useRoute().path.split("/");
    //   // console.log("pathArray", pathArray);
    //   pathArray.shift();
    //   // console.log("pathArrayAfterShift", pathArray);

    //   let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
    //     breadcrumbArray.push({
    //       path: path,
    //       to: breadcrumbArray[idx - 1]
    //         ? "/" + breadcrumbArray[idx - 1].path + "/" + path
    //         : "/" + path,
    //       text: pathArray[idx].meta || path,
    //     });
    //     return breadcrumbArray;
    //   }, []);
    //   return breadcrumbs;
    // },
  },

};
</script>
<style scoped>
.container {
  margin: auto;
  width: 50%;
}
</style>
