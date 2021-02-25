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
              <li class="breadcrumb-item"><a href="#">Tables</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                DataTables
              </li>
            </ol>
          </nav>
          <div class="d-flex justify-content-between w-100 flex-wrap">
            <div class="mb-3 mb-lg-0">
              <h1 class="h4">DataTables (Vanilla JS)</h1>
              <p class="mb-0">
                Dozens of reusable components built to provide buttons, alerts,
                popovers, and more.
              </p>
            </div>
            <div>
              <a href="#" class="btn btn-outline-gray"
                ><i class="far fa-question-circle me-1"></i> DataTables Docs</a
              >
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card card-body shadow-sm table-wrapper table-responsive">
            <table class="table user-table table-hover align-items-center">
              <thead>
                <tr>
                  <th class="border-bottom">Name</th>
                  <th class="border-bottom">Applicants</th>
                  <th class="border-bottom">Created</th>
                  <th class="border-bottom">Due date</th>
                </tr>
              </thead>
              <tbody v-if="jobPostedList.length > 0">
                <tr v-for="(aJob, index) in jobPostedList" :key="index">
                  <td>
                    <a href="#" class="d-flex align-items-center">
                      <div
                        class="d-block"
                        @click="handleJobDetailClick(aJob.id)"
                      >
                        <span class="fw-bold">{{ aJob.name }}</span>
                      </div></a
                    >
                  </td>
                  <td>
                    <a href="#"
                      ><span class="fw-normal text-info" @click="handleApplicantClick(aJob.id)">{{
                        aJob.applicants
                      }}</span></a
                    >
                  </td>
                  <td>
                    <span class="fw-normal">{{ aJob.created }}</span>
                  </td>
                  <td>
                    <span class="fw-normal">
                      {{ aJob.due }}
                    </span>
                  </td>
                </tr>
              </tbody>
              <tbody v-if="jobPostedList.length <= 0">
                <div>No entries found.</div>
              </tbody>
            </table>
            <div
              class="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between"
            >
              <nav aria-label="Page navigation example">
                <ul class="pagination mb-0">
                  <li class="page-item">
                    <a class="page-link" href="#">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item active">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">4</a></li>
                  <li class="page-item"><a class="page-link" href="#">5</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
              <div class="fw-normal small mt-4 mt-lg-0">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import MainContent from "@/components/MainContent.vue";
import * as employerService from "@/util/service/employerService";

export default {
  name: "EmployerJobList",
  components: {
    MainContent,
  },
  setup() {
    const router = useRouter();
    const jobPostedList = ref([]);

    const convertDateToString = (date) => {
      return date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
    };

    const transformResponseToJobList = (resp) => {
      const fetchedJobList = resp;
      const transformedResponse = [];
      fetchedJobList.map((oneJob) => {
        const createdDateString = convertDateToString(new Date(oneJob.created));
        const dueDateString = convertDateToString(new Date(oneJob.dueDate));
        const transformedOneJob = {
          id: oneJob.postId,
          location: oneJob.location,
          name: oneJob.title,
          applicants: oneJob.totalCVs,
          created: createdDateString,
          due: dueDateString,
        };
        transformedResponse.push(transformedOneJob);
      });
      return transformedResponse;
    };

    const fetchActiveJob = () => {
      employerService.getCurrEmpJobs().then((resp) => {
        jobPostedList.value = transformResponseToJobList(resp);
      });
    };

    const handleJobDetailClick = (jobId) => {
      router.push(`/employer/jobs/${jobId}`);
    };

    const handleApplicantClick = (jobPostId) => { //same as handleReviewApplicantClick in EmployerJobDetails
      router.push(`/employer/jobs/${jobPostId}/applicants`)
    }

    onMounted(() => {
      fetchActiveJob();
    });

    return {
      jobPostedList,

      fetchActiveJob,
      handleJobDetailClick,
      handleApplicantClick,
    };
  },
};
</script>

<style scoped>
</style>