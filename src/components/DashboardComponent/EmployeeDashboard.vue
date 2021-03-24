<template>
  <MainContent>
    <!-- Top Navigation -->
    <div class="package mt-3 mb-2 rounded-top rounded-bottom">
      <h4 class="mb-2 px-4 pt-2 text-dark fw-bold">Tìm việc làm tuyển dụng</h4>
      <!-- searchbox -->
      <div class="col-sm-6 col-lg-6 d-sm-flex px-4 py-2">
        <div class="input-group me-2 me-lg-3">
          <span class="input-group-text">
            <span class="fas fa-search"></span>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Type to search..."
            @input="handleInput($event.target.value)"
          />
        </div>
      </div>
      <!-- end of searchbox -->
      <div class="ps-4">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            TP. Hồ Chí Minh
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
            Hà Nội
          </label>
        </div>
      </div>
    </div>
    <!-- End of top navigation -->
    <div class="task-wrapper border bg-white rounded-top">
      <div
        class="card hover-state border-bottom rounded-0 rounded-top py-2"
        v-for="(response, index) in listJobs"
        :key="index"
      >
        <div class="row card-body d-sm-flex flex-wrap flex-lg-nowrap py-0">
          <!-- avatar of companies -->
          <div class="col-sm-2 d-sm-flex">
            <img
              :src="response.company.avatar"
              class="user-avatar large-avatar rounded border img-fluid"
            />
          </div>
          <div class="container-fluid mb-2">
            <!-- Information -->
            <div class="grid col-10">
              <div class="row">
                <!-- JobTitle -->
                <div class="col-sm-9 text-start">
                  <span class="h4">{{ response.title }}</span>
                </div>
                <!-- Expired Time -->
                <div class="col-sm-3 text-end">
                  <span
                    class="px-2 badge bg-primary private"
                    :class="response.style"
                  >
                    {{
                      response.style === "text-warning" ? "Còn lại" : "Hết hạn"
                    }}
                    <span v-if="response.style != 'text-danger'"
                      >:
                      {{ formatDate(response.dueDate) }}
                    </span>
                  </span>
                </div>
                <!-- end of exprired time -->
              </div>
              <div class="row pb-2">
                <div class="col text-start">
                  <span class="icon icon-sm pt-1"
                    ><span class="fas fa-building"></span
                  ></span>
                  {{ response.company.name }}
                </div>
              </div>
              <div class="row">
                <div class="col text-start text-success">
                  <span class="icon icon-sm pt-1">
                    <span class="fas fa-map-marker-alt"> </span>
                  </span>
                  {{ response.location }}
                </div>
                <div class="col text-end">
                  <span class="icon icon-sm pt-1">
                    <i class="fas fa-calendar-week" />
                  </span>
                  Đăng {{ formatDate(response.created) }}
                </div>
              </div>
              <div class="row">
                <!-- Apply Button -->
                <div class="text-end pt-4" v-if="response.status === null">
                  <button
                    type="button"
                    class="hover-state btn btn-warning"
                    data-bs-toggle="modal"
                    :data-bs-target="'#modal-default-' + response.postId"
                  >
                    Apply CV
                  </button>
                  <div
                    class="modal fade"
                    :id="'modal-default-' + response.postId"
                    tabindex="-1"
                    role="dialog"
                    :aria-labelledby="'modal-default-' + response.postId"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h2 class="h6 modal-title">Choose your CV</h2>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <div class="px-2 py-2">
                            <form>
                              <div v-for="cv in listCV" :key="cv.cvId">
                                <input
                                  type="radio"
                                  :id="cv.cvId"
                                  :value="cv.cvId"
                                  v-model="cvPicked"
                                />
                                <a :href="`/student/cv/${cv.cvId}`">
                                  <label class="form-label">
                                    {{ cv.title }}
                                  </label>
                                  <br />
                                  <label class="form-label">
                                    Created: {{ formatDate(cv.created) }}
                                  </label>
                                </a>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                            @click.prevent="handleApplyClick(response.postId)"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-end pt4-" v-else>
                  <button
                    type="button"
                    class="hover-state btn btn-warning"
                    disabled
                  >
                    Applied
                  </button>
                </div>
              </div>
              <!-- end of Apply Button -->
            </div>
          </div>
        </div>
      </div>
      <div
        class="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between"
      >
        <nav aria-label="Templates page navigation">
          <ul class="pagination">
            <li class="page-item disabled">
              <a
                class="page-link"
                aria-label="first link"
                tabindex="-1"
                href="#"
                >Previous</a
              >
            </li>
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" aria-label="first link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </MainContent>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import * as constants from "./dashboardUtils.js";
import { getListOfJobs, applyJob } from "@/util/service/recruitmentPostService";
import { getListCV } from "@/util/service/employeeService";

export default {
  name: "EmployeeDashboard",
  components: { MainContent },
  data() {
    return {
      listJobs: [],
      inputData: "",
      listCV: [],
      cvPicked: {},
    };
  },
  mounted() {
    this.fecthPayload();
  },
  methods: {
    checkTime(respData) {
      respData.forEach((item) => {
        const end = Date.now();
        const elapsedTime = end - new Date(item.dueDate).getTime();
        let days = elapsedTime / (24 * 60 * 60 * 1000);
        const fnGetStyle = (days) => {
          // let label = constants.LABELS.EXPIRED;
          let style = constants.CSS_BUTTON_COLOR.EXPIRED;
          if (days <= -7.0) {
            style = constants.CSS_BUTTON_COLOR.LONG_EXPIRED;
            // label = constants.LABELS.LONG_EXPIRED;
          } else if (days > -7.0 && days <= 0.0) {
            style = constants.CSS_BUTTON_COLOR.NEAR_EXPIRED;
            // label = constants.LABELS.NEAR_EXPIRED;
          }
          return style;
        };
        item["style"] = fnGetStyle(days);
        // console.log("item", item);
      });
    },
    fecthPayload() {
      getListOfJobs()
        .then((response) => {
          console.log("response: ", response);
          // response = this.dumpData;
          this.checkTime(response);
          this.listJobs = response;
        })
        .catch((error) => {
          console.log("error: ", error);
        });

      getListCV().then((response) => {
        this.listCV = response;
      });
    },
    formatDate(time) {
      const fmDate = new Date(time);
      return (
        parseInt(fmDate.getMonth()) +
        1 +
        "-" +
        fmDate.getDate() +
        "-" +
        fmDate.getFullYear()
      );
    },
    handleApplyClick(postId) {
      // modal popup
      console.log("cvPicked: ", this.cvPicked);
      console.log("jobPicked: ", postId);
      const payload = {
        cvId: this.cvPicked,
      };
      applyJob(postId, payload);
      this.fecthPayload();
    },
  },
};
</script>

<style scoped>
/* More styles */
.private {
  border-radius: 5px;
  padding: 2% 0 2% 0;
  font-weight: 700;
  font-size: 90%;
}
.package {
  z-index: -1;
  background-color: #67abdfef !important;
  border: 1px solid #ffffff !important;
  /* color: #ffffff !important; */
  -webkit-box-shadow: 0 3px 5px 0 rgba(54, 163, 247, 0.3);
  box-shadow: 0 3px 5px 0 rgba(54, 163, 247, 0.3);
}
</style>
