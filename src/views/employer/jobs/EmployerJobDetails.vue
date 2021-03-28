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
                <li class="breadcrumb-item active" aria-current="page">
                  Job detail
                </li>
              </ol>
            </nav>
            <h2 class="h4">Job detail</h2>
            <p class="mb-0">View and edit your job detail.</p>
          </div>
          <div class="btn-toolbar mb-2 mb-md-0">
            <button
              type="button"
              class="btn btn-sm btn-outline-danger"
              data-bs-toggle="modal"
              data-bs-target="#modal-form"
            >
              Delete
            </button>
            <div
              class="modal fade"
              id="modal-form"
              tabindex="-1"
              role="dialog"
              aria-labelledby="modal-form"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-body p-0">
                    <div class="card border-light p-3 p-lg-4">
                      <button
                        type="button"
                        class="btn-close ms-auto"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <div
                        class="card-header border-0 text-center pb-0 text-wrap"
                      >
                        <h2 class="h4">
                          You are about to delete this job post.
                        </h2>
                      </div>
                      <div class="card-body p-0 pl-lg-3">
                        <form action="#" class="mt-4">
                          <!-- Form -->
                          <div class="form-group mb-4">
                            <label for="booth_name">Are you sure?</label>
                          </div>
                          <!-- End of Form -->
                          <div class="d-grid col-12">
                            <button
                              type="submit"
                              data-bs-dismiss="modal"
                              @click.prevent="handleDeleteJob"
                              class="btn btn-danger mb-4"
                            >
                              Delete
                            </button>
                            <button
                              type="cancel"
                              data-bs-dismiss="modal"
                              class="btn btn-gray-300 mb-2"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End of modal -->
            <div class="btn-group ms-2 ms-lg-3">
              <button type="button" class="btn btn-sm btn-outline-primary">
                Export
              </button>
            </div>
          </div>
        </div>

        <div class="row" v-if="Object.keys(jobDetails).length > 0">
          <div class="col-12 col-xl-8">
            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-body">
                <div class="row mb-4">
                  <div class="col-lg-6 col-sm-6">
                    <h2 class="h5">Job</h2>
                    <a :href="employerProfileLink">
                      <button
                        class="btn btn-outline-gray-700 mt-0"
                        type="button"
                      >
                        Edit Details
                      </button>
                    </a>
                    <br />
                    <a href="#" class="text-info">Duplicate job</a>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <h2 class="h5">Applicants</h2>
                    <button
                      class="btn btn-outline-gray-700 mt-0"
                      type="button"
                      @click="handleReviewApplicantClick"
                    >
                      Review {{ jobDetails.totalCVs }} applicants
                    </button>
                    <br />
                    <span>View profile and application documents</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card border-light shadow-sm components-section mb-4 pt-0"
            >
              <div class="table-responsive py-4 pt-0">
                <table class="table table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th>School</th>
                      <th>Applications</th>
                      <th>Last update</th>
                      <th>Status</th>
                      <th>Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- <tr v-for="(aJob, index) in jobPostedList" :key="index">
                      <td>{{ aJob.name }}</td>
                      <td>{{ aJob.applicants }}</td>
                      <td>{{ aJob.created }}</td>
                      <td>{{ aJob.due }}</td>
                    </tr> -->
                    <tr>
                      <td>FPT University</td>
                      <td>{{ jobDetails.totalCVs }}</td>
                      <td>24/02/2021</td>
                      <td>Reviewed</td>
                      <td>High GPA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-header bg-gray-300">
                <div class="row mb-0 pb-2">
                  <div class="col-lg-2 col-sm-2">
                    <div class="mt-2">
                      <img
                        :src="companyData.avatar"
                        class="border-white"
                        alt="Company image"
                      />
                    </div>
                  </div>
                  <div class="col-lg-8 col-sm-8">
                    <div class="row">
                      <div class="col">
                        <span class="h5">
                          {{ jobDetails.title }}
                        </span>
                      </div>
                      <div class="w-100"></div>
                      <div class="col">
                        <a href="/employer/profile" class="text-info me-3">{{
                          companyData.name
                        }}</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-2">
                    <button class="btn btn-outline-gray-700 mt-0" type="button">
                      Favorite job
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-12">
                    <h1 class="h4">Job description</h1>
                    <p>
                      {{ jobDetails.jobDescription }}
                    </p>
                    <h1 class="h4">About {{ companyData.name }}</h1>
                    <p>{{ companyData.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-2">Location</div>
                  <div class="col-lg-10">{{ jobDetails.location }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-lg-2">Salary</div>
                  <div class="col-lg-10">
                    {{ jobDetails.minSalary }} - {{ jobDetails.maxSalary }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-lg-2">Job benefit</div>
                  <div class="col-lg-10">{{ jobDetails.jobBenefit }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-4 pb-4">
            <div class="col-12 mb-4">
              <div class="card shadow-sm p-0 mb-4">
                <div class="card-header bg-primary text-white">
                  <h5 class="h5">
                    Posted to {{ postedSchoolList.length }} school
                  </h5>
                </div>
                <div class="card-body pb-3">
                  <div
                    class="row mb-0"
                    v-for="(item, index) in postedSchoolList"
                    :key="index"
                  >
                    <div class="col-12 col-lg-4 flex-grow-1">
                      <div
                        class="btn btn-outline-gray-700"
                        data-bs-toggle="modal"
                        :data-bs-target="'#modal-form-' + item.accountId"
                      >
                        {{ item.schoolName }}
                      </div>
                      <div
                        class="modal fade"
                        :id="'modal-form-' + item.accountId"
                        tabindex="-1"
                        role="dialog"
                        :aria-labelledby="'modal-form-' + item.accountId"
                        aria-hidden="true"
                      >
                        <div
                          class="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div class="modal-content">
                            <div class="modal-body p-0">
                              <div class="card border-light p-3 p-lg-4">
                                <button
                                  type="button"
                                  class="btn-close ms-auto"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                                <div
                                  class="card-header border-0 text-center pb-0 text-wrap"
                                >
                                  <h2 class="h4">
                                    You are about to remove this job post from
                                    {{ item.schoolName }}
                                  </h2>
                                </div>
                                <div class="card-body p-0 pl-lg-3">
                                  <form action="#" class="mt-4">
                                    <!-- Form -->
                                    <div class="form-group mb-4">
                                      <label for="booth_name"
                                        >Are you sure?</label
                                      >
                                    </div>
                                    <!-- End of Form -->
                                    <div class="d-grid col-12">
                                      <button
                                        type="submit"
                                        data-bs-dismiss="modal"
                                        @click.prevent="handleRemoveJobPostFromSchool(item.accountId)"
                                        class="btn btn-info mb-4"
                                      >
                                        Remove
                                      </button>
                                      <button
                                        type="cancel"
                                        data-bs-dismiss="modal"
                                        class="btn btn-gray-300 mb-2"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- End modal -->
                    </div>
                  </div>
                  <hr />
                  <div class="row mb-0" v-if="postedSchoolList.length <= 0">
                    <div class="col-lg-12 text-gray">
                      <p>
                        This job has not been to any schools, yet. Once you post
                        this job to schools, a summary wil be shown here.
                      </p>
                    </div>
                  </div>
                  <div class="row mb-0">
                    <button
                      class="btn btn-outline-gray-700"
                      type="button"
                      @click="handleSelectTargetSchoolClick"
                    >
                      Select target school
                    </button>
                  </div>
                </div>
              </div>

              <div class="card shadow-sm p-0 mb-4">
                <div class="card-body">
                  <div class="row">
                    <h2>Labels</h2>
                    <br />
                    <p>No labels have been selected.</p>
                    <button class="btn btn-outline-gray-700" type="button">
                      Add new labels
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card text-center p-0 mb-4"
          v-if="Object.keys(jobDetails).length <= 0"
        >
          <div class="card-body">
            <div class="spinner-border spinner-border-sm" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import MainContent from "@/components/MainContent.vue";
import * as recruitmentPostService from "@/util/service/recruitmentPostService";
import * as employerService from "@/util/service/employerService";

export default {
  name: "EmployerJobDetails",
  components: {
    MainContent,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const jobDetails = ref({});
    const jobPostId = Number(route.params.jobId);
    const postedSchoolList = ref([]);

    const handleReviewApplicantClick = () => {
      router.push(`/employer/jobs/${jobPostId}/applicants`);
    };

    //fetch data from the recruitment post API first, then feetch from employer API to get no of submitted CVs
    //this is dumb, but this is how the API works
    //damn
    const fetchFromEmployerAPI = (jobId) => {
      employerService.getOneByIdCurrEmployer(jobId).then((resp) => {
        jobDetails.value = {
          ...jobDetails.value,
          totalCVs: resp.totalCVs,
          newCVs: resp.newCVs,
        };
      });
    };

    const fetchOneJobPost = async (jobId) => {
      //fetch from recruitment API
      recruitmentPostService.getOneById(jobId).then((resp) => {
        jobDetails.value = resp;
        //force fetch in order
        fetchFromEmployerAPI(jobId);
      });
    };

    const handleSelectTargetSchoolClick = () => {
      router.push(`/employer/jobs/${jobPostId}/post-to-school`);
    };
    //end double data fetch

    const fetchSchoolPostedToList = (jobPostId) => {
      employerService.getPostedSchoolListByJobPostId(jobPostId).then((resp) => {
        postedSchoolList.value = resp;
      });
    };

    const handleDeleteJob = () => {
      recruitmentPostService.deleteJob(jobPostId);
      router.push("/employer/jobs");
    };

    const handleRemoveJobPostFromSchool = (schoolId) => {
      employerService.removeJobFromSchool(jobPostId, schoolId);
    };

    const companyData = ref({});
    const employerProfileLink = ref(`/employer/jobs/${jobPostId}/edit`);

    onMounted(() => {
      fetchOneJobPost(jobPostId);
      fetchSchoolPostedToList(jobPostId);
      const user = sessionStorage.getItem("userInfo");
      if (user) {
        // userName.value = parseJwt(user).email;
        companyData.value = JSON.parse(user);
      }
    });

    return {
      jobDetails,
      companyData,
      postedSchoolList,
      employerProfileLink,

      handleSelectTargetSchoolClick,
      handleReviewApplicantClick,
      handleDeleteJob,
      handleRemoveJobPostFromSchool,
    };
  },
};
</script>

<style scoped>
</style>