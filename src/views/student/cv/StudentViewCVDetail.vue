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
                <li class="breadcrumb-item"><a href="#">Student</a></li>
                <li class="breadcrumb-item active" aria-current="page">CV</li>
              </ol>
            </nav>
            <h2 class="h4">CV</h2>
            <p class="mb-0"></p>
          </div>
          <div class="btn-toolbar">
            <!-- <a class="btn btn-sm btn-dark me-2" @click="handleNewMajorClick"
              ><span class="fas fa-plus me-2"></span> New cv
            </a> -->

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
            <div>Title: {{ cvDetail.title }}</div>
            <div>Jobs applied: <div v-for="(application, index) in applicationList" :key="index">
              {{ application.title }}
              <br>
              Status: {{ application.company.status }}
              <hr>
              </div></div>
            <!-- <iframe
              :src="cvDetail.cvFile.fileURL"
              frameBorder="0"
              scrolling="auto"
              height="100%"
              width="100%"
            ></iframe> -->
            <PDFDocument v-bind="{ url: cvDetail.cvFile.fileURL, scale: 0.75 }" />
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import * as employeeService from "@/util/service/employeeService.js";
import PDFDocument from "@/components/PDFDocument.vue";
export default {
  name: "StudentViewCVDetail",
  components: {
    MainContent,
    PDFDocument,
  },
  setup() {
    const route = useRoute();
    const cvIdFromRoute = Number(route.params.cvId);
    const cvDetail = ref({});
    const applicationList = ref({});

    const fetchCVDetail = async () => {
      cvDetail.value = await employeeService.getStudentCVDetail(cvIdFromRoute);
      applicationList.value = await employeeService.getAppliedJob(cvIdFromRoute);
    };

    onMounted(() => {
      fetchCVDetail();
    });
    return {
      cvDetail,
      applicationList,
    };
  },
};
</script>

<style scoped>
</style>