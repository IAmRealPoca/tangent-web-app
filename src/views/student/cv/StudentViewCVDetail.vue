<template>
  <div>
    <MainContent>
      <main>
        <!-- Begin breadcrumb -->
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
        >
          <div class="d-block mb-4 mb-md-0">
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
              <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
                <li class="breadcrumb-item">
                  <a href="#"><span class="fas fa-home"></span></a>
                </li>
                <li class="breadcrumb-item"><a href="#">Tangent</a></li>
                <li class="breadcrumb-item"><a href="#">School</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Majors
                </li>
              </ol>
            </nav>
            <h2 class="h4">Majors</h2>
            <p class="mb-0">Your school's all majors.</p>
          </div>
          <div class="btn-toolbar">
            <a class="btn btn-sm btn-dark me-2" @click="handleNewMajorClick"
              ><span class="fas fa-plus me-2"></span> New major
            </a>

            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-primary">
                Export
              </button>
            </div>
          </div>
        </div>
        <!-- End breadcrumb -->
        <div class="row">
          <div v-if="Object.keys(cvDetail).length > 0">
            <iframe
              :src="cvDetail.cvFile.fileURL"
              frameBorder="0"
              scrolling="auto"
              height="100%"
              width="100%"
            ></iframe>
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import * as employeeService from "@/util/service/employeeService.js";
export default {
  name: "StudentViewCVDetail",
  components: {
    MainContent,
  },
  setup() {
    const route = useRoute();
    const cvIdFromRoute = Number(route.params.cvId);
    const cvDetail = ref({});
    const fetchCVDetail = async () => {
      cvDetail.value = await employeeService.getStudentCVDetail(cvIdFromRoute);
    };
    onMounted(() => {
      fetchCVDetail();
    });
    return {
      cvDetail,
    };
  },
};
</script>

<style scoped>
</style>