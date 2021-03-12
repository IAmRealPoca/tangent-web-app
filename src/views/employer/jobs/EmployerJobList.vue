<template>
  <div>
    <MainContent>
      <main>
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
                <li class="breadcrumb-item active" aria-current="page">Jobs</li>
              </ol>
            </nav>
            <h2 class="h4">Jobs</h2>
            <p class="mb-0">Your company's jobs are listed here.</p>
          </div>
          <div class="btn-toolbar mb-2 mb-md-0">
            <a class="btn btn-sm btn-dark" @click="handleNewJobClick"
              ><span class="fas fa-plus me-2"></span> New job</a
            >
            <!-- <div class="btn-group ms-2 ms-lg-3">
              <button type="button" class="btn btn-sm btn-outline-primary">
                Share
              </button>
              <button type="button" class="btn btn-sm btn-outline-primary">
                Export
              </button>
            </div> -->
          </div>
        </div>
        <div class="card">
          <div
            class="card card-body shadow-sm table-wrapper table-responsive"
            v-if="jobPostedList.length > 0"
          >
            <table class="table user-table table-hover align-items-center">
              <thead>
                <tr>
                  <th class="border-bottom">Name</th>
                  <th class="border-bottom">Applicants</th>
                  <th class="border-bottom">Created</th>
                  <th class="border-bottom">Due date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(aJob, index) in jobPostedList" :key="index">
                  <td>
                    <a class="d-flex align-items-center">
                      <div
                        class="d-block"
                        @click="handleJobDetailClick(aJob.id)"
                      >
                        <span class="fw-bold">{{ aJob.name }}</span>
                      </div></a
                    >
                  </td>
                  <td>
                    <a>
                      <span
                        class="fw-normal text-info"
                        @click="handleApplicantClick(aJob.id)"
                        >{{ aJob.applicants }}</span
                      >
                    </a>
                  </td>
                  <td>
                    <span class="fw-normal">{{ aJob.created }}</span>
                  </td>
                  <td>
                    <span class="fw-normal"> 1/6/2021 </span>
                  </td>
                </tr>
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
          <div
            class="card text-center p-0 mb-4"
            v-if="jobPostedList.length <= 0"
          >
            <div class="card-body">
              <div class="" role="status">
                There is no job
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
  beforeRouteUpdate(to, from, next) {
    this.fetchActiveJob();
    console.log(this);

    next();
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

    const handleApplicantClick = (jobPostId) => {
      //same as handleReviewApplicantClick in EmployerJobDetails
      router.push(`/employer/jobs/${jobPostId}/applicants`);
    };

    const handleNewJobClick = () => {
      router.push(`/employer/jobs/create`);
    };

    onMounted(() => {
      fetchActiveJob();
    });

    return {
      jobPostedList,
      fetchActiveJob,
      handleJobDetailClick,
      handleApplicantClick,
      handleNewJobClick,
    };
  },
};
</script>

<style scoped></style>
