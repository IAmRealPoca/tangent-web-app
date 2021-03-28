<template>
  <div>
    <MainContent>
      <main>
        <!-- Begin breadcrumb -->
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-2"
        >
          <div class="d-block mb-4 mb-md-0">
            <h2 class="h4">Majors</h2>
            <p class="mb-0">Your school's all majors.</p>
          </div>
          <div class="btn-toolbar">
            <a class="btn btn-sm btn-dark me-2" @click="handleNewMajorClick">
              <span class="fas fa-plus me-2"></span>
              New major
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
                    <form action="#" class="mt-4">
                      <!-- Form -->
                      <div class="form-group mb-4">
                        <label for="booth_name">CV </label>
                        <div class="input-group">
                          <span class="input-group-text" id="basic-addon1"
                            ><span class="fas fa-signature"></span
                          ></span>
                          <input
                            type="text"
                            class="form-control"
                            v-model="jobFair.title"
                            placeholder="CV Title"
                            id="booth_name"
                            required
                          />
                        </div>
                      </div>
                      <!-- End of Form -->
                      <!-- <div class="form-group mb-4">
                        <label for="booth_name">CV File</label>
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
                      </div> -->
                      <!-- Date -->

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
              <div class="col-lg-2 col-sm-6"></div>
            </div>
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import MainContent from "@/components/MainContent.vue";
import * as employeeService from "@/util/service/employeeService.js";
export default {
  name: "StudentCreateCV",
  components: {
    MainContent,
  },
  setup() {
    const newJobData = ref({});

    const thumbnail = ref(null);
    const jobFair = reactive({
      title: "",
    });

    const file = ref({});

    const handleFileUpload = async (evt) => {
      const files = thumbnail.value.files[0];
      console.log(thumbnail.value.files[0]);
      file.value = files;
    };

    const handleCreate = async (e) => {
      console.log("jobfair: ", jobFair);
      // let formData = new FormData();
      // formData.append("file", file.value, "abcdefghijklmnopqrstuvwxyz");
      // formData.append("newCvParam", JSON.stringify(jobFair));

      // console.warn(...formData);

      // let status = await employeeService.uploadCVFile(formData);
      const payload = {
        title: jobFair.title,
      };
      console.log("payload: ", payload);
      await employeeService.createCV(payload);
      // if (status) {
      //   await fetchListJF();
      // }
      // isCreated.value = true;
    };

    return {
      jobFair,
      newJobData,
      handleCreate,
      handleFileUpload,
    };
  },
};
</script>

<style scoped></style>
