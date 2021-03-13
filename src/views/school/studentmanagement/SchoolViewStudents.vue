<template>
  <main-content>
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
                Students Relation Management
              </li>
            </ol>
          </nav>
          <h2 class="h4">Students Relation Management</h2>
          <p class="mb-0">Manage your relationship with students</p>
        </div>
      </div>
      <div class="row">
        <div class="table-settings mb-4">
          <div class="row justify-content-between align-items-center">
            <div class="col-9 col-lg-4 d-flex">
              <div class="input-group me-2 me-lg-3"></div>
              <div class="w-25"></div>
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
                  <label for="defaultCheck10"> Approved </label>
                </div>
                <div class="row form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck10"
                  />
                  <label for="defaultCheck10"> Pending </label>
                </div>
                <div class="row form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck10"
                  />
                  <label class="form-check-label" for="defaultCheck10">
                    Blocked
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
                    Declined
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-9" v-if="studentsList.length > 0">
          <div class="card card-body shadow-sm table-wrapper table-responsive">
            <table class="table user-table table-hover align-items-center">
              <thead>
                <tr>
                  <th class="border-bottom">Student Name</th>
                  <th class="border-bottom">Date Joined</th>
                  <th class="border-bottom">Major</th>
                  <th class="border-bottom"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(aStudent, index) in studentsList" :key="index">
                  <td>
                    <a href="#" class="d-flex align-items-center"
                      ><img
                        :src="aStudent.avatar"
                        class="user-avatar rounded-circle me-3"
                        alt="Avatar"
                      />
                      <div class="d-block">
                        <span class="fw-bold">{{ aStudent.fullName }}</span>
                        <div class="small text-gray">
                          <span
                            class="__cf_email__"
                            data-cfemail="375e59515877524f565a475b521954585a"
                            >{{ aStudent.address }}</span
                          >
                        </div>
                      </div></a
                    >
                  </td>
                  <td>
                    <span class="fw-normal">{{
                      formatDate(aStudent.dateOfBirth)
                    }}</span>
                  </td>
                  <!-- Status column -->
                  <td>
                    <span class="fw-normal text-success"
                      >{{ major.majorName }}
                    </span>
                  </td>
                  <!-- End status column -->
                  <td>
                    <div v-if="!major.majorName">
                      <!-- <span class="fw-normal text-dark"
                        ><span class="fas fa-times-circle text-dark me-2"></span
                        >{{ aStudent.status.statusName }}</span
                      > -->
                      <button class="btn text-danger" type="button" disabled>
                        No action
                      </button>
                    </div>
                    <div v-else>
                      <div>
                        <button
                          class="btn btn-outline-success"
                          type="button"
                          data-bs-toggle="modal"
                          :data-bs-target="'#modal-form-' + aStudent.accountId"
                        >
                          Request
                        </button>
                      </div>
                      <div>
                        <button class="btn btn-outline-danger" type="button">
                          Remove
                        </button>
                      </div>
                      <!-- request popup -->
                      <div
                        class="modal fade"
                        :id="'modal-form-' + aStudent.accountId"
                        tabindex="-1"
                        role="dialog"
                        :aria-labelledby="'modal-form-' + aStudent.accountId"
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
                                    You are about to send an approval request to
                                    {{ aStudent.schoolName }}
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
                                        @click.prevent="
                                          handleRequestClick(aStudent.accountId)
                                        "
                                        class="btn btn-info mb-4"
                                      >
                                        Request
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
                      <!-- end request popup -->
                    </div>
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

        <div class="col-12 col-xl-9" v-else-if="mergedArray.length <= 0">
          <div class="card text-center p-0 mb-4">
            <div class="card-body">
              <div class="spinner-border spinner-border-sm" role="status"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </main-content>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import { ref } from "@vue/reactivity";
export default {
  components: { MainContent },
};
</script>
<script setup>
import { getStudentListFromSchoolId } from "@/util/service/schoolService";
import { onMounted } from "@vue/runtime-core";
const mergedArray = ref([
  {
    accountId: 3,
    schoolName: "Ngo Son Nam",
    address: "District 9, HCMC",
    phone: null,
    avatar:
      "https://lh3.googleusercontent.com/a-/AOh14Gg7cbZQwc2tczU3fNcKyb9ajG_8iYHn0L2k_gOegg",
    description: null,
    created: "2021-03-12T08:06:34.8092103",
    employees: null,
    status: { statusId: -1, statusName: "Not yet requested" },
  },
]);
const studentsList = ref([]);
const major = ref({});

const fetchStudents = async () => {
  const resp = await getStudentListFromSchoolId();
  console.log(resp);
  studentsList.value = resp.employees;
  major.value = resp.majors[0];
};

const formatDate = (time) => {
  return new Date(time).toLocaleString();
};

onMounted(async () => {
  await fetchStudents();
});
</script>

<style></style>
