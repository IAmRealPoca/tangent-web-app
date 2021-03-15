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
                <li class="breadcrumb-item"><a href="#">School</a></li>
                <li class="breadcrumb-item"><a href="#">Majors</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  {{ majorDetail.majorName }}
                </li>
              </ol>
            </nav>
            <h2 class="h4">{{ majorDetail.majorName }}</h2>
            <p class="mb-0">
              Created at: {{ formatDate(majorDetail.created) }}
            </p>
          </div>
          <div class="btn-toolbar mb-2 mb-md-0">
            <a
              class="btn btn-sm btn-dark me-2"
              :href="`/school/majors/${majorDetail.majorId}/add-student`"
              ><span class="fas fa-plus me-2"></span> Add students
            </a>
            <a
              class="btn btn-sm btn-dark me-2"
              :href="`/school/majors/${majorDetail.majorId}/edit`"
              ><span class="fas fa-plus me-2"></span> Edit major
            </a>
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-primary">
                Export
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Begin filter left -->
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
                      placeholder="Keyword"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <span class="h5"> Student status </span>
                </div>
                <div class="row form-check form-switch">
                  <div class="col">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck10"
                    />
                    <label for="defaultCheck10"> Graduated </label>
                  </div>
                  <div class="col">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck10"
                    />
                    <label class="form-check-label" for="defaultCheck10">
                      Qualify for Intern
                    </label>
                  </div>
                  <div class="w-100"></div>
                  <div class="col">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck10"
                    />
                    <label class="form-check-label" for="defaultCheck10">
                      Studying
                    </label>
                  </div>
                  <div class="col">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck10"
                    />
                    <label class="form-check-label" for="defaultCheck10">
                      Pending
                    </label>
                  </div>
                  <div class="col">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck10"
                    />
                    <label class="form-check-label" for="defaultCheck10">
                      Suspended
                    </label>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <span class="h5">Enroll Date</span>
                  <div class="col-6 mb-2 input-group">
                    <span class="input-group-text"
                      ><span class="far fa-calendar-alt"></span
                    ></span>
                    <input
                      data-datepicker=""
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
                      data-datepicker=""
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
          <!-- End filter left -->
          <div class="col-12 col-xl-9">
            <div class="row" v-if="Object.keys(majorDetail).length > 0">
              <div class="table-settings mb-4">
                <div class="row align-items-center justify-content-between">
                  <div class="col col-md-6 col-lg-3 col-xl-4"></div>
                  <div class="col-4 col-md-2 col-xl-1 ps-md-0 text-right">
                    <div class="btn-group">
                      <button
                        class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="icon icon-sm icon-gray pt-1"
                          ><span class="fas fa-cog"></span> </span
                        ><span class="sr-only">Toggle Dropdown</span>
                      </button>
                      <div
                        class="dropdown-menu dropdown-menu-xs dropdown-menu-end pb-0"
                      >
                        <span class="small ps-3 fw-bold text-dark">Show</span>
                        <a class="dropdown-item d-flex fw-bold" href="#"
                          >10
                          <span class="icon icon-small ms-auto"
                            ><span class="fas fa-check"></span></span
                        ></a>
                        <a class="dropdown-item fw-bold" href="#">20</a>
                        <a class="dropdown-item fw-bold" href="#">30</a>
                      </div>
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
                        <th>Major Name</th>
                        <th># of students</th>
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
                        <td>{{ majorDetail.majorName }}</td>
                        <td>{{ majorDetail.employees.length }}</td>
                        <td>24/02/2021</td>
                        <td>Reviewed</td>
                        <td>High GPA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="card card-body shadow-sm table-wrapper table-responsive"
              >
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Full Name</th>
                      <th>Birthday</th>
                      <th>Enroll Date</th>
                      <th>Jobs Applied</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(student, index) in majorDetail.employees"
                      :key="student.accountId"
                    >
                      <td>
                        <a href="" class="fw-bold">{{ student.accountId }}</a>
                      </td>
                      <td>
                        <span class="fw-normal">{{ student.fullName }}</span>
                      </td>
                      <td>
                        <span class="fw-normal">{{
                          formatDate(student.dateOfBirth)
                        }}</span>
                      </td>
                      <td><span class="fw-normal">1 Jun 2020</span></td>
                      <td>
                        <span class="fw-bold">ZZZ</span>
                      </td>
                      <td>
                        <span :class="student.statusClass">{{
                          student.statusString
                        }}</span>
                      </td>
                      <td>
                        <button
                          class="btn btn-outline-danger"
                          type="button"
                          @click="handleRemoveButtonClick(student.accountId)"
                        >
                          Remove
                        </button>
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
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">4</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">5</a>
                      </li>
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
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import * as schoolService from "@/util/service/schoolService.js";
import { useMajorService } from "@/util/service/majorService.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "SchoolViewMajorDetail",
  components: {
    MainContent,
  },

  setup() {
    const route = useRoute();
    const majorIdFromRoute = Number(route.params.majorId);
    const majorDetail = ref({});
    const majorService = useMajorService();
    const formatDate = (time) => {
      return new Date(time).toLocaleString();
    };

    const handleRemoveButtonClick = (selectedStudentId) => {
      const payload = {
        employeeIds: [selectedStudentId]
      }
      majorService.removeStudentFromMajor(majorIdFromRoute, payload);
    }

    const fetchMajorDetail = async (majorId) => {
      console.log("majorIdFromRoute: ", majorIdFromRoute);
      majorDetail.value = await schoolService.getMajorById(majorId);
      majorDetail.value.employees = majorDetail.value.employees.map((e) => {
        return {
          ...e,
          statusClass: checkStatusCSSClass(e.status),
          statusString: checkStatusString(e.status),
        };
      });
    };

    const checkStatusString = (statusInt) => {
      if (statusInt === 0) return "Graduated";
      if (statusInt === 1) return "Qualify For Intern";
      if (statusInt === 2) return "Studying";
      if (statusInt === 3) return "Pending";
      if (statusInt === 4) return "Suspended";
      return "Not interacted";
    };

    const checkStatusCSSClass = (statusInt) => {
      const fwBold = "badge super-badge badge-lg";
      var cssClass = "bg-dark";
      if (statusInt === 0) cssClass = "bg-success";
      if (statusInt === 1) cssClass = "bg-info";
      if (statusInt === 2) cssClass = "bg-info";
      if (statusInt === 3) cssClass = "bg-warning text-dark";
      if (statusInt === 4) cssClass = "bg-danger";
      return fwBold + " " + cssClass;
    };

    onMounted(() => {
      fetchMajorDetail(majorIdFromRoute);
    });
    return {
      majorDetail,

      formatDate,
      handleRemoveButtonClick,
    };
  },
};
</script>

<style scoped>
</style>