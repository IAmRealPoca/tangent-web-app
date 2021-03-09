<template>
  <div>
    <MainContent>
      <main>
        <div class="py-4">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
              <li class="breadcrumb-item">
                <a href="#"><span class="fas fa-home"></span></a>
              </li>
              <li class="breadcrumb-item"><a href="#">Employer</a></li>
              <li class="breadcrumb-item active" aria-current="page">Job</li>
            </ol>
          </nav>
          <div class="d-flex justify-content-between w-100 flex-wrap">
            <div class="mb-3 mb-lg-0">
              <h1 class="h4">Post job to school</h1>
              <p class="mb-0">Post job to school</p>
            </div>
            <div>
              <a href="#" class="btn btn-outline-gray"
                ><i class="far fa-question-circle me-1"></i> Forms Docs</a
              >
            </div>
          </div>
        </div>

        <div class="row justify-content-between">
          <div class="col-12 mb-4">
            <div class="row mb-4">
              <div class="col-lg-2 col-sm-6"></div>
              <div class="col-lg-8 col-sm-6">
                <div
                  class="card border-light shadow-sm components-section px-5 py-3"
                >
                  <div class="card-body">
                    <div class="mb-2">
                      <div class="card-body">

                      </div>
                    </div>
                    <div class="mb-2" v-if="approvedSchools.length > 0">
                      <label class="my-1 me-2" for="state">Job Posting:</label>
                      <select
                        id="state"
                        class="w-100"
                        name="state"
                        v-model="schoolSelected"
                      >
                        <option
                          v-for="(school, index) in approvedSchools"
                          :key="index"
                          :value="{
                            schoolId: school.school.accountId
                          }"
                        >
                          {{ school.school.schoolName }}
                        </option>
                      </select>
                    </div>
                    <div class="mb-2">
                      <label for="state" class="my-1 me-2">Skill:</label>
                    </div>

                    <div class="row mb-0">
                    <button
                      class="btn btn-outline-gray-700"
                      type="button"
                      @click="handlePostToSchoolButton"
                    >
                      Post to school
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import * as employerService from "@/util/service/employerService.js";
import MainContent from "@/components/MainContent.vue";
export default {
  name: "EmployerPostJobToSchool",
  components: {
    MainContent,
  },
  setup() {
        const route = useRoute();
        const jobPostId = Number(route.params.jobId);
        const schoolSelected = ref({});
    const approvedSchools = ref([]);

    // const user = JSON.parse(sessionStorage.getItem("userInfo"));
    const fetchApprovedSchools = () => {
      employerService.getApprovalInfo()
      .then((resp) => {
        approvedSchools.value = resp;
      })
    }

    const fetchJobPostToSchool = () => {
      
    }

    const handlePostToSchoolButton = () => {
      const payload = {
        "recruitmentPostId": jobPostId,
        "schoolId": schoolSelected.value.schoolId
      };
      console.log("School Id: ", schoolSelected.value.schoolId);
      employerService.postJobToSchool(jobPostId, payload);
    }
    
    onMounted(() => {
      fetchApprovedSchools();
    });

    return {
      approvedSchools,
      schoolSelected,
      handlePostToSchoolButton
    }
  },
};
</script>

<style scoped>
</style>