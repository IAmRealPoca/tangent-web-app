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
                  Job detail
                </li>
              </ol>
            </nav>
            <h2 class="h4">Job detail</h2>
            <p class="mb-0">View and edit your job detail.</p>
          </div>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group ms-2 ms-lg-3">
              <button type="button" class="btn btn-sm btn-outline-primary">
                Export
              </button>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-xl-8">
            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-body">
                <div class="row mb-4">
                  <div class="col-lg-4 col-sm-6">
                    <h2 class="h5">Job</h2>
                    <button class="btn btn-outline-gray-700 mt-0" type="button">
                      Edit Details
                    </button>
                    <br />
                    <a href="#" class="text-info">Duplicate job</a>
                  </div>
                  <div class="col-lg-8 col-sm-6">
                    <h2 class="h5">Applicants</h2>
                    <button class="btn btn-outline-gray-700 mt-0" type="button">
                      Review 3 applicants
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="card border-light shadow-sm components-section mb-4">
              <div class="table-responsive py-4">
                <table class="table table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th>School</th>
                      <th>Applications</th>
                      <th>Last update</th>
                      <th>Status</th>
                      <th>Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- <tr v-for="(aJob, index) in jobPostedList" :key="index">
                      <td>{{ aJob.name }}</td>
                      <td>{{ aJob.applicants }}</td>
                      <td>{{ aJob.created }}</td>
                      <td>{{ aJob.due }}</td>
                    </tr> -->
                    <tr>
                      <td>FPT University</td>
                      <td>3</td>
                      <td>24/02/2021</td>
                      <td>Reviewed</td>
                      <td>High GPA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-body">
                <div class="row mb-4">
                  <div class="col-lg-4 col-sm-6">
                    d
                    </div>
            </div>
            </div>
            </div>
          </div>
          <div class="col-12 col-xl-4 pb-4">
            <div class="row">
              <div class="col-12 mb-4">
                <div class="card shadow-sm p-0">
                  <div class="card-header bg-primary text-white">
                    <h5 class="h5">Posted to 0 school</h5>
                  </div>
                  <div class="card-body pb-5">
                    <div class="row mb-2">
                      <div class="col-lg-12 text-gray">
                        <p>This job has not been to any schools, yet. Once you post this job to schools, a summary wil be shown here.</p>
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-lg-6">
                        <button class="btn btn-outline-gray-700" type="button">
                          Select target school
                        </button>
                    </div>
                  </div>
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
export default {
  name: "EmployerJobDetails",
  components: {
    MainContent,
  },
};
</script>

<style scoped>
</style>