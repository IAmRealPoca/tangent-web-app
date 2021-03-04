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
                <li class="breadcrumb-item"><a href="#">Volt</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Applicant List
                </li>
              </ol>
            </nav>
            <h2 class="h4">Applicant List</h2>
            <p class="mb-0">Your web analytics dashboard template.</p>
          </div>
          <div class="btn-toolbar mb-2 mb-md-0">
            <a href="#" class="btn btn-sm btn-dark"
              ><span class="fas fa-plus me-2"></span> New User</a
            >
            <div class="btn-group ms-2 ms-lg-3">
              <button type="button" class="btn btn-sm btn-outline-primary">
                Share
              </button>
              <button type="button" class="btn btn-sm btn-outline-primary">
                Export
              </button>
            </div>
          </div>
        </div>

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
                      placeholder="Keyword"
                    />
                  </div>
                  <select
                    class="form-select w-25"
                    aria-label="Message select example 2"
                  >
                    <option selected="selected">All</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                    <option value="3">Pending</option>
                    <option value="3">Canceled</option>
                  </select>
                </div>
                <hr />
                <div class="row">
                  <span class="h5">Exclude students that do not match</span>
                </div>
                <div class="row">
                  <div class="col">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck10"
                    />
                    <label for="defaultCheck10">
                      School Year or Graduation Date
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
                      Minimum GPA
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
                      Major
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
                      Work authorization status
                    </label>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <span class="h5">Created at</span>
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

          <div class="col-12 col-xl-9">
            <div class="table-settings mb-4">
              <div class="row justify-content-between align-items-center">
                <div class="col-9 col-lg-4 d-flex">
                </div>
                <div class="col-3 col-lg-8 text-right">
                  <div class="btn-group me-1">
                    <button
                      class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="icon icon-sm icon-gray pt-1"
                        ><span class="fas fa-sliders-h"></span> </span
                      ><span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end pb-0">
                      <span class="small ps-3 fw-bold text-dark">Show</span>
                      <a class="dropdown-item d-flex fw-bold" href="#"
                        >10
                        <span class="icon icon-small ms-auto"
                          ><span class="fas fa-check"></span></span
                      ></a>
                      <a class="dropdown-item fw-bold" href="#">20</a>
                      <a class="dropdown-item fw-bold rounded-bottom" href="#"
                        >30</a
                      >
                    </div>
                  </div>
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
                      <a class="dropdown-item fw-bold rounded-bottom" href="#"
                        >30</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="card card-body shadow-sm table-wrapper table-responsive"
            >
              <table class="table user-table table-hover align-items-center">
                <thead>
                  <tr>
                    <th class="border-bottom">
                      <div class="form-check dashboard-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="userCheck55"
                        />
                        <label
                          class="form-check-label"
                          for="userCheck55"
                        ></label>
                      </div>
                    </th>
                    <th class="border-bottom">Name</th>
                    <th class="border-bottom">Date Created</th>
                    <th class="border-bottom">School</th>
                    <th class="border-bottom">Verified</th>
                    <th class="border-bottom">Status</th>
                    <th class="border-bottom">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(appliedCV, index) in listAppliedCVs"
                    :key="index"
                    @click="handleApplicantClick(appliedCV.applicationId)"
                  >
                    <td>
                      <div class="form-check dashboard-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="userCheck1"
                        />
                        <label
                          class="form-check-label"
                          for="userCheck1"
                        ></label>
                      </div>
                    </td>
                    <td>
                      <a href="#" class="d-flex align-items-center"
                        ><img
                          :src="appliedCV.cv.employee.avatar"
                          class="user-avatar rounded-circle me-3"
                          alt="Avatar"
                        />
                        <div class="d-block">
                          <span class="fw-bold">{{
                            appliedCV.cv.employee.fullName
                          }}</span>
                          <div class="small text-gray">
                            <span
                              class="__cf_email__"
                              data-cfemail="375e59515877524f565a475b521954585a"
                              >[email&#160;protected]
                            </span>
                          </div>
                        </div>
                      </a>
                    </td>
                    <td><span class="fw-normal">10 Feb 2020</span></td>
                    <td>
                      <span class="fw-normal"
                        ><span
                          class="fas fa-check-circle text-success me-2"
                        ></span
                        >Email</span
                      >
                    </td>
                    <td><span class="fw-normal text-success">Active</span></td>
                    <td>
                      <div class="btn-group">
                        <button
                          class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span class="icon icon-sm pt-1"
                            ><span
                              class="fas fa-ellipsis-h icon-dark"
                            ></span> </span
                          ><span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu py-0">
                          <a class="dropdown-item rounded-top" href="#"
                            ><span class="fas fa-user-shield me-2"></span> Reset
                            Pass</a
                          >
                          <a class="dropdown-item" href="#"
                            ><span class="fas fa-eye me-2"></span>View
                            Details</a
                          >
                          <a
                            class="dropdown-item text-danger rounded-bottom"
                            href="#"
                            ><span class="fas fa-user-times me-2"></span
                            >Suspend</a
                          >
                        </div>
                      </div>
                      <span
                        class="fas fa-times-circle text-danger ms-2"
                        title="Delete"
                        data-bs-toggle="tooltip"
                      ></span>
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
      </main>
    </MainContent>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import MainContent from "@/components/MainContent.vue";
import { useRoute, useRouter } from "vue-router";
import * as EmployerService from "@/util/service/employerService";

export default {
  name: "EmployerApplicantList",
  components: {
    MainContent,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const jobId = Number(route.params.jobId);
    const listAppliedCVs = ref([]);

    const fetchAppliedCV = (jobId) => {
      EmployerService.getAppliedCVFromJobId(jobId)
        .then((resp) => {
          listAppliedCVs.value = resp;
        })
        .catch((err) => {});
    };

    onMounted(() => {
      fetchAppliedCV(jobId);
    });

    const handleApplicantClick = (applicationId) => {
      router.push(`/employer/jobs/${jobId}/applicants/${applicationId}`);
    };
    return {
      listAppliedCVs,
      handleApplicantClick,
    };
  },
};
</script>

<style scoped>
</style>