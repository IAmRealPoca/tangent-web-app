<template>
  <div>
    <MainContent>
      <main>
        <!-- Breadcums -->
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
        >
          <div class="d-block mb-4 mb-md-0">
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
              <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
                <li class="breadcrumb-item">
                  <a href="#"><span class="fas fa-home"></span></a>
                </li>
                <li class="breadcrumb-item"><a href="#">Booth</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Jobfair Booth
                </li>
              </ol>
            </nav>
            <h2 class="h4">Your booth</h2>
            <p class="mb-0">This is your company's booth.</p>
          </div>
          <div class="btn-toolbar mb-2 mb-md-0">
            <a href="#" class="btn btn-sm btn-dark"
              ><span class="fas fa-plus me-2"></span> New User</a
            >
            <div class="btn-group ms-2 ms-lg-3">
              <button type="button" class="btn btn-sm btn-outline-primary">
                Share
              </button>
              <button type="button" class="btn btn-sm btn-outline-primary">
                Export
              </button>
            </div>
          </div>
        </div>
        <!-- The end of Breadcums -->
        <div class="row">
          <div class="col-12 col-xl-3">
            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-header">
                <h2 class="h5">ASMR Card Header</h2>
              </div>
              <div class="card-body">
                <h2 class="h5">ASMR Card Body</h2>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-9">
            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-header">
                <h2 class="h5">All Praise Patra the Imperator Card Header</h2>
              </div>
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
                          >Presentation</a
                        >
                        <a
                          class="nav-item nav-link"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                          >Schedule Interview</a
                        >
                        <a
                          class="nav-item nav-link"
                          id="nav-contact-tab"
                          data-bs-toggle="tab"
                          href="#nav-contact"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                          >Do what you want ( ͡° ͜ʖ ͡°)</a
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
                              <!-- So god damn broken so I disabled them. If you can fix them, feel free to re-enable -->
                              <div class="row" v-if="false">
                                <!-- The true calendar. The calendar is managed by script -->
                                <div class="card">
                                  <div id="calendar" class="p-4"></div>
                                </div>
                                <!-- Edit/add Event popup -->
                                
                                <div
                                  class="modal fade"
                                  id="modal-new-event"
                                  tabindex="-1"
                                  role="dialog"
                                  aria-labelledby="modal-new-event"
                                  aria-hidden="true"
                                >
                                  <div
                                    class="modal-dialog modal-dialog-centered"
                                    role="document"
                                  >
                                    <form
                                      id="addNewEventForm"
                                      class="modal-content"
                                    >
                                      <div class="modal-body">
                                        <div class="mb-4">
                                          <label for="eventTitle"
                                            >Event title</label
                                          >
                                          <input
                                            type="text"
                                            class="form-control"
                                            id="eventTitle"
                                            required
                                          />
                                        </div>
                                        <div class="row">
                                          <div class="col-12 col-lg-6">
                                            <div class="mb-4">
                                              <label for="dateStart"
                                                >Select start date</label
                                              >
                                              <div class="input-group">
                                                <span class="input-group-text"
                                                  ><span
                                                    class="far fa-calendar-alt"
                                                  ></span
                                                ></span>
                                                <input
                                                  data-datepicker=""
                                                  class="form-control"
                                                  id="dateStart"
                                                  type="text"
                                                  placeholder="dd/mm/yyyy"
                                                  required
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-12 col-lg-6">
                                            <div class="mb-2">
                                              <label for="dateEnd"
                                                >Select end date</label
                                              >
                                              <div class="input-group">
                                                <span class="input-group-text"
                                                  ><span
                                                    class="far fa-calendar-alt"
                                                  ></span
                                                ></span>
                                                <input
                                                  data-datepicker=""
                                                  class="form-control"
                                                  id="dateEnd"
                                                  type="text"
                                                  placeholder="dd/mm/yyyy"
                                                  required
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="modal-footer">
                                        <button
                                          type="submit"
                                          class="btn btn-dark"
                                          id="addNewEvent"
                                        >
                                          Add new event
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-gray-300 ms-auto"
                                          data-bs-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <div
                                  class="modal fade"
                                  id="modal-edit-event"
                                  tabindex="-1"
                                  role="dialog"
                                  aria-labelledby="modal-edit-event"
                                  aria-hidden="true"
                                >
                                  <div
                                    class="modal-dialog modal-dialog-centered"
                                    role="document"
                                  >
                                    <form
                                      id="editEventForm"
                                      class="modal-content"
                                    >
                                      <div class="modal-body">
                                        <div class="mb-4">
                                          <label for="eventTitleEdit"
                                            >Event title</label
                                          >
                                          <input
                                            type="text"
                                            class="form-control"
                                            id="eventTitleEdit"
                                            required
                                          />
                                        </div>
                                        <div class="row">
                                          <div class="col-12 col-lg-6">
                                            <div class="">
                                              <label for="dateStartEdit"
                                                >Select start date</label
                                              >
                                              <div class="input-group">
                                                <span class="input-group-text"
                                                  ><span
                                                    class="far fa-calendar-alt"
                                                  ></span
                                                ></span>
                                                <input
                                                  data-datepicker=""
                                                  class="form-control"
                                                  id="dateStartEdit"
                                                  type="text"
                                                  placeholder="dd/mm/yyyy"
                                                  required
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-12 col-lg-6">
                                            <div class="mb-2">
                                              <label for="dateEndEdit"
                                                >Select end date</label
                                              >
                                              <div class="input-group">
                                                <span class="input-group-text"
                                                  ><span
                                                    class="far fa-calendar-alt"
                                                  ></span
                                                ></span>
                                                <input
                                                  data-datepicker=""
                                                  class="form-control"
                                                  id="dateEndEdit"
                                                  type="text"
                                                  placeholder="dd/mm/yyyy"
                                                  required
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="modal-footer">
                                        <button
                                          type="submit"
                                          class="btn btn-dark me-2"
                                          id="editEvent"
                                        >
                                          Update event
                                        </button>
                                        <button
                                          type="submit"
                                          class="btn btn-danger"
                                          id="deleteEvent"
                                        >
                                          Delete event
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-link text-gray ms-auto"
                                          data-bs-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <!-- End edt/add event popup -->
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
                        <img
                          width="510"
                          height="721"
                          src="@/assets/img/z2358820138055_341c257ff575934f26613727fee0cb8e.jpg"
                          alt="Patra"
                        />
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
  name: "EmployerBooth",
  components: {
    MainContent,
  },
};
</script>

<style scoped>
</style>