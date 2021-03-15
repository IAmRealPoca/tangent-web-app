<template>
  <div>
    <MainContent>
      <main>
        <!-- Breadcums -->
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
        >
          <div class="d-block mb-4 mb-md-0">
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
              <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
                <li class="breadcrumb-item">
                  <a href="#"><span class="fas fa-home"></span></a>
                </li>
                <li class="breadcrumb-item"><a href="#">Job Fair</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  {{ fairDetailRef.jobFairName }}
                </li>
              </ol>
            </nav>
            <div class="h4">{{ fairDetailRef.jobFairName }}</div>
            <div class="h5">Current Booths</div>
          </div>
        </div>
        <!-- The end of Breadcums -->
        <div class="row">
          <div class="col-12 col-lg-3">
            <div class="card border-light components-section-mb4">
              <div class="card shadow-sm mb-4">
                <div class="card-header border-bottom border-gray-300">
                  <h2 class="h5 mb-0">Events</h2>
                </div>
                <div class="card-body">
                  <div class="row align-items-center border-gray-300 pb-4 mb-4">
                    <div class="col-auto">
                      <div class="calendar d-flex">
                        <span class="calendar-month">Aug</span
                        ><span class="calendar-day">40</span>
                      </div>
                    </div>
                    <div class="col">
                      <a href="#"
                        ><h3 class="h5">{{ fairDetailRef.jobFairName }}</h3></a
                      >
                      <div class="small fw-bold mt-1">
                        {{ fairDetailRef.startDate }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-9">
            <div class="card border-light components-section mb-1">
              <div class="card p-0">
              </div>
            </div>
            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="h4">Booths</div>
                  <div v-if="fairDetailRef && boothsLength.length">
                    <div
                      v-for="(item, index) in fairDetailRef.booths"
                      :key="index"
                      class="col-12 col-lg-4 flex-grow-1"
                    >
                      <div class="card shadow-sm h-100">
                        <div class="card-header">
                          <a href="#">
                            <img
                              class="avatar-sm me-2 img-fluid rounded-circle"
                              src="https://picsum.photos/id/237/200/300"
                              alt="avatar"
                            />
                            {{ item.BoothName }}
                          </a>
                        </div>
                        <div class="card-body">
                          <a href="#">
                            <img
                              src="@/assets/img/fsoft-tuyen-dung.jpg"
                              class="card-img-top rounded py-2"
                              alt="blog image"
                            />
                          </a>
                          <h5 class="h5">{{ item.BoothName }}</h5>
                          <h6 class="h6 mb-1">
                            {{ item.BoothDescription }}
                          </h6>
                          <div class="small mb-3">
                            <span class="icon icon-small"
                              ><span class="far fa-clock"></span
                            ></span>
                            10:30 - 11:00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <div class="h6">
                      There is no other booths to display right now
                    </div>
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
export default {
  name: "SchoolFairDetail",
};
</script>
<script setup>
import MainContent from "@/components/MainContent.vue";
import { useBoothService } from "@/util/service/boothService.js";
import { useJobFairService } from "@/util/service/jobFairService.js";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted, reactive } from "vue";
const boothService = useBoothService();
const jobFairService = useJobFairService();
const fairDetailRef = ref({});
const boothsLength = ref([]);
// const fairDetail = reactive({
//       jobFairName: "",
//       JobFairDescription: "",
//       startDate: "",
//       jobFairThumbnail: Object,
//       schoolId: "",
//     });
const isCreated = ref(false);
const boothList = ref({});
const boothDetail = {
  name: "",
  desc: "",
  thumbnail: "https://picsum.photos/id/237/450/300",
};
const route = useRoute();
const fairIdFromRoute = Number(route.params.jobFairId);
const parseJwt = () => {
  let token = sessionStorage.getItem("token");
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  let id = JSON.parse(jsonPayload);
  return id.sub;
};
const fetchJobFairDetail = async () => {
  const fair = await jobFairService.getFair(fairIdFromRoute);
  // console.log("fair detail: ", fair);
  fairDetailRef.value = fair;
  boothsLength.value = fair.booths;
  // console.log("booths: ", boothsLength.value);
};
fetchJobFairDetail();

const fetchBoothList = () => {
  const comId = parseJwt();
  // console.log("jwt: ", comId);
  boothService.getBoothByComId(parseInt(comId)).then((resp) => {
    // console.log("booth from comid list: ", resp);
    boothList.value = resp;
  });
};
fetchBoothList();
const handleFileUpload = (evt) => {
  const path = evt.target.value;
  // console.log(path);
  boothDetail.thumbnail = path;
};

// const handleCreate = (e) => {
//   const schoolId = parseJwt();
//   // console.log(boothDetail.name);
//   // console.log(boothDetail.desc);
//   // console.log(boothDetail.thumbnail);

//   const payload = {
//     boothName: boothDetail.name,
//     boothDescription: boothDetail.desc,
//     boothThumbnail: boothDetail.thumbnail,
//     jobFairId: fairIdFromRoute,
//     companyId: parseInt(schoolId),
//   };

//   // console.log(payload);

//   boothService.createBooth(payload);
//   isCreated.value = true;
// };
onMounted(() => {
  // fetchBoothList();
});
</script>

<style scoped></style>
