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
        </div>

        <div class="row">
          <div class="col-12 col-xl-3">
            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-body">
                <h2 class="h5 mb-0 mt-2">Name</h2>
                <span>Aubree Chapman</span>
                <h2 class="h5 mb-0 mt-2">Email Address</h2>
                <span>[protected]</span>
                <h2 class="h5 mb-0 mt-2">School Year</h2>
                <span>Senior</span>
                <h2 class="h5 mb-0 mt-2">Majors</h2>
                <span>English</span>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-9">
            <div class="card border-light shadow-sm components-section mb-4">
              <!-- <div class="card-body"> -->
                <div class="table-responsive py-4 pt-0">
                  <table class="table table-flush">
                    <thead class="thead-light">
                      <tr>
                        <th>Applied To</th>
                        <th>Status</th>
                        <th>Application Date</th>
                        <th>Created By</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Spring Internship</td>
                        <td>Reviewed</td>
                        <td>June 6th 2018</td>
                        <td>Aubree Chapman</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              <!-- </div> -->
            </div>

            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <!-- Tab -->
                    <nav>
                      <div
                        class="nav nav-tabs mb-4"
                        id="nav-tab"
                        role="tablist"
                      >
                        <a
                          class="nav-item nav-link active"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                          >Profile</a
                        >
                        <a
                          class="nav-item nav-link"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                          >Documents(2)</a
                        >
                        <a
                          class="nav-item nav-link"
                          id="nav-contact-tab"
                          data-bs-toggle="tab"
                          href="#nav-contact"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                          >Notes(0)</a
                        >
                      </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <div class="row">
                          <div
                            class="card border-light shadow-sm components-section mb-4"
                          >
                            <div class="card-body">
                              <h2 class="h4">Chippendale University</h2>
                              <p>College of Engineering</p>
                              <p>Doctorate</p>
                              <p class="text-gray-500">
                                September 2013 to September 2018
                              </p>
                              <p>Majors: English</p>
                              <p>Minors: Economics</p>
                            </div>
                          </div>

                          <div
                            class="card border-light shadow-sm components-section mb-4"
                          >
                            <div class="card-body">
                              <h2 class="h5">Work experience</h2>
                              <div class="card-body card mb-4">
                                <h2 class="h5">IDinsight</h2>
                                <h3 class="h2 mb-1"></h3>
                                <div class="small mb-3">Marketing Intern</div>
                                <p class="text-gray-500">
                                  June 2014 to September 2014
                                </p>
                                <p class="text-gray-500">
                                  Experimential Learning - Full-Time San
                                  Francisco CA, USA
                                </p>
                                <p>
                                  Developed partnership with similar companies
                                  to introduce products bridging our features
                                  together. Led in a team of 12 and strengthened
                                  the relationships with our customers.
                                  Recruited new talent into the team.
                                </p>
                              </div>
                              <div class="card-body card mb-4">
                                <h2 class="h5">IDinsight</h2>
                                <h3 class="h2 mb-1"></h3>
                                <div class="small mb-3">Marketing Intern</div>
                                <p class="text-gray-500">
                                  June 2014 to September 2014
                                </p>
                                <p class="text-gray-500">
                                  Experimential Learning - Full-Time San
                                  Francisco CA, USA
                                </p>
                                <p>
                                  Developed partnership with similar companies
                                  to introduce products bridging our features
                                  together. Led in a team of 12 and strengthened
                                  the relationships with our customers.
                                  Recruited new talent into the team.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        <div class="row">
                          <div
                            class="card border-light shadow-sm components-section mb-4"
                          >
                            <div class="card-body">
                              <div class="row">
                                <label class="my-1 me-2 h5" for="country"
                                  >Country</label
                                >
                                <select
                                  class="form-select"
                                  id="country"
                                  aria-label="Default select example"
                                >
                                  <option selected>Select documents...</option>
                                  <option value="1">CV</option>
                                  <option value="2">Cover Letter</option>
                                  <option value="3">Cover Video</option>
                                </select>
                              </div>
                              <div class="row pt-4">abcdef</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                      >
                        <p>
                          Exercitation photo booth stumptown tote bag Banksy,
                          elit small batch freegan sed. Craft beer elit seitan
                          exercitation, photo booth et 8-bit kale chips proident
                          chillwave deep v laborum. Aliquip veniam delectus,
                          Marfa eiusmod Pinterest in do umami readymade swag.
                        </p>
                        <p>
                          Day handsome addition horrible sensible goodness two
                          contempt. Evening for married his account removal.
                          Estimable me disposing of be moonlight cordially
                          curiosity.
                        </p>
                      </div>
                    </div>
                    <!-- End of tab -->
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
  name: "EmployerApplicantDetails",
  components: {
    MainContent,
  },
};
</script>

<style scoped>
</style>