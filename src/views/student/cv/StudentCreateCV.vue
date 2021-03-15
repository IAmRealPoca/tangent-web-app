<template>
  <div>
    <MainContent>
      <main>
        <!-- Begin breadcrumb -->
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
        >
          <div class="d-block mb-4 mb-md-0">
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
              <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
                <li class="breadcrumb-item">
                  <a href="#"><span class="fas fa-home"></span></a>
                </li>
                <li class="breadcrumb-item"><a href="#">Tangent</a></li>
                <li class="breadcrumb-item"><a href="#">School</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Majors
                </li>
              </ol>
            </nav>
            <h2 class="h4">Majors</h2>
            <p class="mb-0">Your school's all majors.</p>
          </div>
          <div class="btn-toolbar">
            <a class="btn btn-sm btn-dark me-2" @click="handleNewMajorClick"
              ><span class="fas fa-plus me-2"></span> New major
            </a>

            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-primary">
                Export
              </button>
            </div>
          </div>
        </div>
        <!-- End breadcrumb -->
        <div class="row justify-content-between">
          <div class="col-12 mb-4">
            <div class="row mb-4">
              <div class="col-lg-2 col-sm-6"></div>
              <div class="col-lg-8 col-sm-6">
                <div
                  class="card border-light shadow-sm components-section px-5 py-3"
                >
                  <div class="card-body">
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-body p-0">
                          <div class="card border-light p-3 p-lg-4">
                            <button
                              type="button"
                              class="btn-close ms-auto"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                            <div class="card-header border-0 text-center pb-0">
                              <h2 class="h4">Create Job Fair</h2>
                            </div>
                            <div class="card-body p-0 pl-lg-3">
                              <form action="#" class="mt-4">
                                <!-- Form -->
                                <div class="form-group mb-4">
                                  <label for="booth_name">Job Fair Name</label>
                                  <div class="input-group">
                                    <span
                                      class="input-group-text"
                                      id="basic-addon1"
                                      ><span class="fas fa-signature"></span
                                    ></span>
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="jobFair.jobFairName"
                                      placeholder="Your Fantasic Title"
                                      id="booth_name"
                                      required
                                    />
                                  </div>
                                </div>
                                <!-- End of Form -->
                                <div class="form-group mb-4">
                                  <label for="booth_name"
                                    >Job Fair Thumbnail</label
                                  >
                                  <div class="input-group">
                                    <div class="mb-3">
                                      <input
                                        class="form-control"
                                        ref="thumbnail"
                                        @change="handleFileUpload"
                                        id="booth_thumbnail"
                                        type="file"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <!-- Date -->
                                <div class="form-group mb-4">
                                  <label for="booth_name">Start Date</label>
                                  <div class="input-group">
                                    <div class="mb-3">
                                      <div class="input-group">
                                        <span class="input-group-text"
                                          ><span
                                            class="far fa-calendar-alt"
                                          ></span
                                        ></span>
                                        <flat-pickr
                                          v-model="jobFair.startDate"
                                          :config="config"
                                          class="form-control"
                                          placeholder="Select date"
                                          name="date"
                                        >
                                        </flat-pickr>
                                        <!-- <input
                                data-datepicker=""
                                class="form-control"
                                id="dateEnd"
                                type="text"
                                placeholder="dd/mm/yyyy"
                                v-model="jobFair.startDate"
                                required
                              /> -->
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <!-- End Date -->
                                <!-- Form -->
                                <div class="form-group">
                                  <div class="form-group mb-4">
                                    <label for="booth_description"
                                      >Job Fair Description</label
                                    >
                                    <div class="input-group">
                                      <textarea
                                        class="form-control"
                                        v-model="jobFair.JobFairDescription"
                                        id="booth_description"
                                        rows="3"
                                        style="resize: none"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <!-- End of Form -->
                                </div>
                                <div class="d-grid">
                                  <button
                                    type="submit"
                                    @click.prevent="handleCreate"
                                    data-bs-dismiss="modal"
                                    class="btn btn-info"
                                  >
                                    Create!
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <button
                        class="btn w-100 btn-primary"
                        type="button"
                        @click="handleAddButton"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6"></div>
            </div>
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import MainContent from "@/components/MainContent.vue";
export default {
  name: "StudentCreateCV",
  components: {
    MainContent,
  },
  setup() {
    const jobFair = ref({});
    return {
      jobFair,
    }
  }
};
</script>

<style scoped>
</style>