<template>
  <MainContent>
    <h2 class="h4">Boothcamp</h2>

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
                <label for="defaultCheck10"> All Jobs </label>
              </div>
              <div class="row form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck10"
                />
                <label for="defaultCheck10"> Published </label>
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
                <th class="border-bottom">Job Title</th>
                <th class="border-bottom">Date Modified</th>
                <!-- <th class="border-bottom">Type</th> -->
                <th class="border-bottom">Candidates</th>
                <th class="border-bottom">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in dumbData" :key="index">
                <!-- Checkbox -->
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
                  <a
                    :href="`/student/cv/${response.boothId}`"
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
                      {{ formatDate(response.created) }}
                    </span>
                  </div>
                </td>
                <td>
                  <span class="fw-normal">
                    {{ response.candidates }}
                  </span>
                </td>
                <td>
                  <button
                    class="btn mb-1 me-1 btn-outline-info"
                    @click="handleBoost(response.boothId)"
                  >
                    Boost Job
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
              Showing <b>1</b> out of <b>25</b> entries
            </div>
          </div>
          <!-- End of Pagination -->
        </div>
      </div>
    </div>
  </MainContent>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
// import * as constants from "./dashboardUtils.js";
import { getListOfJobs } from "@/util/service/recruitmentPostService";

export default {
  name: "AdminDashboard",
  components: { MainContent },
  data() {
    return {
      listOfBoosth: [],
      dumbData: [
        {
          boothId: 102,
          company: {
            id: 2,
            name: "Team CVideos",
            description: null,
            phone: null,
            email: "apocalypsetank456@gmail.com",
            address: null,
            avatar:
              "https://lh4.googleusercontent.com/-sTSMchIYZas/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmHQg5825q8KoPT3eTn-05F9l3kgQ/s96-c/photo.jpg",
          },
          candidates: 100,
          location: "0666 Kipling Lane",
          expectedNumber: 3,
          dueDate: "2020-09-03T00:00:00",
          title: "Mauris sit amet eros.",
          jobDescription:
            "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\r\n\r\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          jobRequirement: "Paralegal",
          jobBenefit:
            "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\r\n\r\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\r\n\r\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
          minSalary: 12613,
          maxSalary: 17411,
          created: "2021-03-14T00:00:00",
          isBoost: false,
        },
      ],
    };
  },
  mounted() {
    this.fecthPayload();
  },
  methods: {
    fecthPayload() {
      getListOfJobs().then((response) => {
        response = this.dumbData;
        console.log("response", response);
      });
    },
    formatDate(time) {
      const fmDate = new Date(time);
      return (
        fmDate.getDate() +
        "-" +
        (parseInt(fmDate.getMonth()) + 1) +
        "-" +
        fmDate.getFullYear()
      );
    },
  },
};
</script>
<style scoped></style>
