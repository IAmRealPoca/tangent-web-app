<template>
  <MainContent>
    <main>
      <!-- Title -->
      <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-2"
      >
        <div class="d-block mb-4 mb-md-0">
          <h2 class="h4">Request List</h2>
          <p class="mb-0"></p>
        </div>
      </div>
      <!-- End of title -->
      <!-- Content -->
      <div class="row">
        <!-- Filter search -->
        <div class="col-12 col-xl-3">
          <div class="card border-light shadow-sm components-section mb-4">
            <div class="card-header">
              <h5 class="h5">Filters</h5>
            </div>
            <div class="card-body">
              <div class="col-12 col-lg-12 d-flex">
                <div class="input-group me-2 me-lg-3">
                  <span class="input-group-text">
                    <span class="fas fa-search"> </span>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Keyword"
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <span class="h5">Event type</span>
              </div>
              <div class="row form-check form-switch">
                <div class="col">
                  <input class="form-check-input" type="checkbox" value="" />
                  <label for="defaultCheck10"> Student </label>
                </div>
                <div class="col">
                  <input class="form-check-input" type="checkbox" value="" />
                  <label class="form-check-label" for="defaultCheck10">
                    School
                  </label>
                </div>
                <div class="w-100"></div>
                <div class="col">
                  <input class="form-check-input" type="checkbox" value="" />
                  <label class="form-check-label" for="defaultCheck10">
                    Company
                  </label>
                </div>
                <div class="col">
                  <input class="form-check-input" type="checkbox" value="" />
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
                    type="text"
                    placeholder="From..."
                    required
                  />
                </div>
                <div class="col-6 mb-2 input-group">
                  <span class="input-group-text">
                    <span class="far fa-calendar-alt"> </span
                  ></span>
                  <input
                    data-datepicker=""
                    class="form-control"
                    type="text"
                    placeholder="To..."
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Filter search -->
        <!-- Table -->
        <div class="col-12 col-xl-9">
          <div class="card card-body shadow-sm table-wrapper table-responsive">
            <div class="d-flex mb-3">
              <select
                class="form-select fmxw-150"
                aria-label="Message select example"
              >
                <option selected="selected">Action</option>
                <option value="1">Approve selected</option>
                <option value="2">Reject selected</option>
              </select>
              <!-- <button class="btn btn-sm px-3 btn-secondary ms-3">
                Apply
              </button>
              <button type="button" class="btn btn-sm btn-success ms-3">
                Export
              </button> -->
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
                      />
                      <label class="form-check-label" for="userCheck55"></label>
                    </div>
                  </th>
                  <th class="border-bottom">Title</th>
                  <th class="border-bottom">Date Created</th>
                  <th class="border-bottom">From</th>
                  <th class="border-bottom">Status</th>
                  <th class="border-bottom">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="form-check dashboard-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label class="form-check-label" for="userCheck1"></label>
                    </div>
                  </td>
                  <td>
                    <!-- <a href="" class="d-flex align-items-center">
                      <div class="d-block">
                        <span
                          class="fw-bold"
                          v-if="account.role.roleName === 'employee'"
                        >
                          {{ account.accountInfo.fullName }}
                        </span>
                        <span
                          class="fw-bold"
                          v-if="account.role.roleName === 'employer'"
                        >
                          {{ account.accountInfo.name }}
                        </span>
                        <span
                          class="fw-bold"
                          v-if="account.role.roleName === 'school'"
                        >
                          {{ account.accountInfo.schoolName }}
                        </span>
                        <div class="small text-gray">
                          <span
                            class="__cf_email__"
                            data-cfemail="375e59515877524f565a475b521954585a"
                          ></span>
                        </div>
                      </div>
                    </a> -->
                  </td>
                  <td>
                    <span class="fw-normal">
                      <!-- {{ formatDate(account.created) }} -->
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <div class="ms-sm-0">
                      <!-- <span :class="account.statusClass">
                        {{ account.statusString }}
                      </span> -->
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
                        <span class="icon icon-sm pt-1">
                          <span class="fas fa-ellipsis-h icon-dark"></span>
                        </span>
                        <span class="sr-only">Toggle Dropdown</span>
                      </button>
                      <div class="dropdown-menu py-0">
                        <a class="dropdown-item rounded-bottom" href="#">
                          <span class="fas fa-user-shield me-2"></span>
                          Reset Pass
                        </a>
                        <a class="dropdown-item" href="#">
                          <span class="fas fa-eye me-2"></span> View Details
                        </a>
                        <a
                          class="dropdown-item text-danger rounded-bottom"
                          href="#"
                        >
                          <span class="fas fa-user-times me-2"></span>
                          Suspend
                        </a>
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
        <!-- End of Table -->
      </div>
      <!-- End of Content -->
    </main>
  </MainContent>
</template>

<script>
import MainContent from "@/components/MainContent.vue";

export default {
  name: "AdminEventList",
  components: { MainContent },
  data() {
    return {
      dumbData: [
        {
          eventId: "01",
          eventName: "Job Fair",
          created: "",
          from: "FPT University",
          status: "",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
