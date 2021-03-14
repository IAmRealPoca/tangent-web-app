<template>
  <div>
    <MainContent>
      <main>
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
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                        >Employee IDs</label
                      >
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="mb-3">
                      <button
                        class="btn w-100 btn-primary"
                        type="button"
                        @click="handleAddButton"
                      >
                        Add students
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
import { useRoute } from "vue-router";
import MainContent from "@/components/MainContent.vue";
import { useMajorService } from "@/util/service/majorService.js";

export default {
  name: "SchoolAddStudentToMajor",
  components: {
    MainContent,
  },
  setup() {
    const newStudentIds = ref([]);
    const route = useRoute();
    const majorService = useMajorService();
    const majorIdFromRoute = Number(route.params.majorId);
    
    const handleAddButton = () => {
      majorService.addStudentToMajor(majorIdFromRoute, newStudentIds.value);
    }

    return {
      newStudentIds,

      handleAddButton,
    }
  }
};
</script>

<style scoped>
</style>