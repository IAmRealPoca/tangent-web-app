<template>
  <MainContent>
    <!-- Breadcrumb -->
    <main>
      <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-2"
      >
        <div class="d-block mb-2 mb-md-0">
          <h2 class="h4">CV List</h2>
        </div>
        <div class="btn-toolbar">
          <div>
            <button
              type="button"
              class="btn btn-sm btn-dark me-2"
              data-bs-toggle="modal"
              data-bs-target="#modal-default"
            >
              New CV
            </button>
            <div
              class="modal fade"
              id="modal-default"
              tabindex="-1"
              role="dialog"
              aria-labelledby="modal-default"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
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
                      <label for="formFile" class="form-label">
                        CV Title
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="newCV.title"
                      />
                    </div>
                    <div class="px-2 py-2">
                      <label for="formFile" class="form-label">
                        Please choose .pdf file
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="cv_file"
                        ref="thumbnail"
                        @change="handleFileUpload"
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="handleCreateCV"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-group"></div>
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
                  <th class="border-bottom">Full Name</th>
                  <!-- <th class="border-bottom">Type</th> -->
                  <th class="border-bottom">Last Update</th>
                  <th class="border-bottom">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(response, index) in listCVs" :key="index.cvId">
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
                      </div>
                    </a>
                  </td>
                  <td>
                    <div class="d-block">
                      <span class="fw-bold">
                        {{ response.employee.fullName }}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span class="fw-normal">
                      {{ formatDate(response.created) }}
                    </span>
                  </td>
                  <td>
                    <a>
                      <span
                        class="icon icon-lg"
                        @click="handleDelete(response.cvId)"
                      >
                        <i class="fas fa-trash align-center text-danger"></i>
                      </span>
                    </a>
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
    </main>
  </MainContent>
</template>
// Script
<script>
import MainContent from "@/components/MainContent";
import { useRouter } from "vue-router";
import { ref, onMounted, reactive } from "vue";
import * as EmployeeService from "@/util/service/employeeService";

export default {
  name: "StudentViewCVList",
  components: { MainContent },
  setup() {
    // const route = useRoute();
    const router = useRouter();
    // const cvId = Number(route.params.jobId);
    const thumbnail = ref(null);
    const listCVs = ref([]);

    const fetchCVList = () => {
      EmployeeService.getListCV()
        .then((response) => {
          console.log("response success-----> ", response[0].employee.fullName);
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

    const formatDate = (time) => {
      return new Date(time).toLocaleString();
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

    const handleDelete = (id) => {
      EmployeeService.deleteCV(id)
        .then(() => fetchCVList())
        .catch((error) => {
          console.log("---Error---", error);
        });
    };

    //handle create cv

    const file = ref({});
    const newCV = reactive({
      cvId: 0,
      title: "",
      cvFileDataset: {
        fileURL: "",
        fileType: "",
      },
    });

    const handleFileUpload = async (evt) => {
      const files = thumbnail.value.files[0];
      console.log(thumbnail.value.files[0]);
      file.value = files;
    };

    const handleCreateCV = async (e) => {
      // jobFair.schoolId = parseJwt();
      let formData = new FormData();
      if (file.value.size) {
        formData.append("file", file.value, "pdf");
      }
      formData.append("newCvParam", JSON.stringify(newCV));

      console.warn(...formData);
      // console.log("formData: ", formData);
      let status = await EmployeeService.uploadCVFile(formData);
      if (status) {
        await fetchCVList();
      }
      // isCreated.value = true;
    };
    //end handle create cv

    return {
      // variables
      listCVs,
      newCV,
      thumbnail,
      // methods
      handleRowclick,
      handleDelete,
      handleTableChange,
      formatDate,
      handleFileUpload,
      handleCreateCV,
    };
  },
};
</script>
// Style
<style scoped></style>
