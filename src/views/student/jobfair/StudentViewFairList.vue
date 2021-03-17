<template>
  <div>
    <MainContent>
      <main>
        <!-- Breadcrumb -->
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
        >
          <div class="d-block mb-4 mb-md-0">
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
              <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
                <li class="breadcrumb-item">
                  <a href="#"><span class="fas fa-home"></span></a>
                </li>
                <li class="breadcrumb-item"><a href="#">Job Fair</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Applicant List
                </li>
              </ol>
            </nav>
            <h2 class="h4">Job Fair</h2>
            <p class="mb-0">List of current job fairs.</p>
          </div>
        </div>
        <!-- End breadcrumb -->
        <div class="row">
          <div class="col-12 col-xl-3">
            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-header">
                <h5 class="h5">Filters</h5>
              </div>
              <div class="card-body">
                <div class="col-12 col-lg-12 d-flex">
                  <div class="input-group me-2 me-lg-3">
                    <span class="input-group-text"
                      ><span class="fas fa-search"></span
                    ></span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Type to search..."
                    />
                  </div>
                  <!-- <select
                    class="form-select w-25"
                    aria-label="Message select example 2"
                  >
                    <option selected="selected">All</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                    <option value="3">Pending</option>
                    <option value="3">Canceled</option>
                  </select> -->
                </div>
                <hr />
                <div class="row">
                  <span class="h5">Filter options</span>
                </div>
                <div class="col">
                  <div class="row form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck10"
                    />
                    <label for="defaultCheck10"> Favorites </label>
                  </div>
                  <div class="row form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck10"
                    />
                    <label for="defaultCheck10"> Include Past Fairs </label>
                  </div>
                  <div class="row form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck10"
                    />
                    <label class="form-check-label" for="defaultCheck10">
                      Show Registered Only
                    </label>
                  </div>
                  <div class="row form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck10"
                    />
                    <label class="form-check-label" for="defaultCheck10">
                      Show Open for Registration Only
                    </label>
                  </div>
                </div>
                <hr />
                <div class="row" data-datepickerange="">
                  <span class="h5">Date</span>
                  <div class="col-6 mb-2 input-group">
                    <span class="input-group-text"
                      ><span class="far fa-calendar-alt"></span
                    ></span>
                    <input
                      class="form-control"
                      id="birthday"
                      type="text"
                      placeholder="From..."
                      required
                    />
                  </div>
                  <div class="col-6 mb-2 input-group">
                    <span class="input-group-text"
                      ><span class="far fa-calendar-alt"></span
                    ></span>
                    <input
                      class="form-control"
                      id="birthday"
                      type="text"
                      placeholder="To..."
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-9">
            <div class="task-wrapper border bg-white shadow-sm rounded">
              <!-- Start one item -->
              <div v-if="listOfFair.length >= 0">
                <div
                  v-for="(fair, index) in listOfFair"
                  :key="index"
                  class="card hover-state border-bottom rounded-0 rounded-top py-3"
                >
                  <a @click="registerForFair(fair.jobFairId)">
                    <div
                      class="card-body d-sm-flex align-items-center flex-wrap flex-lg-nowrap py-0"
                    >
                      <div class="col-1 text-left text-sm-center mb-2 mb-sm-0">
                        <div class="me-sm-2">
                          <img
                            :src="fair.school.avatar"
                            class="user-avatar rounded-circle me-3"
                            alt="Avatar"
                          />
                          <label
                            class="form-check-label"
                            for="mailCheck1"
                          ></label>
                        </div>
                      </div>
                      <div class="col-11 col-lg-8 px-0 mb-4 mb-md-0">
                        <div class="mb-2">
                          <h3 class="h5">{{ fair.jobFairName }}</h3>
                          <div class="d-block d-sm-flex">
                            <div class="small text-gray mb-3 mb-sm-0">
                              <span>{{ fair.school.schoolName }}</span>
                            </div>
                            <div>
                              <h4
                                class="h6 fw-normal text-gray mb-3 mb-sm-0 ms-sm-3"
                              >
                                <span class="fas fa-clock me-2"></span
                                >{{ formatDate(fair.startDate) }}
                              </h4>
                            </div>
                            <div class="ms-sm-3">
                              <span
                                class="badge super-badge badge-lg bg-warning"
                                >In Progress</span
                              >
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="fw-bold text-dark">
                            <span class="fw-normal text-gray">{{
                              fair.JobFairDescriptionription
                            }}</span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-10 col-sm-2 col-lg-2 col-xl-2 d-none d-lg-block d-xl-inline-flex align-items-center ms-lg-auto text-right justify-content-end px-md-0"
                      >
                        <div
                          class="rating-star star-lg d-none d-lg-inline-block"
                        >
                          <input type="checkbox" id="InboxStar1" name="star" />
                          <label class="rating-star-label" for="InboxStar1"
                            ><span class="sr-only">Star</span></label
                          >
                        </div>
                        <div class="btn-group ms-md-3">
                          <button
                            class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span class="icon icon-sm"
                              ><span
                                class="fas fa-ellipsis-h icon-dark"
                              ></span> </span
                            ><span class="sr-only">Toggle Dropdown</span>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end py-0">
                            <a class="dropdown-item rounded-top" href="#"
                              ><span class="fas fa-edit"></span>Edit</a
                            >
                            <a class="dropdown-item text-warning" href="#"
                              ><span class="fas fa-star"></span>Important</a
                            >
                            <a
                              class="dropdown-item text-danger rounded-bottom"
                              href="#"
                              ><span class="fas fa-trash-alt"></span>Delete</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- End one item -->
            </div>
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import MainContent from "@/components/MainContent.vue";
import { useRoute, useRouter } from "vue-router";
import { useJobFairService } from "@/util/service/jobFairService";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/dark.css";

export default {
  name: "StudentViewFairList",
  components: {
    MainContent,
    flatPickr,
  },
  computed: {},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const thumbnail = ref(null);
    const fairService = useJobFairService();
    const listOfFair = ref([]);
    const comId = ref();
    const jobFair = reactive({
      jobFairName: "",
      JobFairDescription: "",
      startDate: "",
      jobFairThumbnail: Object,
      schoolId: "",
    });
    const jobId = Number(route.params.jobId);
    const listAppliedCVs = ref([]);

    const config = {
      wrap: true,
      enableTime: true,
      altInput: true,
      minDate: Date.parse(new Date().toLocaleDateString()),
      timeFormat: "H:i",
    };

    onMounted(async () => {
      // fetchAppliedCV(jobId);
      listOfFair.value = await fairService.getAllFair();
      console.log(listOfFair.value);
    });

    const formatDate = (time) => {
      return new Date(time).toLocaleString();
    };

    const handleFileUpload = (evt) => {
      const files = thumbnail.value.files[0];
      console.log(thumbnail.value.files[0]);
      jobFair.jobFairThumbnail = files;
    };

    const registerForFair = (jobFairId) => {
      comId.value = parseJwt();
      // if (!comId.value) error check
      const data = {
        id: jobFairId,
        humanId: comId.value,
      };
      fairService
        .registerFair(data)
        .then((resp) => {
          console.log(resp);
          if (resp) {
            router.push("/employer/jobfair/" + jobFairId);
          }
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
    };

    const parseJwt = () => {
      let token = sessionStorage.getItem("token");
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      let id = JSON.parse(jsonPayload);
      return id.sub;
    };

    return {
      listAppliedCVs,
      listOfFair,
      formatDate,
      jobFair,
      handleFileUpload,
      registerForFair,
      thumbnail,
      config,
    };
  },
};
</script>

<style scoped></style>
