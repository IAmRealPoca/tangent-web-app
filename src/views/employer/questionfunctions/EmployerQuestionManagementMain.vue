<template>
  <div>
    <MainContent>
      <main>
        <div class="row">
          <div class="mb-2" v-if="skills.length > 0">
            <div
              class="card border-light shadow-sm components-section px-5 py-0"
            >
              <div class="card-body">
                <label class="my-0 me-2" for="state">Skill:</label>
                <select
                  id="state"
                  class="w-100 form-select"
                  name="state"
                  v-model="skillSelected"
                  @change="onSkillChange(skillSelected.skillId)"
                >
                  <option
                    v-for="(skill, index) in skills"
                    :key="index"
                    :value="{
                      skillId: skill.skillId,
                      skillNme: skill.skillName,
                    }"
                  >
                    {{ skill.skillName }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-lg-4 col-sm-6">
            <div
              class="card border-light shadow-sm components-section px-5 py-3"
            >
              <div class="card-body">
                <button
                  class="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#new-set-modal-form"
                >
                  New Set
                </button>
                <div
                  class="modal fade"
                  id="new-set-modal-form"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="new-set-modal-form"
                  aria-hidden="true"
                >
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
                            <h2 class="h4">Create question set</h2>
                          </div>
                          <div class="card-body p-0 pl-lg-3">
                            <form action="#" class="mt-4">
                              <!-- Form -->
                              <div class="form-group mb-4">
                                <label for="booth_name">Set Name</label>
                                <div class="input-group">
                                  <span
                                    class="input-group-text"
                                    id="basic-addon1"
                                    ><span class="fas fa-signature"></span
                                  ></span>
                                  <input
                                    type="text"
                                    v-model="newQuestionSet.setName"
                                    class="form-control"
                                    placeholder="Title"
                                    id="booth_name"
                                    required
                                  />
                                </div>
                              </div>
                              <!-- End of Form -->

                              <div class="d-grid">
                                <button
                                  type="submit"
                                  @click="handleCreateQuestionSet"
                                  data-bs-dismiss="modal"
                                  class="btn btn-info"
                                >
                                  Create
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom"
                    v-for="questionSet in skillFilteredQuestionSets"
                    :key="questionSet.setId"
                  >
                    <div @click="handleQuestionSetClick(questionSet)">
                      <div>{{ questionSet.setName }}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-sm-6" v-if="Object.keys(questionSetSelected).length > 0">
            <div
              class="card border-light shadow-sm components-section px-5 py-3"
            >
              <div class="card-body">
                <button
                  class="btn btn-dark"
                  data-bs-toggle="modal"
                  :data-bs-target="
                    '#new-question-modal-form-' + questionSetSelected.setId
                  "
                >
                  New question
                </button>
                <div
                  class="modal fade"
                  :id="'new-question-modal-form-' + questionSetSelected.setId"
                  tabindex="-1"
                  role="dialog"
                  :aria-labelledby="
                    'new-question-modal-form-' + questionSetSelected.setId
                  "
                  aria-hidden="true"
                >
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
                            <h2 class="h4">Create question</h2>
                          </div>
                          <div class="card-body p-0 pl-lg-3">
                            <form action="#" class="mt-4">
                              <!-- Form -->
                              <div class="form-group mb-4">
                                <label for="booth_name">Question Content</label>
                                <div class="input-group">
                                  <span
                                    class="input-group-text"
                                    id="basic-addon1"
                                    ><span class="fas fa-signature"></span
                                  ></span>
                                  <input
                                    type="text"
                                    v-model="newQuestion.questionContent"
                                    class="form-control"
                                    placeholder="Title"
                                    id="booth_name"
                                    required
                                  />
                                </div>
                              </div>
                              <!-- End of Form -->
                              <!-- Form -->
                              <div class="form-group mb-4">
                                <label for="question_name">Question Time</label>
                                <div class="input-group">
                                  <span
                                    class="input-group-text"
                                    id="basic-addon1"
                                    ><span class="fas fa-signature"></span
                                  ></span>
                                  <input
                                    type="number"
                                    min="0"
                                    v-model="newQuestion.questionTime"
                                    class="form-control"
                                    placeholder="Title"
                                    id="question_name"
                                    required
                                  />
                                </div>
                              </div>
                              <!-- End of Form -->
                              <div class="d-grid">
                                <button
                                  type="submit"
                                  @click="handleCreateQuestion"
                                  data-bs-dismiss="modal"
                                  class="btn btn-info"
                                >
                                  Create
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom"
                    v-for="question in questions"
                    :key="question.questionId"
                  >
                    <div class="row align-item-center">
                      <div v-if="!editMode">
                        <div>
                          <h3 class="h6 mb-1">
                            {{ question.questionContent }}
                          </h3>
                          <p class="small pe-4">{{ question.questionTime }}</p>
                        </div>
                        <!-- <div class="col-lg-2 col-sm-6">
                          <button class="btn btn-dark" @click="editMode = true">
                            Edit
                          </button>
                          <button class="btn btn-danger">Delete</button>
                        </div> -->
                      </div>
                      <div v-else>
                        <textarea
                          class="form-control"
                          rows="3"
                          v-model="question.questionContent"
                        ></textarea>
                        <input
                          type="text"
                          class="form-control"
                          v-model="question.questionTime"
                        />
                        <button class="btn btn-dark" @click="editMode = false">
                          Done
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
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
import MainContent from "@/components/MainContent.vue";
import * as skillService from "@/util/service/skillService.js";
import * as questionService from "@/util/service/questionService.js";

export default {
  name: "EmployerQuestionManagementMain",
  components: {
    MainContent,
  },
  setup() {
    const skills = ref([]);
    const questionSets = ref([]);
    const skillFilteredQuestionSets = ref([]);
    const skillSelected = ref();
    const questions = ref([]);
    const editMode = ref(false);

    const questionSetSelected = ref({});
    const newQuestion = ref({
      questionContent: "",
      questionTime: questionSetSelected.value.setId,
    });

    const newQuestionSet = ref({
      setName: "",
      skillsId: skillSelected.skillId,
    });

    const handleQuestionSetClick = (questionSet) => {
      questionSetSelected.value = questionSet;
      questions.value = questionSet.questions;
    };

    const fetchSkills = async () => {
      skills.value = await skillService.getListOfSkills();
    };

    const fetchQuestions = async () => {
      questionSets.value = await questionService.getQuestionSets();
      skillFilteredQuestionSets.value = questionSets.value;
    };

    const initialFetch = async () => {
      fetchSkills();
      fetchQuestions();
    };

    const onSkillChange = async (skillId) => {
      skillFilteredQuestionSets.value = questionSets.value.filter(e => e.skillId === skillId);
    };

    const handleCreateQuestionSet = async () => {
      const payload = {
        setName: newQuestionSet.value.setName,
        skillsId: skillSelected.value.skillId,
      };
      await questionService.createQuestionSet(payload);
      initialFetch();
    };

    const handleCreateQuestion = async () => {
      const payload = {
        questionContent: newQuestion.value.questionContent,
        questionTime: newQuestion.value.questionTime,
        setId: questionSetSelected.value.setId,
      };
      await questionService.createQuestion(payload.setId, payload);
initialFetch();
    };

    onMounted(() => {
      initialFetch();
    });
    return {
      skills,
      skillSelected,
      questionSetSelected,
      skillFilteredQuestionSets,
      questionSets,
      questions,
      editMode,
      newQuestionSet,
      newQuestion,

onSkillChange,
      handleQuestionSetClick,
      handleCreateQuestionSet,
      handleCreateQuestion,
    };
  },
};
</script>

<style scoped>
</style>