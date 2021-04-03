<template>
  <div>
    <MainContent>
      <main>
        <div class="py-2">
          <div class="d-flex justify-content-between w-100 flex-wrap">
            <div class="mb-3 mb-lg-0">
              <h1 class="h4">Interview Setting</h1>
              <p class="mb-0"></p>
            </div>
            <div>
              <a href="#" class="btn btn-outline-gray"
                ><i class="far fa-question-circle me-1"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-12">
            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-body">
                <div class="">
                  <div class="mb-3">
                    <label>Name</label>
                    <input type="text" class="form-control"/>
                  </div>
                  <div class="mb-3">
                    <label>When can student book interview?</label>
                    <div
                      class="form-check"
                      v-for="(mode, index) in availableTimeMode"
                      :key="index"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        :id="mode.id"
                        :value="mode.id"
                        v-model="availableTimeModeSelected"
                      />
                      <label class="form-check-label" :for="mode.id">
                        {{ mode.text }}
                      </label>
                    </div>

                    <div class="input-group" >
                      <div class="mb-3">
                        <div class="input-group">
                          <span class="input-group-text">
                            <span class="far fa-calendar-alt"> </span>
                          </span>
                          <flat-pickr
                            :disabled="availableTimeModeSelected !== 'onlySelectedDate'"
                            :config="studentBookTimeConfig"
                            class="form-control"
                            placeholder="Select date"
                            name="date"
                          ></flat-pickr>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
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
                  </div>
                  <div class="mb-3">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label>Duration for each interview</label>
                    <input type="number" min="1" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label>Delay between interview</label>
                    <input type="number" min="1" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <button class="btn btn-dark">Confirm</button>
                    <button class="btn btn-secondary">Cancel</button>
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
import { ref, onMounted } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/dark.css";
import { useRoute } from "vue-router";
import MainContent from "@/components/MainContent.vue";
import { useInterviewService } from "@/util/service/interviewService.js";

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
      time_24hr: true,
    };

    const studentBookTimeConfig = {
      wrap: true,
      altInput: true,
      mode: "multiple",
      enable: [
        {
          from: "2021-04-04",
          to: "2021-04-06",
        },
      ],
    };

    const ALL_DURING_FAIR_MODE = "allDuringFair";
    const ONLY_SELECTED_DATE_MODE = "onlySelectedDate";
    const availableTimeMode = [
      {
        id: ALL_DURING_FAIR_MODE,
        text: "All date during the fair",
      },
      {
        id: ONLY_SELECTED_DATE_MODE,
        text: "Only selected date",
      },
    ];
    const availableTimeModeSelected = ref();
    setInterval(() => {
      console.log(availableTimeModeSelected.value);
    }, 1000);

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
      studentBookTimeConfig,
      flatpickrConfig,
      availableTimeMode,
      availableTimeModeSelected,
      dateTimeTest,
    };
  },
};
</script>

<style scoped>
</style>