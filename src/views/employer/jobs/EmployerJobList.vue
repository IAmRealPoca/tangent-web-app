<template>
  <div>
      <main class="content">
      <nav
        class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0"
      >
        <div class="container-fluid px-0">
          <div
            class="d-flex justify-content-between w-100"
            id="navbarSupportedContent"
          >
            <div class="d-flex align-items-center">
              <button
                id="sidebar-toggle"
                class="sidebar-toggle me-3 btn btn-icon-only btn-lg btn-circle d-none d-md-inline-block"
              >
                <span class="fas fa-bars"></span>
              </button>
              <form class="navbar-search form-inline" id="navbar-search-main">
                <div class="input-group input-group-merge search-bar">
                  <span class="input-group-text" id="topbar-addon"
                    ><span class="fas fa-search"></span
                  ></span>
                  <input
                    type="text"
                    class="form-control"
                    id="topbarInputIconLeft"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="topbar-addon"
                  />
                </div>
              </form>
            </div>
            <ul class="navbar-nav align-items-center">
              <li class="nav-item dropdown">
                <a
                  class="nav-link text-dark me-lg-3 icon-notifications dropdown-toggle"
                  data-unread-notifications="true"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  ><span class="icon icon-sm"
                    ><span class="fas fa-bell bell-shake"></span>
                    <span
                      class="icon-badge rounded-circle unread-notifications"
                    ></span></span
                ></a>
                <div
                  class="dropdown-menu dashboard-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0"
                >
                  <div class="list-group list-group-flush">
                    <a
                      href="#"
                      class="text-center text-primary fw-bold border-bottom border-light py-3"
                      >Notifications</a
                    >
                    <a
                      href="../calendar.html"
                      class="list-group-item list-group-item-action border-bottom border-light"
                      ><div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            alt="Image placeholder"
                            src="@/assets/img/team/profile-picture-1.jpg"
                            class="user-avatar lg-avatar rounded-circle"
                          />
                        </div>
                        <div class="col ps-0 ms-2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h4 class="h6 mb-0 text-small">Jose Leos</h4>
                            </div>
                            <div class="text-end">
                              <small class="text-danger"
                                >a few moments ago</small
                              >
                            </div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            Added you to an event "Project stand-up" tomorrow at
                            12:30 AM.
                          </p>
                        </div>
                      </div></a
                    ><a
                      href="../tasks.html"
                      class="list-group-item list-group-item-action border-bottom border-light"
                      ><div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            alt="Image placeholder"
                            src="@/assets/img/team/profile-picture-2.jpg"
                            class="user-avatar lg-avatar rounded-circle"
                          />
                        </div>
                        <div class="col ps-0 ms-2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h4 class="h6 mb-0 text-small">Neil Sims</h4>
                            </div>
                            <div class="text-end">
                              <small class="text-danger">2 hrs ago</small>
                            </div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            You've been assigned a task for "Awesome new
                            project".
                          </p>
                        </div>
                      </div></a
                    ><a
                      href="../tasks.html"
                      class="list-group-item list-group-item-action border-bottom border-light"
                      ><div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            alt="Image placeholder"
                            src="@/assets/img/team/profile-picture-3.jpg"
                            class="user-avatar lg-avatar rounded-circle"
                          />
                        </div>
                        <div class="col ps-0 m-2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h4 class="h6 mb-0 text-small">Roberta Casas</h4>
                            </div>
                            <div class="text-end"><small>5 hrs ago</small></div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            Tagged you in a document called "First quarter
                            financial plans",
                          </p>
                        </div>
                      </div></a
                    ><a
                      href="../single-message.html"
                      class="list-group-item list-group-item-action border-bottom border-light"
                      ><div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            alt="Image placeholder"
                            src="@/assets/img/team/profile-picture-4.jpg"
                            class="user-avatar lg-avatar rounded-circle"
                          />
                        </div>
                        <div class="col ps-0 ms-2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h4 class="h6 mb-0 text-small">Joseph Garth</h4>
                            </div>
                            <div class="text-end"><small>1 d ago</small></div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            New message: "Hey, what's up? All set for the
                            presentation?"
                          </p>
                        </div>
                      </div></a
                    ><a
                      href="../single-message.html"
                      class="list-group-item list-group-item-action border-bottom border-light"
                      ><div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            alt="Image placeholder"
                            src="@/assets/img/team/profile-picture-5.jpg"
                            class="user-avatar lg-avatar rounded-circle"
                          />
                        </div>
                        <div class="col ps-0 ms-2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h4 class="h6 mb-0 text-small">Bonnie Green</h4>
                            </div>
                            <div class="text-end"><small>2 hrs ago</small></div>
                          </div>
                          <p class="font-small mt-1 mb-0">
                            New message: "We need to improve the UI/UX for the
                            landing page."
                          </p>
                        </div>
                      </div></a
                    ><a
                      href="#"
                      class="dropdown-item text-center text-primary fw-bold rounded-bottom py-3"
                      >View all</a
                    >
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle pt-1 px-0"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><div class="media d-flex align-items-center">
                    <img
                      class="user-avatar md-avatar rounded-circle"
                      alt="Image placeholder"
                      src="@/assets/img/team/profile-picture-3.jpg"
                    />
                    <div
                      class="media-body ms-2 text-dark align-items-center d-none d-lg-block"
                    >
                      <span class="mb-0 font-small fw-bold">Bonnie Green</span>
                    </div>
                  </div></a
                >
                <div
                  class="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-0"
                >
                  <a class="dropdown-item rounded-top fw-bold" href="#"
                    ><span class="far fa-user-circle"></span>My Profile</a
                  >
                  <a class="dropdown-item fw-bold" href="#"
                    ><span class="fas fa-cog"></span>Settings</a
                  >
                  <a class="dropdown-item fw-bold" href="#"
                    ><span class="fas fa-envelope-open-text"></span>Messages</a
                  >
                  <a class="dropdown-item fw-bold" href="#"
                    ><span class="fas fa-user-shield"></span>Support</a
                  >
                  <div role="separator" class="dropdown-divider my-0"></div>
                  <a class="dropdown-item rounded-bottom fw-bold" href="#"
                    ><span class="fas fa-sign-out-alt text-danger"></span
                    >Logout</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="py-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li class="breadcrumb-item">
              <a href="#"><span class="fas fa-home"></span></a>
            </li>
            <li class="breadcrumb-item"><a href="#">Tables</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              DataTables
            </li>
          </ol>
        </nav>
        <div class="d-flex justify-content-between w-100 flex-wrap">
          <div class="mb-3 mb-lg-0">
            <h1 class="h4">DataTables (Vanilla JS)</h1>
            <p class="mb-0">
              Dozens of reusable components built to provide buttons, alerts,
              popovers, and more.
            </p>
          </div>
          <div>
            <a
              href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/plugins/datatables/"
              class="btn btn-outline-gray"
              ><i class="far fa-question-circle me-1"></i> DataTables Docs</a
            >
          </div>
        </div>
      </div>
      <div class="card">
        <div class="table-responsive py-4">
          <table class="table table-flush">
            <thead class="thead-light">
              <tr>
                <th>Name</th>
                <th>Applicants</th>
                <th>Created</th>
                <th>Due date</th>
              </tr>
            </thead>
            <tbody v-if="(jobPostedList.length > 0)">
              <tr v-for="(aJob, index) in jobPostedList" :key="index">
                <td>{{ aJob.name }}</td>
                <td>{{ aJob.applicants }}</td>
                <td>{{ aJob.created }}</td>
                <td>{{ aJob.due }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </main>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import * as employerService from "@/util/service/employerService.js";
export default {
    name: "EmployerJobList",
    setup() {
      const jobPostedList = ref([]);

      const convertDateToString = (date) => {
        return date.getDay() +
        "/" +
        date.getMonth() +
        "/" +
        date.getFullYear();
      };

      const transformResponseToJobList = (resp) => {
        const fetchedJobList = resp;
        const transformedResponse = [];
        fetchedJobList.map((oneJob) => {
          const createdDateString = convertDateToString(new Date(oneJob.created));
          const dueDateString = convertDateToString(new Date(oneJob.dueDate));
          const transformedOneJob = {
            id: oneJob.postId,
            location: oneJob.location,
            name: oneJob.title,
            applicants: oneJob.totalCVs,
            created: createdDateString,
            due: dueDateString,
          };
          transformedResponse.push(transformedOneJob);
        });
        return transformedResponse;
      };

      const fetchActiveJob = () => {
        employerService.getCurrEmpJobs().then((resp) => {
          jobPostedList.value = transformResponseToJobList(resp);
        });
      }
      onMounted(() => {
        fetchActiveJob();
      });

      return {
        jobPostedList,
        fetchActiveJob,
      }
    },
}
</script>

<style scoped>

</style>