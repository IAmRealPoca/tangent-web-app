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
                <li class="breadcrumb-item"><a href="#">Job Fair</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  School
                </li>
              </ol>
            </nav>
            <h2 class="h4">Job Fair</h2>
            <p class="mb-0">List of current job fairs.</p>
          </div>
          <a
            class="btn btn-sm btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#modal-form"
            ><span class="fas fa-plus me-2"></span> Create Job Fair</a
          >
        </div>
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
                  <div class="card-header border-0 text-center pb-0">
                    <h2 class="h4">Create Job Fair</h2>
                  </div>
                  <div class="card-body p-0 pl-lg-3">
                    <form action="#" class="mt-4">
                      <!-- Form -->
                      <div class="form-group mb-4">
                        <label for="booth_name">Job Fair Name</label>
                        <div class="input-group">
                          <span class="input-group-text" id="basic-addon1"
                            ><span class="fas fa-signature"></span
                          ></span>
                          <input
                            type="text"
                            class="form-control"
                            v-model="jobFair.jobFairName"
                            placeholder="Your Fantasic Title"
                            id="booth_name"
                            required
                          />
                        </div>
                      </div>
                      <!-- End of Form -->
                      <div class="form-group mb-4">
                        <label for="booth_name">Job Fair Thumbnail</label>
                        <div class="input-group">
                          <div class="mb-3">
                            <input
                              class="form-control"
                              ref="thumbnail"
                              @change="handleFileUpload"
                              id="booth_thumbnail"
                              type="file"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- Date -->
                      <div class="form-group mb-4">
                        <label for="booth_name">Start Date</label>
                        <div class="input-group">
                          <div class="mb-3">
                            <div class="input-group">
                              <span class="input-group-text"
                                ><span class="far fa-calendar-alt"></span
                              ></span>
                              <flat-pickr
                                v-model="jobFair.startDate"
                                :config="config"
                                class="form-control"
                                placeholder="Select date"
                                name="date"
                              >
                              </flat-pickr>
                              <!-- <input
                                data-datepicker=""
                                class="form-control"
                                id="dateEnd"
                                type="text"
                                placeholder="dd/mm/yyyy"
                                v-model="jobFair.startDate"
                                required
                              /> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- End Date -->
                      <!-- Form -->
                      <div class="form-group">
                        <div class="form-group mb-4">
                          <label for="booth_description"
                            >Job Fair Description</label
                          >
                          <div class="input-group">
                            <!-- <textarea
                              class="form-control"
                              id="booth_description"
                              rows="3"
                              style="resize: none"
                            ></textarea> -->
                            <ckeditor
                              :editor="editor"
                              v-model="jobFair.JobFairDescription"

                            ></ckeditor>
                          </div>
                        </div>
                        <!-- End of Form -->
                      </div>
                      <div class="d-grid">
                        <button
                          type="submit"
                          @click.prevent="handleCreate"
                          data-bs-dismiss="modal"
                          class="btn btn-info"
                        >
                          Create!
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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
                  <a :href="`/school/jobfair/` + fair.jobFairId">
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
                              <span :class="fair.statusClass">{{
                                fair.statusString
                              }}</span>
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
                        <!-- the delete button is supposed to be here -->
                      </div>
                    </div>
                  </a>
                  <div class="btn-group ms-md-3">
                    <button
                      class="btn btn-outline-danger"
                      type="button"
                      @click="handleRemoveButtonClick(fair.jobFairId)"
                    >
                      Cancel fair
                    </button>
                  </div>
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
import { useRoute, useRouter } from "vue-router";
import { useJobFairService } from "@/util/service/jobFairService";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/dark.css";
import MainContent from "@/components/MainContent.vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
export default {
  name: "SchoolFairManagement",
  components: {
    MainContent,
    flatPickr,
    ckeditor: CKEditor.component,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const thumbnail = ref(null);
    const fairService = useJobFairService();
    const listOfFair = ref([]);
    const editor = ref(InlineEditor);
    const editorConfig = ref({
      toolbar: ["bold", "italic", "|", "link"],
    });
    const jobFair = reactive({
      jobFairName: "",
      JobFairDescription: "",
      startDate: "",
      jobFairThumbnail: "",
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

    const fetchListJF = async () => {
      listOfFair.value = await fairService.getAllFair();
      listOfFair.value = listOfFair.value.map((e) => {
        return {
          ...e,
          statusString: checkStatusCSSClass(e.status).statusString,
          statusClass: checkStatusCSSClass(e.status).statusClass,
        };
      });
      console.log(listOfFair.value);
    };

    onMounted(async () => {
      // fetchAppliedCV(jobId);
      await fetchListJF();
      console.log(listOfFair.value);
      parseJwt();
    });

    const formatDate = (time) => {
      return new Date(time).toLocaleString();
    };

    const file = ref({});

    const handleFileUpload = async (evt) => {
      const files = thumbnail.value.files[0];
      console.log(thumbnail.value.files[0]);
      file.value = files;
    };

    const handleCreate = async (e) => {
      jobFair.schoolId = parseJwt();
      console.log("jobfair: ", jobFair);
      let formData = new FormData();
      if (file.value.size) {
        console.warn("YAY");
        formData.append("file", file.value, jobFair.jobFairThumbnail.name);
      }
      formData.append("fairParams", JSON.stringify(jobFair));

      console.warn(...formData);

      let status = await fairService.createFair(formData);
      if (status) {
        await fetchListJF();
      }
      isCreated.value = true;
    };

    const handleRemoveButtonClick = (id) => {
      fairService.deleteFair(id);
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

    const checkStatusCSSClass = (statusInt) => {
      let text = "";
      const fwBold = "badge super-badge badge-lg";
      let cssClass = "bg-dark";
      if (statusInt === 0) {
        cssClass = "bg-success";
        text = "Done";
      }
      if (statusInt === 1) {
        cssClass = "bg-info";
        text = "Ongoing";
      }
      if (statusInt === 2) {
        cssClass = "bg-warning";
        text = "In Future";
      }
      if (statusInt === 3) {
        cssClass = "bg-danger";
        text = "Cancelled";
      }
      return {
        statusClass: fwBold + " " + cssClass,
        statusString: text,
      };
    };

    return {
      listAppliedCVs,
      listOfFair,
      formatDate,
      editor,
      editorConfig,
      jobFair,
      handleFileUpload,
      handleCreate,
      handleRemoveButtonClick,
      thumbnail,
      config,
    };
  },
};
</script>

<style scoped>
.ck.ck-editor__editable_inline{
  width: 100% !important;
  height: 15rem;
  border: .5px solid;
}
</style>
