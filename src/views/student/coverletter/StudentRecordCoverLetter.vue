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
              <span class="h5">{{ questionSet.setName }}</span>
              <div
                v-for="question in questionSet.questions"
                :key="question.questionId"
              >
                <div>{{ question.questionContent }}</div>
                <div>{{ question.questionTime }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
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

    onMounted(() => {
      fetchQuestionSet();
    });

    return {
      questionSets,
    };
  },
};
</script>

<style scoped>
</style>