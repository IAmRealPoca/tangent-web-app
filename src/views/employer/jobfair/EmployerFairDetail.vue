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
                  2020-2021 Triton Alliance
                </li>
              </ol>
            </nav>
            <div class="h4">2020-2021 Triton Alliance</div>
            <div class="h5">Current Booths</div>
          </div>
          <button
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#modal-notification"
          >
            Leave
          </button>
        </div>
        <!-- Modal Content -->
        <div
          class="modal fade"
          id="modal-notification"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modal-notification"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-info modal-dialog-centered"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-body bg-gradient-warning">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="py-3 text-center">
                  <span class="modal-icon display-1-lg"
                    ><i class="far fa-times-circle"></i
                  ></span>
                  <h2 class="h4 modal-title my-3">
                    Do you really want to unregister?
                  </h2>
                  <p>
                    This action cannot be redo. Your booth will also be removed!
                  </p>
                </div>
              </div>
              <div
                class="modal-footer bg-gradient-danger justify-content-center"
              >
                <button
                  type="button"
                  @click="handleDelete"
                  data-bs-dismiss="modal"
                  class="btn btn-sm btn-white"
                >
                  Yes I Do!
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Modal Content -->
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
                <div v-if="isCreated || boothList">
                  <div v-if="isCreated && boothDetail">
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="card-body">
                          <h4 class="h3">Your Company Booth</h4>
                          <h5 class="fw-normal">{{ boothDetail.name }}</h5>
                          <p class="text-gray mb-4">{{ boothDetail.desc }}</p>
                          <a class="btn btn-sm btn-secondary" href="bootp"
                            >Go to your booth</a
                          >
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <img
                          :src="boothDetail.thumbnail"
                          alt="Thumbnail"
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                  <div v-if="boothList">
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="card-body">
                          <h4 class="h3">{{ boothList.boothName }}</h4>
                          <p class="text-gray mb-4">
                            {{ boothList.boothDescription }}
                          </p>
                          <a
                            class="btn btn-sm btn-secondary"
                            :href="
                              fairDetailRef.jobFairId + `/` + boothList.boothId
                            "
                            >Go to your booth</a
                          >
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <img
                          :src="boothList.boothThumbnail"
                          alt="Thumbnail"
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="card-body text-center">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-form"
                    >
                      <span class="fas fa-plus-circle fa-7x"></span>
                    </a>
                    <div class="h4">You haven't create your booth.</div>
                    <div class="h5">
                      Create one by clicking the above button
                    </div>
                  </div>
                  <div
                    class="modal fade"
                    id="modal-form"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="modal-form"
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
                              <h2 class="h4">Create booth</h2>
                            </div>
                            <div class="card-body p-0 pl-lg-3">
                              <form action="#" class="mt-4">
                                <!-- Form -->
                                <div class="form-group mb-4">
                                  <label for="booth_name">Booth Name</label>
                                  <div class="input-group">
                                    <span
                                      class="input-group-text"
                                      id="basic-addon1"
                                      ><span class="fas fa-signature"></span
                                    ></span>
                                    <input
                                      type="text"
                                      v-model="boothDetail.name"
                                      class="form-control"
                                      placeholder="Your Fantasic Title"
                                      id="booth_name"
                                      required
                                    />
                                  </div>
                                </div>
                                <!-- End of Form -->
                                <div class="form-group mb-4">
                                  <label for="booth_name"
                                    >Booth Thumbnail</label
                                  >
                                  <div class="input-group">
                                    <div class="mb-3">
                                      <input
                                        class="form-control"
                                        id="booth_thumbnail"
                                        @change="handleFileUpload"
                                        type="file"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <!-- Form -->
                                <div class="form-group">
                                  <div class="form-group mb-4">
                                    <label for="booth_description"
                                      >Booth Description</label
                                    >
                                    <div class="input-group">
                                      <textarea
                                        class="form-control"
                                        id="booth_description"
                                        v-model="boothDetail.desc"
                                        rows="3"
                                        style="resize: none"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <!-- End of Form -->
                                </div>
                                <div class="d-grid">
                                  <button
                                    type="submit"
                                    @click.prevent="handleCreate"
                                    data-bs-dismiss="modal"
                                    class="btn btn-info"
                                  >
                                    Create!
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End of Modal Content -->
                </div>
              </div>
            </div>
            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="h4">Others booths</div>
                  <div v-if="fairDetailRef && boothsLength.length">
                    <div
                      v-for="(item, index) in fairDetailRef.booths"
                      :key="index"
                      class="col-12 col-lg-4 flex-grow-1"
                    >
                      <div v-if="item.companyId != comId">
                        <div class="card shadow-sm h-100">
                          <div class="card-header">
                            <a href="#">
                              <img
                                class="avatar-sm me-2 img-fluid rounded-circle"
                                src="https://picsum.photos/id/237/200/300"
                                alt="avatar"
                              />
                              {{ item.boothName }}
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
                            <h5 class="h5">{{ item.boothName }}</h5>
                            <h6 class="h6 mb-1">
                              {{ item.boothDescription }}
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
  name: "EmployerFairDetail",
};
</script>
<script setup>
import MainContent from "@/components/MainContent.vue";
import { useBoothService } from "@/util/service/boothService.js";
import { useJobFairService } from "@/util/service/jobFairService.js";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
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
const boothList = ref(null);
const boothDetail = {
  name: "",
  desc: "",
  thumbnail: "https://picsum.photos/id/237/450/300",
};
const route = useRoute();
const router = useRouter();
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
const comId = parseJwt();

const fetchJobFairDetail = async () => {
  const fair = await jobFairService.getFair(fairIdFromRoute);
  console.log("fair detail: ", fair);
  fairDetailRef.value = fair;
  boothsLength.value = fair.booths;
  // console.log("booths: ", boothsLength.value);
};

const fetchBoothList = () => {
  // console.log("jwt: ", comId);
  boothService
    .getBoothByComId(parseInt(comId))
    .then((resp) => {
      console.log("booth from comid list: ", resp);
      boothList.value = resp;
    })
    .catch((e) => {
      const errCode = e.messages[0].status;
      console.log("err :>> ", errCode);
      if (errCode === 404) {
        boothList.value = null;
      }
    });
};
const handleFileUpload = (evt) => {
  const path = evt.target.value;
  // console.log(path);
  boothDetail.thumbnail = path;
};

const handleCreate = (e) => {
  const comId = parseJwt();
  // console.log(boothDetail.name);
  // console.log(boothDetail.desc);
  // console.log(boothDetail.thumbnail);

  const payload = {
    boothName: boothDetail.name,
    boothDescription: boothDetail.desc,
    boothThumbnail: boothDetail.thumbnail,
    jobFairId: fairIdFromRoute,
    companyId: parseInt(comId),
  };

  // console.log(payload);

  boothService.createBooth(payload).then(() => (isCreated.value = true));
};
const handleDelete = () => {
  const data = {
    id: fairIdFromRoute,
    comId: parseInt(parseJwt()),
  };
  console.log("data :>> ", data);
  // if somethign for febug
  jobFairService
    .unregisterFair(data)
    .then((resp) => {
      console.log("resp :>> ", resp);
      if (resp) router.push("/employer/jobfair/");
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
};
onMounted(() => {
  // fetchBoothList();
  fetchJobFairDetail();
  fetchBoothList();
});
</script>

<style scoped></style>
