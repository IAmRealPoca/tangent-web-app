<template>
  <div>
    <div class="row">
      <div class="col-12 col-xl-4">
        <div class="card border-light shadow-sm components-section mb-4">
          <div class="card-body">
            <CoverLetterVideoRecorder />
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
                          <div class="row">
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
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- / .row -->
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
export default {
  name: "StudentRecordCoverLetter",
  components: {
    CoverLetterVideoRecorder,
  },
  setup() {
    const questionSets = ref([]);
    const fetchQuestionSet = async () => {
      questionSets.value = await questionService.getQuestionSets();
    };

    

    const remainingTimer = ref("");
    let remainingTimerCounter = 14;

    const timerCount = (currCount, maxCount) => {
      
      // remainingTimer.value = "width: " + counter + "%";
      if (currCount > 0) {
        setTimeout(() => {
          currCount--;
          const percetCalc = currCount/maxCount*100;
          remainingTimer.value = "width: " + percetCalc + "%";
          remainingTimerCounter = currCount;
        }, 1000);
      }
    }

    watchEffect(() => {
      timerCount(remainingTimerCounter, 14);
      console.log("remainingTimer: ", remainingTimer.value);
    });

    onMounted(() => {
      fetchQuestionSet();
    });

    return {
      questionSets,
      remainingTimer,
    };
  },
};
</script>

<style scoped>
</style>