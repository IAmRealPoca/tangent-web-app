<template>
  <MainContent>
    <div class="card shadow-sm package mt-3">
      <h3 class="mb-2 px-4 pt-2 text-dark">Tìm việc làm tuyển dụng</h3>
      <!-- searchbox -->
      <div class="col-sm-6 col-lg-6 d-sm-flex px-4 py-2">
        <div class="input-group me-2 me-lg-3">
          <span class="input-group-text"
            ><span class="fas fa-search"></span
          ></span>
          <input
            type="text"
            class="form-control"
            placeholder="Type to search..."
          />
        </div>
      </div>
      <!-- end of searchbox -->
      <div class="task-wrapper border bg-white shadow-sm rounded-top">
        <div
          class="card hover-state border-bottom rounded-0 rounded-top py-2"
          v-for="(response, index) in listJobs"
          :key="index"
        >
          <div class="row card-body d-sm-flex flex-wrap flex-lg-nowrap py-0">
            <!-- avatar of companies -->
            <div class="col-sm-2 d-sm-flex">
              <img
                :src="response.company.avatar"
                class="user-avatar large-avatar rounded border"
              />
            </div>
            <div class="container-fluid mb-5">
              <!-- Information -->
              <div class="grid col-10">
                <div class="row">
                  <!-- JobTitle -->
                  <div class="col-sm-9 text-start">
                    <span class="h4">{{ response.title }}</span>
                  </div>
                  <!-- Expired Date -->
                  <div class="col-sm-3 text-end">
                    <span
                      class="px-2 badge bg-primary private"
                      :class="fnCheckTime()"
                    >
                      Hết hạn: {{ formatDate(response.dueDate) }}
                    </span>
                  </div>
                </div>
                <div class="row pb-2">
                  <div class="col text-start">
                    {{ response.company.name }}
                  </div>
                </div>
                <div class="row">
                  <div class="col text-start text-success">
                    {{ response.location }}
                  </div>
                  <div class="col text-end">
                    <span class="icon icon-sm pt-1">
                      <i class="fas fa-calendar-week" />
                    </span>
                    Đăng {{ formatDate(response.created) }}
                  </div>
                </div>
                <div class="row">
                  <!-- Apply Button -->
                  <div class="text-end">
                    <button type="button" class="hover btn btn-warning rounded">
                      Apply
                    </button>
                  </div>
                </div>
                <!-- <div class="my-1"></div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainContent>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import * as constants from "./dashboardUtils.js";
import { ref, onMounted } from "@vue/runtime-core";
import * as recruitmentPostService from "@/util/service/recruitmentPostService";

export default {
  name: "EmployeeDashboard",
  components: { MainContent },
  setup() {
    const listJobs = ref([]);
    const mockData = [
      {
        jobId: 1,
        img: "@/assets/img/fpt.png",
        jobTitle: "AI Software Engineer Intern",
        companyName: "FPT Software",
        location: "TP. Hồ Chí Minh",
        salary: "",
        createdDate: "2021-03-15T05:53:28+0000",
        expiredDate: "2021-03-25T05:53:28+0000",
      },
      {
        jobId: 2,
        img: "@/assets/img/fpt.png",
        jobTitle: "Intern Software Engineer",
        companyName: "Vingroup",
        location: "Hà Nội",
        salary: "",
        createdDate: "2021-03-17T05:53:28+0000",
        expiredDate: "2021-03-30T05:53:28+0000",
      },
    ];
    onMounted(() => {
      fnCheckTime();
      fecthPayload();
    });

    const fnCheckTime = () => {
      let elapsedTime, style;
      mockData.forEach((item) => {
        // console.log("created: ", new Date(item.createdDate).getDate());
        let end = Date.now();
        // console.log("end: ", new Date(end).getDate());
        elapsedTime = end - new Date(item.createdDate);
        // console.log("elapsed time-------> ", new Date(elapsedTime).getDate());
      });
      let countTime = new Date(elapsedTime).getDate();
      // console.log("checking variable::::::::", countTime);
      switch (countTime) {
        case countTime < 0:
          style = constants.CSS_BUTTON_COLOR.OVER_EXPIRED;
          break;
        case countTime <= 7:
          style = constants.CSS_BUTTON_COLOR.NEAR_EXPIRED;
          break;
        case countTime > 7:
          style = constants.CSS_BUTTON_COLOR.EXPIRED;
          break;
        default:
          style = constants.CSS_BUTTON_COLOR.OVER_EXPIRED;
          break;
      }
      return style;
    };

    // const getElapsedTime = (startTime) => {
    //   let endTime = new Date();
    //   let timeDiff = endTime.getTime() - startTime.getTime();
    //   timeDiff = timeDiff / 1000;
    //   let seconds = Math.floor(timeDiff % 60);
    //   let secondsAsString = seconds < 10 ? "0" + seconds : seconds;
    // };

    const formatDate = (time) => {
      const fmDate = new Date(time);
      return (
        fmDate.getDate() + "-" + fmDate.getMonth() + "-" + fmDate.getFullYear()
      );
    };

    const handleActionButtonClick = () => {
      //do sumthing
    };

    const fecthPayload = () => {
      recruitmentPostService
        .getListOfJobs()
        .then((response) => {
          console.log("response: ", response);
          listJobs.value = response;
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    };
    return {
      mockData,
      listJobs,
      formatDate,
      fnCheckTime,
      handleActionButtonClick,
      // getElapsedTime,
    };
  },
};
</script>

<style>
/* More styles */
.private {
  border-radius: 5px;
  padding: 2% 0 2% 0;
  font-weight: 700;
  font-size: 90%;
}
.package {
  z-index: -1;
  background-color: #36a3f7 !important;
  border: 1px solid #36a3f7 !important;
  /* color: #ffffff !important; */
  -webkit-box-shadow: 0 3px 5px 0 rgba(54, 163, 247, 0.3);
  box-shadow: 0 3px 5px 0 rgba(54, 163, 247, 0.3);
}
</style>
