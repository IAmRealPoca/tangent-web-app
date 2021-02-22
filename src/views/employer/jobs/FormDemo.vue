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
              <a
                href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/plugins/datatables/"
                class="btn btn-outline-gray"
                ><i class="far fa-question-circle me-1"></i> DataTables Docs</a
              >
            </div>
          </div>
        </div>
        <div class="card">
          <div class="table-responsive py-4">
            <table class="table table-flush">
              <thead class="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Applicants</th>
                  <th>Created</th>
                  <th>Due date</th>
                </tr>
              </thead>
              <tbody v-if="jobPostedList.length > 0">
                <tr v-for="(aJob, index) in jobPostedList" :key="index">
                  <td>{{ aJob.name }}</td>
                  <td>{{ aJob.applicants }}</td>
                  <td>{{ aJob.created }}</td>
                  <td>{{ aJob.due }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import MainContent from "@/components/MainContent.vue";
import * as employerService from "@/util/service/employerService.js";

export default {
  name: "EmployerJobList",
  components: {
    MainContent,
  },
  setup() {
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
    onMounted(() => {
      fetchActiveJob();
    });

    return {
      jobPostedList,
      fetchActiveJob,
    };
  },
};
</script>

<style scoped>
</style>