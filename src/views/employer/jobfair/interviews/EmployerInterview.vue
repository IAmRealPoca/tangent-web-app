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
                    <input type="text" class="form-control" v-model="newInterviewData.interviewName"/>
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

                    <div class="input-group">
                      <div class="mb-3">
                        <div class="input-group">
                          <span class="input-group-text">
                            <span class="far fa-calendar-alt"> </span>
                          </span>
                          <flat-pickr
                            :disabled="
                              availableTimeModeSelected !== 'onlySelectedDate'
                            "
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
                    <label>Start Time</label><br />
                    <label class="text-gray-500">Your availability time</label>
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
                    <label>Buffer start</label>
                    <input
                      type="number"
                      min="1"
                      class="form-control"
                      placeholder="minutes"
                    />
                  </div>
                  <div class="mb-3">
                    <label>Buffer end</label>
                    <input
                      type="number"
                      min="1"
                      class="form-control"
                      placeholder="minutes"
                    />
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
import { useJobFairService } from "@/util/service/jobFairService.js";
import { useBoothService } from "@/util/service/boothService.js";

export default {
  name: "EmployerInterview",
  components: {
    MainContent,
    flatPickr,
  },
  setup() {
    const route = useRoute();
    const jobFairService = useJobFairService();
    const interviewService = useInterviewService();
    const boothService = useBoothService();
    const jobFairDetail = ref({});
    const boothDetail = ref({});
    const fetchCurrentJobFairAndBooth = async () => {
      jobFairDetail.value = await jobFairService.getFair(
        Number(route.params.jobFairId)
      );
      boothDetail.value = await boothService.getBoothById(
        Number(route.params.boothId)
      );
    };

    const newInterviewData = ref({});
    const handleCreateInterview = async () => {
      const payload = {
        interviewName: newInterviewData.interviewName,
        boothId: Number(route.params.boothId),
        availableTimes: [
          {
            startTime: "2021-04-05T07:00:00.000Z",
            endTime: "2021-04-05T18:00:00.000Z",
          },
          {
            startTime: "2021-04-06T10:00:00.000Z",
            endTime: "2021-04-06T12:00:00.000Z",
          },
        ],
        interviewDuration: 15,
        bufferStart: 2,
        bufferEnd: 5,
        delayBetweenInterview: 5,
      };

      interviewService.createInterview();
    };

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
          from: jobFairDetail.value.startDate,
          to: jobFairDetail.value.endDate,
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
    // setInterval(() => {
    //   console.log(dateTimeTest.value);
    // }, 1000);

    const interviewList = ref([]);

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
      newInterviewData,
      dateTimeTest,
    };
  },
};
</script>

<style scoped>
</style>