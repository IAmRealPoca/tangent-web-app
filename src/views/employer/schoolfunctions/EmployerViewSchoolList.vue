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
                  Schools List
                </li>
              </ol>
            </nav>
            <h2 class="h4">Schools List</h2>
            <p class="mb-0"></p>
          </div>
          
        </div>
        <div class="table-settings mb-4">
          <div class="row justify-content-between align-items-center">
            <div class="col-9 col-lg-4 d-flex">
              <div class="input-group me-2 me-lg-3">
                <span class="input-group-text"
                  ><span class="fas fa-search"></span
                ></span>
                <input type="text" class="form-control" placeholder="Search" />
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
        <div class="card card-body shadow-sm table-wrapper table-responsive">
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
            <button class="btn btn-sm px-3 btn-secondary ms-3">Apply</button>
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
                    <label class="form-check-label" for="userCheck55"></label>
                  </div>
                </th>
                <th class="border-bottom">Name</th>
                <th class="border-bottom">Date Joined</th>
                <th class="border-bottom">Type</th>
                <th class="border-bottom">Status</th>
                <th class="border-bottom">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(a, index) in 1" :key="index">
                <td>
                  <div class="form-check dashboard-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="userCheck1"
                    />
                    <label class="form-check-label" for="userCheck1"></label>
                  </div>
                </td>
                <td>
                  <a href="#" class="d-flex align-items-center"
                    ><img
                      src="@/assets/img/team/profile-picture-1.jpg"
                      class="user-avatar rounded-circle me-3"
                      alt="Avatar"
                    />
                    <div class="d-block">
                      <span class="fw-bold">FPT University</span>
                      <div class="small text-gray">
                        <span
                          class="__cf_email__"
                          data-cfemail="375e59515877524f565a475b521954585a"
                          >District 9, Ho Chi Minh City</span
                        >
                      </div>
                    </div></a
                  >
                </td>
                <td><span class="fw-normal">10 Feb 2020</span></td>
                <td>
                  <span class="fw-normal"
                    >University</span
                  >
                </td>
                <td><span class="fw-normal text-success"><span class="fas fa-check-circle text-success me-2"></span
                    >Active</span></td>
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
                        ><span class="fas fa-user-shield me-2"></span>Request connection</a
                      >
                      <a class="dropdown-item" href="#"
                        ><span class="fas fa-eye me-2"></span>View Details</a
                      >
                      <a
                        class="dropdown-item text-danger rounded-bottom"
                        href="#"
                        ><span class="fas fa-user-times me-2"></span>Cancel connection</a
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
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
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
      </main>
    </MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
export default {
  name: "EmployerViewSchoolList",
  components: {
    MainContent,
  },
};
</script>

<style>
</style>