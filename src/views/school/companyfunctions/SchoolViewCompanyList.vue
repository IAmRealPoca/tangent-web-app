<template>
  <div>
    <MainContent>
      <main>
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
                  Company
                </li>
              </ol>
            </nav>
            <h2 class="h4">Companies List</h2>
          </div>
        </div>
        <!-- End of Breadcrumb -->

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

          <div class="col-12 col-xl-9">
            <div class="table-settings mb-4">
              <div class="row justify-content-between align-items-center">
                <div class="col-9 col-lg-4 d-flex"></div>
                <!-- <div class="col-3 col-lg-8 text-right">
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
                </div> -->
              </div>
            </div>
            <div
              class="card card-body shadow-sm table-wrapper table-responsive"
            >
              <div class="d-flex mb-3">
                <select
                  class="form-select fmxw-150"
                  aria-label="Message select example"
                >
                  <option selected="selected">Bulk Action</option>
                  <option value="1">Send Email</option>
                  <option value="2">Change Group</option>
                  <option value="3">Delete User</option>
                </select>
                <button class="btn btn-sm px-3 btn-secondary ms-3">
                  Apply
                </button>
              </div>
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
                    <th class="border-bottom">Date Joined</th>
                    <!-- <th class="border-bottom">Type</th> -->
                    <th class="border-bottom">Status</th>
                    <th class="border-bottom">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(response, index) in listCompanies" :key="index">
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
                      <a
                        :href="`/school/company/${response.accountId}`"
                        class="d-flex align-items-center"
                        ><img
                          :src="response.avatar"
                          class="user-avatar rounded-circle me-3"
                          alt="Avatar"
                        />
                        <div class="d-block">
                          <span class="fw-bold">{{
                            response.companyName
                          }}</span>
                          <div class="small text-gray">
                            <span
                              class="__cf_email__"
                              data-cfemail="375e59515877524f565a475b521954585a"
                            >
                              {{ response.address }}
                            </span>
                          </div>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span class="fw-normal">
                        <!-- {{ moment(response.created, moment.HTML5_FMT.DATE) }} -->
                        {{ formatDate(response.created) }}
                      </span>
                    </td>
                    <!-- <td>
                    <span class="fw-normal">University</span>
                  </td> -->
                    <td>
                      <!-- <span :class="changeTextStatus(response.status)">
                      <i
                        class="fas fa-check-circle text-success me-2"
                        :class="changeIconStatus(response.status)"
                      />
                      {{ response.status }}
                    </span> -->
                      <span :class="changeTextStatus(response.status)">
                        {{ response.status }}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        :class="changeButtonStatus(response.status)"
                        @click="
                          handleActionButtonClick(
                            response.accountId,
                            response.status
                          )
                        "
                      >
                        {{ response.status }}
                      </button>
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
                  Showing <b>5</b> out of <b>25</b> entries
                </div>
              </div>
              <!-- End of Pagination -->
            </div>
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
// import moment from "moment";
import * as constants from "./constants.js";
import { ref, onMounted } from "vue";
import MainContent from "@/components/MainContent";
import { useRouter } from "vue-router";
import * as SchoolServices from "@/util/service/schoolService";

export default {
  name: "SchoolViewCompanyList",
  components: { MainContent },
  setup() {
    const router = useRouter();
    const listCompanies = ref([]);

    const handleActionButtonClick = (companyAccountId, status) => {
      console.log("currStatus: ", status);
      var newStatus = -1;
      if (status === constants.STATUS_ENUM.APPROVED) newStatus = 3;
      if (status === constants.STATUS_ENUM.PENDING) newStatus = 0;
      console.log("newStatus: ", newStatus);
      if (newStatus !== -1) {
        const payload = {
          companyId: companyAccountId,
          approvalStatus: newStatus,
        };
        SchoolServices.changeApprovalStatus(payload);
      }
    };

    const formatDate = (time) => {
      return new Date(time).toLocaleString();
    };

    const fetchListOfCompanies = () => {
      SchoolServices.getListOfCompany()
        .then((res) => {
          // console.log("-----response-----", res);
          listCompanies.value = res;
          res.forEach((res) => {
            if (res.status === 0)
              return (res.status = constants.STATUS_ENUM.APPROVED);
            if (res.status === 1)
              return (res.status = constants.STATUS_ENUM.PENDING);
            if (res.status === 2)
              return (res.status = constants.STATUS_ENUM.BLOCKED);
            if (res.status === 3)
              return (res.status = constants.STATUS_ENUM.DECLINED);
            if (res.status === null)
              return (res.status = constants.STATUS_ENUM.NOT_YET_REQUESTED);
          });
        })
        .catch((er) => {
          console.log("---------fetch-list-company---------", er);
        });
    };

    onMounted(() => {
      fetchListOfCompanies();
    });

    const changeTextStatus = (status) => {
      if (status == constants.STATUS_ENUM.APPROVED) {
        return constants.CSS_COLOR.APPROVED;
      }
      if (status == constants.STATUS_ENUM.PENDING) {
        return constants.CSS_COLOR.PENDING;
      }
      if (status == constants.STATUS_ENUM.BLOCKED) {
        return constants.CSS_COLOR.BLOCKED;
      }
      if (status == constants.STATUS_ENUM.DECLINED) {
        return constants.CSS_COLOR.DECLINED;
      }
      if (status == constants.STATUS_ENUM.NOT_YET_REQUESTED) {
        return constants.CSS_COLOR.NOT_YET_REQUESTED;
      }
    };

    const changeButtonStatus = (status) => {
      if (status == constants.STATUS_ENUM.APPROVED) {
        return constants.CSS_BUTTON_COLOR.APPROVED;
      }
      if (status == constants.STATUS_ENUM.PENDING) {
        return constants.CSS_BUTTON_COLOR.PENDING;
      }
      if (status == constants.STATUS_ENUM.BLOCKED) {
        return constants.CSS_BUTTON_COLOR.BLOCKED;
      }
      if (status == constants.STATUS_ENUM.DECLINED) {
        return constants.CSS_BUTTON_COLOR.DECLINED;
      }
      if (status == constants.STATUS_ENUM.NOT_YET_REQUESTED) {
        return constants.CSS_BUTTON_COLOR.NOT_YET_REQUESTED;
      }
    };

    return {
      listCompanies,
      changeTextStatus,
      changeButtonStatus,
      handleActionButtonClick,
      formatDate,
    };
  },
};
</script>
