<template>
  <div>
    <MainContent>
      <div class="py-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li class="breadcrumb-item">
              <a href="#"><span class="fas fa-home"></span></a>
            </li>
            <li class="breadcrumb-item"><a href="#">Components</a></li>
            <li class="breadcrumb-item active" aria-current="page">Forms</li>
          </ol>
        </nav>
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
                      >Job title</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      v-model="newJobData.title"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Job description</label
                    >
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      v-model="newJobData.jobDescription"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Job benefit</label
                    >
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      v-model="newJobData.jobBenefit"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Job requirement</label
                    >
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      v-model="newJobData.jobRequirement"
                    ></textarea>
                  </div>
                  <div class="mb-2" v-if="skills.length > 0">
                    <label class="my-1 me-2" for="state">Skill:</label>
                    <select id="state" class="w-100 form-select" name="state" v-model="skillSelected">
                      <option
                        v-for="(location, index) in skills"
                        :key="index"
                        :value="{ skillId: location.skillId, skillName: location.skillName }"
                      >
                        {{ location.skillName }}
                      </option>
                    </select>
                  </div>
                  <div class="mb-2" v-if="skills.length <= 0">
                    <label for="state" class="my-1 me-2">Skill:</label>
                  </div>
                  <div class="row">
                    <div class="col-4 mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Expected numbers of applicants</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        v-model="newJobData.expectedNumber"
                        min="0"
                        @keyup="preventNegativeNumInputListener($event)"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Address</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      v-model="newJobData.address"
                    />
                  </div>
                  <div class="mb-2">
                    <label class="my-1 me-2" for="state">Location:</label>
                    <select id="state" class="w-100 form-select" name="state" v-model="locationSelected">
                      <option
                        v-for="(location, index) in vnLocation"
                        :key="index"
                        :value="{ locValue: location.value, locTitle: location.title }"
                      >
                        {{ location.title }}
                      </option>
                    </select>
                  </div>
                  <div class="row">
                    <div class="col-10 mb-4">
                      <div class="row">
                        <div class="col-lg-5 col-sm-6">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Min salary</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            id="exampleFormControlInput1"
                            v-model="newJobData.minSalary"
                            min="0"
                          />
                          <p>.000đ</p>
                        </div>
                        <div class="col-lg-5 col-sm-6">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Max salary</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            id="exampleFormControlInput1"
                            v-model="newJobData.maxSalary"
                            min="0"
                          />
                          <p>.000đ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <label for="birthday">Due date</label>
                  <div class="mb-2 input-group">
                    <div class="input-group">
                          <div class="mb-3">
                            <div class="input-group">
                              <span class="input-group-text"
                                ><span class="far fa-calendar-alt"></span
                              ></span>
                              <flat-pickr
                                v-model="newJobData.dueDate"
                                :config="config"
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
                  <div class="mb-3">
                    <button
                      class="btn w-100 btn-primary"
                      type="button"
                      @click="handleAddButton"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6"></div>
          </div>
        </div>
      </div>
    </MainContent>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/dark.css";
import MainContent from "@/components/MainContent.vue";
import * as recruitmentPostService from "@/util/service/recruitmentPostService";
import * as skillService from "@/util/service/skillService";
import { useRouter } from 'vue-router';

export default {
  name: "EmployerCreateJob",
  components: {
    MainContent,
    flatPickr
  },
  setup() {
    const preventNegativeNumInputListener = (e) => {
      if (
        !(
          (e.keyCode > 95 && e.keyCode < 106) ||
          (e.keyCode > 47 && e.keyCode < 58) ||
          e.keyCode == 8
        )
      ) {
        newJobData.value.expectedNumber = 0;
      }
    };


    const router = useRouter();

    const locationSelected = ref({});
    const skillSelected = ref({});

    const skills = ref([]);
    const fetchSkillList = () => {
      skillService.getListOfSkills().then((resp) => {
        skills.value = resp;
      });
    };
    const vnLocation = ref([
      {
        value: "HANOI",
        title: "Ha Noi",
      },
      {
        value: "HCM",
        title: "Ho Chi Minh City",
      },
      {
        value: "BIENHOA-DONGNAI",
        title: "Bien Hoa, Dong Nai",
      },
      {
        value: "MYTHO",
        title: "My Tho, Ben Tre",
      },
      {
        value: "THUDAUMOT",
        title: "Thu Dau Mot, Binh Duong",
      },
      {
        value: "RACHGIA",
        title: "Rach Gia, Kien Giang",
      },
    ]);

    const newJobData = ref({});

    const handleAddButton = () => {
      console.log(newJobData.value.dueDate);
      newJobData.value = {
        ...newJobData.value,
        "skillId": skillSelected.value.skillId,
        "location": newJobData.value.address.concat("; ", locationSelected.value.locTitle),
      };
      recruitmentPostService.postNewJob(newJobData.value);
      console.log(newJobData.value);
      router.push("/employer/jobs");
    };

    onMounted(() => {
      fetchSkillList();
    });

    return {
      newJobData,
      vnLocation,
      skills,
      locationSelected,
      skillSelected,

      handleAddButton,
      preventNegativeNumInputListener,
    };
  },
};
</script>

<style scoped>
</style>