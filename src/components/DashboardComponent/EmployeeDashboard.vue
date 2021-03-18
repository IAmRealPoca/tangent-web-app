<template>
  <MainContent>
    <div class="mb-2 px-2">Tìm việc làm tuyển dụng</div>
    <div class="task-wrapper border bg-white shadow-sm rounded">
      <div
        class="card hover-state border-bottom rounded-0 rounded-top py-2"
        v-for="item in mockData"
        :key="item.jobId"
      >
        <div
          class="row card-body d-sm-flex align-items-center flex-wrap flex-lg-nowrap py-0"
        >
          <!-- avatar of companies -->
          <div class="col-2 d-flex">
            <img
              :src="item.img"
              class="user-avatar large-avatar rounded border"
            />
          </div>
          <div class="container-fluid mb-5">
            <!-- Information -->
            <div class="grid col-10 ">
              <div class="row">
                <!-- JobTitle -->
                <div class="col-6 text-start">
                  <span class="h4">{{ item.jobTitle }}</span>
                </div>
                <!-- Expired Date -->
                <div class="col-6 text-end">
                  <button :class="fnCheckTime" disabled>
                    {{ formatDate(item.expiredDate) }}
                  </button>
                </div>
              </div>
              <div class="row pb-2">
                <div class="col text-start">{{ item.companyName }}</div>
              </div>
              <div class="row">
                <div class="col text-start text-success">
                  {{ item.location }}
                </div>
                <div class="col text-center me-14">
                  Đăng {{ formatDate(item.createdDate) }}
                </div>
              </div>
              <!-- <div class="my-1"></div> -->
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
import { onMounted } from "@vue/runtime-core";
import moment from "moment";
// import { onMounted } from "@vue/runtime-core";

export default {
  name: "EmployeeDashboard",
  components: { MainContent },
  setup() {
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

    const fnCheckTime = () => {
      // console.log("mockData: ", mockData[0].createdDate);
      mockData.forEach((item) => {
        console.log("item: ", new Date(item.createdDate).getDate());
        let end = Date.now();
        let elapsedTime = end - new Date(item.createdDate);
        console.log("end: ", end.getDate());
        const checkin = 7;
        console.log("elapsed time-------> ", elapsedTime);
        // if (elapsedTime < checkin) {
        //   return constants.CSS_BUTTON_COLOR.OVER_EXPIRED;
        // } else if (elapsedTime > checkin) {
        //   return constants.CSS_BUTTON_COLOR.EXPIRED;
        // } else if (elapsedTime === checkin) {
        //   return constants.CSS_BUTTON_COLOR.NEAR_EXPIRED;
        // }
      });
    };

    const getElapsedTime = (startTime) => {
      let endTime = new Date();
      let timeDiff = endTime.getTime() - startTime.getTime();
      timeDiff = timeDiff / 1000;
      let seconds = Math.floor(timeDiff % 60);
      let secondsAsString = seconds < 10 ? "0" + seconds : seconds;
    };

    const formatDate = (time) => {
      const fmDate = new Date(time);
      return (
        fmDate.getDate() + "-" + fmDate.getMonth() + "-" + fmDate.getFullYear()
      );
    };

    onMounted(() => {
      fnCheckTime();
    });

    return {
      mockData,
      formatDate,
      fnCheckTime,
      getElapsedTime,
    };
  },
};
</script>

<style scoped>
/* More styles */
</style>
