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
                <li class="breadcrumb-item active" aria-current="page">
                  Majors
                </li>
              </ol>
            </nav>
            <h2 class="h4">Majors</h2>
            <p class="mb-0">Your school's all majors.</p>
          </div>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-primary">
                Export
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-xl-3">ff</div>
          <div class="col-12 col-xl-9">
            <div class="row">
              <div class="table-settings mb-4">
                <div class="row align-items-center justify-content-between">
                  <div class="col col-md-6 col-lg-3 col-xl-4">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon2"
                        ><span class="fas fa-search"></span
                      ></span>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputIconLeft"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                  </div>
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
                class="card card-body shadow-sm table-wrapper table-responsive"
              >
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Major Name</th>
                      <th>Created Date</th>
                      <th>Due Date</th>
                      <th># of Students</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(major, index) in listMajor"
                      :key="major.majorId"
                    >
                      <td>
                        <a
                          :href="`/school/majors/${major.majorId}`"
                          class="fw-bold"
                          >{{ major.majorId }}</a
                        >
                      </td>
                      <td>
                        <a
                          :href="`/school/majors/${major.majorId}`"
                          class="fw-bold"
                          ><span class="fw-normal">{{
                            major.majorName
                          }}</span></a
                        >
                      </td>
                      <td>
                        <span class="fw-normal">{{
                          formatDate(major.created)
                        }}</span>
                      </td>
                      <td><span class="fw-normal">1 Jun 2020</span></td>
                      <td>
                        <span class="fw-bold">{{
                          major.employees.length
                        }}</span>
                      </td>
                      <td><span class="fw-bold text-warning">Due</span></td>
                      <td>
                        <div class="btn-group">
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
                          <div class="dropdown-menu py-0">
                            <a
                              class="dropdown-item rounded-top"
                              href="https://demo.themesberg.com/volt-pro/invoice.html"
                              ><span class="fas fa-eye me-2"></span>View
                              Details</a
                            >
                            <a class="dropdown-item" href="#"
                              ><span class="fas fa-edit me-2"></span>Edit</a
                            >
                            <a
                              class="dropdown-item text-danger rounded-bottom"
                              href="#"
                              ><span class="fas fa-trash-alt me-2"></span
                              >Remove</a
                            >
                          </div>
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
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import * as schoolService from "@/util/service/schoolService.js";
import { ref, onMounted } from "vue";
export default {
  name: "SchoolViewMajorList",
  components: {
    MainContent,
  },

  setup() {
    const listMajor = ref([]);
    const formatDate = (time) => {
      return new Date(time).toLocaleString();
    };

    const fetchMajorList = async () => {
      listMajor.value = await schoolService.getListOfMajors();
    };

    const handleMajorDetailClick = (event) => {};

    onMounted(() => {
      fetchMajorList();
    });
    return {
      listMajor,
      formatDate,
    };
  },
};
</script>

<style scoped>
</style>