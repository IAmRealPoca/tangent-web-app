<template>
  <MainContent>
    <!-- Breadcrumb -->
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
    >
      <div class="d-block mb-2 mb-md-0">
        <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
          <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li class="breadcrumb-item">
              <a href="#"><span class="fas fa-home"></span></a>
            </li>
            <li class="breadcrumb-item"><a href="#">Tangent</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              Student
            </li>
          </ol>
        </nav>
        <h2 class="h4">Curriculum Vitae List</h2>
      </div>
    </div>
    <!-- End of Breadcrumb -->

    <div class="row">
      <div class="col-12 col-xl-3">
        <div class="card border-light shadow-sm components-section">
          <div class="card-header">
            <h5 class="h5">Filters option</h5>
          </div>
          <div class="card-body">
            <div class="row pb-3">
              <div class="input-group me-2 me-lg-3">
                <span class="input-group-text">
                  <span class="fas fa-search"> </span>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type to search..."
                />
              </div>
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

      <div class="col-12 col-xl-9">
        <div class="card card-body shadow-sm table-wrapper table-responsive">
          <table class="table table-flush table-hover align-items-center">
            <thead class="thead-light">
              <tr>
                <!-- <th class="border-bottom">
                  <div class="form-check dashboard-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="userCheck55"
                    />
                    <label class="form-check-label" for="userCheck55"></label>
                  </div>
                </th> -->
                <th class="border-bottom">Title</th>
                <th class="border-bottom">Created Date</th>
                <!-- <th class="border-bottom">Type</th> -->
                <th class="border-bottom">Last Update</th>
                <th class="border-bottom">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in listCVs" :key="index">
                <!-- Checkbox -->
                <!-- <td>
                  <div class="form-check dashboard-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="userCheck1"
                    />
                    <label class="form-check-label" for="userCheck1"></label>
                  </div>
                </td> -->
                <td>
                  <a
                    :href="`/student/cv/${response.cvId}`"
                    class="d-flex align-items-center"
                  >
                    <div class="d-block">
                      <span class="fw-bold">{{ response.title }}</span>
                      <div class="small text-gray">
                        <span
                          class="__cf_email__"
                          data-cfemail="375e59515877524f565a475b521954585a"
                        >
                          {{ response.created }}
                        </span>
                      </div>
                    </div>
                  </a>
                </td>
                <td>
                  <span class="fw-normal">
                    {{ formatDate(response.created) }}
                  </span>
                </td>
                <td>
                  {{ formatDate(response.lastUpdate) }}
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Pagination -->
          <div
            class="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between"
          >
            <nav aria-label="Page navigation example">
              <ul class="pagination mb-0">
                <li class="page-item">
                  <a class="page-link" href="#">Previous</a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
            <div class="fw-normal small mt-4 mt-lg-0">
              Showing <b>1</b> out of <b>25</b> entries
            </div>
          </div>
          <!-- End of Pagination -->
        </div>
      </div>
    </div>
  </MainContent>
</template>
// Script
<script>
import MainContent from "@/components/MainContent";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import * as EmployeeService from "@/util/service/employeeService";

export default {
  name: "StudentViewCoverLetterList",
  components: { MainContent },
  setup() {
    // const route = useRoute();
    const router = useRouter();
    // const cvId = Number(route.params.jobId);
    const listCVs = ref([]);

    const fetchCVList = () => {
      EmployeeService.getListStudentCV()
        .then((response) => {
          console.log("response success-----> ", response);
          listCVs.value = response;
        })
        .catch((error) => {
          console.log("err", error);
        });
    };

    onMounted(() => {
      fetchCVList();
    });

    const handleRowclick = (cvId) => {
      router.push(`/student/cv/${cvId}`);
    };

    const handleTableChange = (pagination, filtersArg, sorter) => {
      const params = {
        paging: {
          pageIndex: pagination.current - 1,
          pageSize: pagination.pageSize,
        },
      };
      return params;
    };
    return {
      // variables
      listCVs,
      // methods
      handleRowclick,
      handleTableChange,
    };
  },
};
</script>
// Style
<style scoped></style>
