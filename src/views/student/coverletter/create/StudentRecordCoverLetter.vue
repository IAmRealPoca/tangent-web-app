<template>
  <div>
    <div class="row">
      <div class="col-12 col-xl-4">
        <div class="card border-light shadow-sm components-section mb-4">
          <div class="card-body">
            <!-- <CoverLetterVideoRecorder /> -->
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-8">
        <div class="card border-light shadow-sm components-section mb-4">
          <div class="card-body">
            <div v-for="questionSet in questionSets" :key="questionSet.setId">
              <div class="row">
                <div class="col-12 mb-4">
                  <div class="card shadow-sm">
                    <div
                      class="card-header d-flex align-items-center border-bottom border-gray-300"
                    >
                      <h3 class="h5 mb-0">Notification Timeline</h3>
                      <div class="ms-auto">
                        <a class="text-primary fw-bold" href="#">View all</a>
                      </div>
                    </div>
                    <div class="card-body">
                      <div
                        class="list-group list-group-flush list-group-timeline"
                      >
                        <div
                          class="list-group-item"
                          v-for="(question, index) in questionSet.questions"
                          :key="question.questionId"
                        >
                        <!-- active question -->
                          <div class="row" v-if="activeQuestionId===question.questionId">
                            <div class="col-auto">
                              <div
                                class="icon icon-shape icon-sm bg-tertiary text-white rounded-circle"
                              >
                                <span class="fas fa-envelope-open-text"></span>
                              </div>
                            </div>

                            <div class="col ms-n2">
                              <div class="col">
                                <div class="progress-wrapper">
                                  <div class="progress-info">
                                    <div class="h6 mb-0">
                                      <span class="badge bg-success py-1 mb-2"
                                        >Question {{ index + 1 }}</span
                                      >
                                      <p class="text-dark fw-bold mb-1">
                                        {{ question.questionContent }}
                                      </p>
                                      <!-- Time -->
                                      <small class="text-gray">
                                        <span class="fas fa-clock me-2"></span
                                        >{{ question.questionTime }}
                                      </small>
                                      <div class="small fw-bold text-dark"><span>{{ question.questionTime }}</span></div>
                                    </div>
                                  </div>
                                  <div class="progress mb-0">
                                    <div
                                      class="progress-bar bg-danger"
                                      role="progressbar"
                                      aria-valuenow="20"
                                      aria-valuemin="0"
                                      :aria-valuemax="question.questionTime"
                                      :style="remainingTimer"
                                    ></div>
                                  </div>
                                  
                                  <!-- <div class="progress mb-0" v-else>
                                    <div
                                      class="progress-bar bg-danger"
                                      role="progressbar"
                                      aria-valuenow="20"
                                      aria-valuemin="0"
                                      :aria-valuemax="question.questionTime"
                                      style="width: 100%"
                                    ></div>
                                  </div> -->
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- end active question -->

                          <!-- inactive question -->
                          <div class="row" v-else>
                            <div class="col-auto">
                              <div
                                class="icon icon-shape icon-sm bg-gray-500 text-white rounded-circle"
                              >
                                <span class="fas fa-envelope-close-text"></span>
                              </div>
                            </div>

                            <div class="col ms-n2">
                              <div class="col">
                                <div class="progress-wrapper">
                                  
                                  <div class="progress-info">
                                    <div class="h6 mb-0">
                                      <span class="badge bg-gray-500 py-1 mb-2"
                                        >Question {{ index + 1 }}</span
                                      >
                                      <p class="text-dark fw-bold mb-1">
                                        {{ question.questionContent }}
                                      </p>
                                      <!-- Time -->
                                      <small class="text-gray">
                                        <span class="fas fa-clock me-2"></span
                                        >{{ question.questionTime }}
                                      </small>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- end inactive question -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <span class="h5">{{ questionSet.setName }}</span>
              <div
                v-for="question in questionSet.questions"
                :key="question.questionId"
              >
                <div>{{ question.questionContent }}</div>
                <div>{{ question.questionTime }}</div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watchEffect } from "vue";
import CoverLetterVideoRecorder from "@/components/CoverLetterVideoRecorder.vue";
import * as questionService from "@/util/service/questionService.js";
import _ from "lodash";
export default {
  name: "StudentRecordCoverLetter",
  components: {
    CoverLetterVideoRecorder,
  },
  setup() {
    // const questionSets = ref([]);
    // const fetchQuestionSet = async () => {
    //   questionSets.value = await questionService.getQuestionSets();
    // };

    const questionSets = ref([
      {
        setId: 1,
        setName: "Test set",
        modified: "2021-03-27T08:19:47.909Z",
        questions: [
          {
            questionId: 1,
            questionContent: "How to pass this cap?",
            questionTime: 8,
            dispOrder: 0,
            modified: "2021-03-27T08:19:47.909Z",
          },
          {
            questionId: 2,
            questionContent:
              "Can Tangent team pass this capstone? Calculate pass chance.",
            questionTime: 12,
            dispOrder: 0,
            modified: "2021-03-27T08:19:47.909Z",
          },
        ],
      },
    ]);

    const remainingTimer = ref("");
    const remainingTimerCount = ref(0);

    // const timerCount = (currCount, maxCount) => {
    //   // remainingTimer.value = "width: " + counter + "%";
    //   if (currCount > 0) {
    //     setTimeout(() => {
    //       currCount--;
    //       const percetCalc = (currCount / maxCount) * 100;
    //       remainingTimer.value = "width: " + percetCalc + "%";
    //       remainingTimerCounter = currCount;
    //     }, 1000);
    //   }
    // };
    const activeQuestionId = ref(0);
    const answeredQuestionIds = ref([]);
    const delayer = ms => new Promise(res => setTimeout(res, ms)); //delay single line 
    const questionLooper = async (questions) => {
      const realQuestions = questions[0].questions;
      
      for (var i = 0; i < realQuestions.length; i++) {
        activeQuestionId.value = realQuestions[i].questionId; //check active questionId to gray out or green-out question element in UI
        let currCount = realQuestions[i].questionTime; //current time, reset each question loop
        const maxCount = realQuestions[i].questionTime;//max time count, reset each question loop
        remainingTimerCount.value = maxCount; //variable to display remaining time in number
        console.log("maxCount: ", maxCount);
        console.log("currCount: ", currCount);
        console.log("activeQuestionId: ", activeQuestionId.value);
        await delayer(5*1000);
        const questionCounterInterval = setInterval(() => {
          const percentCalc = (currCount / maxCount) * 100;
          remainingTimer.value = "width: " + percentCalc + "%";
          currCount--;
          remainingTimerCount.value = currCount;
          console.log("remainingTimer: ", remainingTimer.value);
        }, 1000);
        setTimeout(() => {
          clearInterval(questionCounterInterval);
          console.log("question counter stopped");
        }, maxCount*1000 + 2*1000);
        await delayer(maxCount*1000 + 2*1000);
        answeredQuestionIds.value.push(realQuestions[i].questionId);
      }
    };

    const answeredQuestionIdChecker = (array, questionIdToFind) => {
      return _.some(array, questionIdToFind);
    }

    watchEffect(() => {
      // timerCount(remainingTimerCounter, 14);
      // questionLooper(questionSets.value);
    });

    onMounted(() => {
      // fetchQuestionSet();
      questionLooper(questionSets.value);
    });

    return {
      questionSets,
      remainingTimer,
      activeQuestionId,
      answeredQuestionIds,

      answeredQuestionIdChecker
    };
  },
};
</script>

<style scoped>
</style>