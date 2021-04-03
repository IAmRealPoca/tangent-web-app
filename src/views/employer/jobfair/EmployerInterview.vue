<template>
  <div>
    <MainContent>
      <main>
        <div class="py-2">
          <div class="d-flex justify-content-between w-100 flex-wrap">
            <div class="mb-3 mb-lg-0">
              <h1 class="h4">Create job</h1>
              <p class="mb-0">Create new job</p>
            </div>
            <div>
              <a href="#" class="btn btn-outline-gray"
              ><i class="far fa-question-circle me-1"></i> Forms Docs</a
              >
            </div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-12">
            <label>Name</label>
            <input type="text"/>
            <label>Start Time</label>
            <div class="mb-2 input-group">
              <div class="input-group">
                <div class="mb-3">
                  <div class="input-group">
                              <span class="input-group-text"
                              ><span class="far fa-calendar-alt"></span
                              ></span>
                    <flat-pickr
                        :config="flatpickrConfig"
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
            <label>End Time</label>
            <div class="mb-2 input-group">
              <div class="input-group">
                <div class="mb-3">
                  <div class="input-group">
                              <span class="input-group-text"
                              ><span class="far fa-calendar-alt"></span
                              ></span>
                    <flat-pickr
                        v-model="dateTimeTest"
                        :config="flatpickrConfig"
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
            <label>Duration for each interview</label>
            <input type="number" min="1"/>
            <label>Delay between interview</label>
            <input type="number" min="1"/>
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/dark.css";
import {useRoute} from "vue-router";
import MainContent from "@/components/MainContent.vue";
import {useInterviewService} from "@/util/service/interviewService.js";

export default {
  name: "EmployerInterview",
  components: {
    MainContent,
    flatPickr,
  },
  setup() {
    const route = useRoute();
    const flatpickrConfig = {
      wrap: true,
      
      altInput: true,
      minDate: Date.parse(new Date().toLocaleDateString()),
      timeFormat: "H:i",

      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      time_24hr: true
    };
    const interviewList = ref([]);
    const interviewService = useInterviewService();
    const fetchInterviews = async () => {
      interviewList.value = await interviewService.getInterviews();
    };
    const dateTimeTest = ref();

    onMounted(() => {
      fetchInterviews();
    });

    return {
      interviewList,
      flatpickrConfig,
      dateTimeTest,
    };
  },
};
</script>

<style scoped>
</style>