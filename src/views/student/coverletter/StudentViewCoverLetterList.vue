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
        <h2 class="h4">Cover Letter</h2>
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
              <hr />
              <div class="d-flex mb-3">
                <button
                  @click="handleImport"
                  class="btn btn-sm px-3 btn-secondary ms-3"
                >
                  Import
                </button>
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
              <tr
                v-for="(response, index) in listCLs"
                :key="index.coverLetterId"
              >
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
                    :href="`/student/cv/${response.coverLetterId}`"
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
                  <span
                    class="icon icon-lg align-center"
                    @click="handleDelete(response.coverLetterid)"
                  >
                    <i class="fas fa-trash align-center text-danger"></i>
                  </span>
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
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import * as EmployeeService from "@/util/service/employeeService";

export default {
  name: "StudentViewCoverLetterList",
  components: { MainContent },
  setup() {
    const router = useRouter();
    const listCLs = ref([]);

    const fetchCoverLetterList = () => {
      EmployeeService.getListCoverLetter()
        .then((response) => {
          console.log("response success-----> ", response);
          listCLs.value = response;
        })
        .catch((error) => {
          console.log("err", error);
        });
    };

    onMounted(() => {
      fetchCoverLetterList();
    });

    const handleRowclick = (coverLetterId) => {
      router.push(`/student/coverletter/${coverLetterId}`);
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

    const handleImport = () => {
      return (
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
                <h2 class="h6 modal-title">Terms of Service</h2>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary">
                  Import
                </button>
                <button
                  type="button"
                  class="btn btn-link text-gray ms-auto"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    const handleDelete = (id) => {
      EmployeeService.deleteCoverLetter(id)
        .then(() => true)
        .catch((error) => {
          console.log("---Error---", error);
        });
    };

    return {
      // variables
      listCLs,
      // methods
      handleRowclick,
      handleDelete,
      handleTableChange,
      handleImport,
      formatDate,
    };
  },
};
</script>
// Style
<style scoped></style>
