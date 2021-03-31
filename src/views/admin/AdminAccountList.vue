<template>
  <div>
    <MainContent>
      <main>
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-2"
        >
          <div class="d-block mb-4 mb-md-0">
            <h2 class="h4">Account List</h2>
            <p class="mb-0"></p>
          </div>
          <!-- <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group ms-2 ms-lg-3">
              
            </div>
          </div> -->
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
                </div>
                <hr />
                <div class="row">
                  <span class="h5">Account type</span>
                </div>
                <div class="row form-check form-switch">
                  <div class="col">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck10"
                    />
                    <label for="defaultCheck10"> Student </label>
                  </div>
                  <div class="col">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck10"
                    />
                    <label class="form-check-label" for="defaultCheck10">
                      School
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
                      Company
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
                      Admin
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
            <div
              class="card card-body shadow-sm table-wrapper table-responsive"
            >
              <div class="d-flex mb-3">
                <select
                  class="form-select fmxw-150"
                  aria-label="Message select example"
                >
                  <option selected="selected">Bulk Action</option>
                  <option value="1">Approve selected</option>
                  <option value="2">Reject selected</option>
                </select>
                <button class="btn btn-sm px-3 btn-secondary ms-3">
                  Apply
                </button>
                <button type="button" class="btn btn-sm btn-success ms-3">
                  Export
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
                    <th class="border-bottom">Type</th>
                    <th class="border-bottom">Status</th>
                    <th class="border-bottom"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(account, index) in listAccount" :key="index">
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
                      <a href="" class="d-flex align-items-center"
                        ><img
                          :src="account.accountInfo.avatar"
                          class="user-avatar rounded-circle me-3"
                          alt="Avatar"
                        />
                        <div class="d-block">
                          <span
                            class="fw-bold"
                            v-if="account.role.roleName === 'employee'"
                            >{{ account.accountInfo.fullName }}</span
                          >
                          <span
                            class="fw-bold"
                            v-if="account.role.roleName === 'employer'"
                            >{{ account.accountInfo.name }}</span
                          >
                          <span
                            class="fw-bold"
                            v-if="account.role.roleName === 'school'"
                            >{{ account.accountInfo.schoolName }}</span
                          >
                          <div class="small text-gray">
                            <span
                              class="__cf_email__"
                              data-cfemail="375e59515877524f565a475b521954585a"
                            ></span>
                          </div>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span class="fw-normal">{{
                        formatDate(account.created)
                      }}</span>
                    </td>
                    <td>
                      <span class="fw-normal"
                        >{{ formatRoleName(account.role.roleId) }}</span
                      >
                    </td>
                    <td>
                      <div class="ms-sm-0">
                        <span :class="account.statusClass">{{
                          account.statusString
                        }}</span>
                      </div>
                    </td>
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
                          <a class="dropdown-item rounded-bottom" href="#"
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
                    <li class="page-item">
                      <a class="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
                <div class="fw-normal small mt-4 mt-lg-0">
                  Showing <b>5</b> out of <b>20</b> entries
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
import { ref, onMounted } from "vue";
import { useAdminService } from "@/util/service/adminService.js";
export default {
  name: "AdminAccountList",
  components: {
    MainContent,
  },
  setup() {
    const listAccount = ref([]);
    const adminService = useAdminService();
    const fetchAccounts = async () => {
      listAccount.value = await adminService.getAccounts();
      listAccount.value = listAccount.value.map((e) => {
        let result = {
          ...e,
          accountInfo: {},
          statusClass: "",
          statusString: "",
        };
        if (e.role.roleName === "employee") {
          result.accountInfo = e.employeeDataset;
          result.statusClass = "";
          result.statusString = "N/A";
        } else if (e.role.roleName === "employer") {
          result.accountInfo = e.companyDataset;
        } else if (e.role.roleName === "school") {
          result.accountInfo = e.schoolDataset;
        }
        //check employer status
        if (result.role.roleId !== 2) {
          if (result.accountInfo.status === 0) {
            result.statusClass = "text-success";
            result.statusString = "Active";
          } else if (result.accountInfo.status === 1) {
            result.statusClass = "text-gray-500";
            result.statusString = "Inactive";
          } else if (result.accountInfo.status === 2) {
            result.statusClass = "text-info";
            result.statusString = "Pending";
          } else if (result.accountInfo.status === 3) {
            result.statusClass = "text-danger";
            result.statusString = "Rejected";
          } else {
            result.statusClass = "text-gray-500";
            result.statusString = "Unknown";
          }
        }
        //end check employer status
        return result;
      });
      console.log("account 2: ", listAccount.value);
    };

    const formatDate = (time) => {
      return new Date(time).toLocaleString();
    };

    const formatRoleName = (roleId) => {
      if (roleId === 1) {
        return "Admin";
      } else if (roleId === 2) {
        return "Student";
      } else if (roleId === 3) {
        return "Company";
      } else if (roleId === 5) {
        return "School";
      } else {
        return "N/A";
      }
    };

    onMounted(async () => {
      await fetchAccounts();
    });

    return {
      listAccount,
      formatDate,
      formatRoleName,
    };
  },
};
</script>

<style scoped>
</style>