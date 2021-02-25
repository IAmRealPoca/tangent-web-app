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
            <a
              href="#"
              class="btn btn-outline-gray"
              ><i class="far fa-question-circle me-1"></i> Forms Docs</a
            >
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-12 mb-4">
          <div class="card border-light shadow-sm components-section">
            <div class="card-body">
              <div class="row mb-4">
                <div class="col-lg-3 col-sm-6"></div>
                <div class="col-lg-6 col-sm-6">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Company Id</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      v-model="newJobData.companyId"
                    />
                  </div>

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
                      v-model="newJobData.location"
                    />
                  </div>
                  <div class="mb-2">
                    <label class="my-1 me-2" for="state">Location:</label>
                    <select id="state" class="w-100" name="state">
                      <option
                        v-for="(location, index) in vnLocation"
                        :key="index"
                        :value="location.value"
                      >
                        {{ location.title }}
                      </option>
                    </select>
                  </div>
                  <div class="row">
                    <div class="col-10 mb-4">
                      <div class="row">
                        <div class="col-lg-5 col-sm-6">
                          <label for="exampleFormControlInput1" class="form-label"
                            >Min salary</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            id="exampleFormControlInput1"
                            v-model="newJobData.minSalary"
                          /><p>.000đ</p>
                        </div>
                        <div class="col-lg-5 col-sm-6">
                          <label for="exampleFormControlInput1" class="form-label"
                            >Max salary</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            id="exampleFormControlInput1"
                            v-model="newJobData.maxSalary"
                          /><p>.000đ</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <label for="birthday">Due date</label>
                  <div class="mb-2 input-group">
                    <span class="input-group-text"
                      ><span class="far fa-calendar-alt"></span
                    ></span>
                    <input
                      data-datepicker=""
                      class="form-control"
                      id="birthday"
                      type="text"
                      placeholder="dd/mm/yyyy"
                      required
                      v-model="newJobData.dueDate"
                    />
                  </div>

                  <div class="mb-3">
                    <button class="btn w-100 btn-primary" type="button" @click="handleAddButton">
                      Post
                    </button>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContent>
  </div>
</template>

<script>
import { ref } from "vue";
import MainContent from "@/components/MainContent.vue";
import * as recruitmentPostService from "@/util/service/recruitmentPostService";
export default {
  name: "EmployerCreateJob",
  components: {
    MainContent,
  },
  setup() {
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
      recruitmentPostService.postNewJob(newJobData.value);
      console.log(newJobData.value);
    };

    return {
      newJobData,
      vnLocation,

      handleAddButton,
    };
  },
};
</script>

<style scoped>
</style>