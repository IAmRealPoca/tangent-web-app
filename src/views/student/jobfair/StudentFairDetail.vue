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
                    Do you really want to leave?
                  </h2>
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
            <div class="card border-light shadow-sm components-section mb-4">
              <div class="card-body">
                <div v-if="fairDetailRef && boothsLength.length" class="row">
                  <div class="h4">Company booths</div>

                    <div
                      v-for="(item, index) in boothsLength"
                      :key="index"
                      class="col-12 col-lg-5 flex-grow-1"
                    >
                      <a :href="fairDetailRef.jobFairId + `/` + item.boothId">
                        <div class="card shadow-sm h-100">
                          <div class="card-header">
                            <img
                              class="avatar-sm me-2 img-fluid rounded-circle"
                              src="https://picsum.photos/id/237/200/300"
                              alt="avatar"
                            />
                            {{ item.boothName }}
                          </div>
                          <div class="card-body">
                            <img
                              src="@/assets/img/fsoft-tuyen-dung.jpg"
                              class="card-img-top rounded py-2"
                              alt="blog image"
                            />

                            <h5 class="h5">{{ item.boothName }}</h5>
                            <div class="small mb-3">
                              <span class="icon icon-small"
                                ><span class="far fa-clock"></span
                              ></span>
                              10:30 - 11:00
                            </div>
                          </div>
                        </div>
                      </a>
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
      </main>
    </MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import { useBoothService } from "@/util/service/boothService.js";
import { useJobFairService } from "@/util/service/jobFairService.js";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  name: "StudentFairDetail",
  components: {
    MainContent,
  },
  setup() {
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
          .map(function (c) {
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
      console.log("booths: ", boothsLength.value);
    };

    const handleDelete = () => {
      const data = {
        id: fairIdFromRoute,
        comId: parseInt(parseJwt()),
      };
      console.log("data :>> ", data);
      // if somethign for debug
      jobFairService
        .unregisterFair(data)
        .then((resp) => {
          console.log("resp :>> ", resp);
          if (resp) router.push("/student/jobfair/");
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
    };
    onMounted(() => {
      fetchJobFairDetail();
    });
    return {
      fairDetailRef,
      boothsLength,
      isCreated,
      boothList,
      boothDetail,
      handleDelete,
    };
  },
};
</script>

<style scoped></style>
