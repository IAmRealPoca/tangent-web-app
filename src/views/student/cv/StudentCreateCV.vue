<template>
  <div>
<MainContent>
    <main>
        <!-- Begin breadcrumb -->
                <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
        >
          <div class="d-block mb-4 mb-md-0">
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
              <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
                <li class="breadcrumb-item">
                  <a href="#"><span class="fas fa-home"></span></a>
                </li>
                <li class="breadcrumb-item"><a href="#">Tangent</a></li>
                <li class="breadcrumb-item"><a href="#">School</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Majors
                </li>
              </ol>
            </nav>
            <h2 class="h4">Majors</h2>
            <p class="mb-0">Your school's all majors.</p>
          </div>
          <div class="btn-toolbar">
            <a class="btn btn-sm btn-dark me-2" @click="handleNewMajorClick"
              ><span class="fas fa-plus me-2"></span> New major </a
            >

            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-primary">
                Export
              </button>
            </div>
          </div>
        </div>
        <!-- End breadcrumb -->
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
    </main>
</MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
export default {
    name:"StudentCreateCV",
    components: {
        MainContent,
    }
}
</script>

<style scoped>

</style>