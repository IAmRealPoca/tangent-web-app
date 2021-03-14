<template>
  <div>
    <MainContent>
      <main>
        <div class="py-4">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
              <li class="breadcrumb-item">
                <a href="#"><span class="fas fa-home"></span></a>
              </li>
              <li class="breadcrumb-item"><a href="#">Tangent</a></li>
              <li class="breadcrumb-item"><a href="#">Major</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Create major
              </li>
            </ol>
          </nav>
          <div class="d-flex justify-content-between w-100 flex-wrap">
            <div class="mb-3 mb-lg-0">
              <h1 class="h4">Create major</h1>
              <p class="mb-0">Create new major</p>
            </div>
            <div>
              <a href="#" class="btn btn-outline-gray"
                ><i class="far fa-question-circle me-1"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-12 mb-4">
            <div class="row mb-4">
              <div class="col-lg-2 col-sm-6"></div>
              <div class="col-lg-8 col-sm-6">
                <div
                  class="card border-light shadow-sm components-section px-5 py-3"
                >
                  <div class="card-body">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Major Name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        v-model="newMajorData.majorName"
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                        >Employee IDs</label
                      >
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        v-model="newMajorData.employeeIds"
                      ></textarea>
                    </div>
                    <div class="mb-3">
                      <button
                        class="btn w-100 btn-primary"
                        type="button"
                        @click="handleAddButton"
                      >
                        Create major
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
import { useMajorService } from "@/util/service/majorService.js";

export default {
  name: "SchoolCreateMajor",
  components: {
    MainContent,
  },
  setup() {
    const newMajorData = ref({});
    const majorService = useMajorService();

    const handleAddButton = () => {
      majorService.createMajor(newMajorData.value);
    };

    return {
      newMajorData,

      handleAddButton,
    };
  },
};
</script>

<style>
</style>