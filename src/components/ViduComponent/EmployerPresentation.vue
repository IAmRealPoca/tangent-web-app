<template>
  <!-- <div v-if="streamManager"> -->
  <div class="row">
    <!-- Video section -->
    <div class="col-12 col-xl-8">
      <div class="card border-light shadow-sm components-section mb-2">
        <div class="card-body">
          <div class="row">
            <div class="col-12 text-center">
              <div class="row">
                <div v-if="data?.publisher">
                  <video-player :stream-manager="streamManager" />
                  <!-- Tri-state area -->
                  <div class="row nav-wrapper">
                    <div
                      class="nav nav-pills nav-pill-circle mb-3 col justify-content-center"
                      id="tab-34"
                      role="tablist"
                    >
                      <div class="nav-item me-3 me-md-0">
                        <a
                          class="nav-link text-sm-center active"
                          aria-label="first navigation tab"
                          id="tab-link-example-13"
                          data-bs-toggle="tab"
                          href=""
                          role="tab"
                          aria-controls="link-example-13"
                          aria-selected="true"
                        >
                          <span class="nav-link-icon d-block"
                            ><span class="fas fa-video"></span
                          ></span>
                        </a>
                      </div>
                    </div>
                    <div
                      class="nav nav-pills nav-pill-circle mb-3 col justify-content-center"
                      id="tab-34"
                      role="tablist"
                    >
                      <div class="nav-item me-3 me-md-0">
                        <a
                          class="nav-link text-sm-center"
                          aria-label="first navigation tab"
                          id="tab-link-example-13"
                          data-bs-toggle="tab"
                          @click="endCall"
                          href=""
                          role="tab"
                          aria-controls="link-example-13"
                          aria-selected="true"
                        >
                          <span class="nav-link-icon d-block"
                            ><span class="fas fa-phone-slash"></span
                          ></span>
                        </a>
                      </div>
                    </div>
                    <div
                      class="nav nav-pills nav-pill-circle mb-3 col justify-content-center"
                      id="tab-34"
                      role="tablist"
                    >
                      <div class="nav-item me-3 me-md-0">
                        <a
                          class="nav-link text-sm-center"
                          aria-label="first navigation tab"
                          id="tab-link-example-13"
                          data-bs-toggle="tab"
                          href=""
                          role="tab"
                          aria-controls="link-example-13"
                          aria-selected="true"
                        >
                          <span class="nav-link-icon d-block"
                            ><span class="fas fa-microphone-slash"></span>
                          </span>
                          <span class="sr-only">Mute</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- End tri-state area -->
                </div>
                <div
                  v-if="
                    data?.subscribers?.length && userInfo.role == 'employee'
                  "
                >
                  <video-player :stream-manager="data?.subscribers[0]" />
                  <!-- Tri-state area -->
                  <div class="row nav-wrapper">
                    <div
                      class="nav nav-pills nav-pill-circle mb-3 col justify-content-center"
                      id="tab-34"
                      role="tablist"
                    >
                      <div class="nav-item me-3 me-md-0">
                        <a
                          class="nav-link text-sm-center"
                          aria-label="first navigation tab"
                          id="tab-link-example-13"
                          data-bs-toggle="tab"
                          @click="endCall"
                          href=""
                          role="tab"
                          aria-controls="link-example-13"
                          aria-selected="true"
                        >
                          <span class="nav-link-icon d-block"
                            ><span class="fas fa-phone-slash"></span
                          ></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- End tri-state area -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card border-light shadow-sm components-section">
        <div class="card-header d-flex align-items-center">
          <div class="h2" v-if="boothInfo">{{ boothInfo.boothName }}</div>
          <div class="ms-auto">
            <button class="btn btn-seconadary btn-lg" @click="handleLike">
              <span :class="heartIcon"></span>
            </button>
          </div>
        </div>
        <div
          v-html="boothInfo.boothDescription"
          class="card-body body-height overflow-scroll"
          v-if="boothInfo"
        ></div>
      </div>
    </div>
    <!-- End video section -->
    <!-- Right list -->
    <div class="col-12 col-xl-4">
      <div class="card border-light shadow-sm components-section mb-2">
        <!-- Body is nav content -->
        <div class="card-body">
          <div class="row pt-0">
            <nav>
              <div class="nav nav-tabs mb-4" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active col-lg-6 text-center"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  ><span class="nav-link-icon d-block"
                    ><span class="far fa-user"></span> </span
                ></a>
                <a
                  class="nav-item nav-link col-lg-6 text-center"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  ><span class="nav-link-icon d-block"
                    ><span class="far fa-question-circle"></span> </span
                ></a>
              </div>
            </nav>
          </div>
          <div class="tab-content" id="nav-tabContent">
            <!-- Begin nav 1 -->
            <div
              class="tab-pane fade show active overflow-scroll"
              style="max-height: 100vh;"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div class="row" v-if="subList">
                <div class="col-6" v-for="(sub, index) in subList" :key="index">
                  <div class="d-flex flex-column">
                    <img
                      :src="parseClientData(sub.clientData).avatar"
                      alt=""
                      style="object-fit: contain;"
                    />
                    <div class="align-self-center">
                      {{ parseClientData(sub.clientData).name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End nav 1 -->
            <!-- Begin nav 2 -->
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div class="row">
                <div class="col-12 mb-2" v-if="!checkObject(question)">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <div class="row d-block d-xl-flex align-items-center">
                        <div class="col-12 px-xl-0">
                          <div class="d-sm-flex align-items-center">
                            <img
                              class="user-avatar rounded-circle me-2"
                              :src="parseClientData(question.from?.data)?.avatar"
                              alt=""
                              srcset=""
                            />
                            <h2 class="h5">{{parseClientData(question.from?.data)?.name}}</h2>
                          </div>
                          <div class="fs-6 mt-2 float-lg-end">
                           {{question.data}}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-12 col-lg-8">
                    <input class="w-100" type="text" name="Question" id="" />
                  </div>
                  <div class="col-12 col-lg-4">
                    <button
                      class="btn btn-secondary w-100"
                      :disabled="isSend"
                      value="Send"
                      @click="sendQuestion"
                    >
                      <div v-if="!isSend">Ask</div>
                      <div class="d-flex align-items-center justify-content-evenly" v-else>
                        <span
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        {{ countDown }}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <!-- <iframe
                src="https://app.sli.do/event/lnatkfi9"
                height="100%"
                width="100%"
                frameBorder="0"
                style="min-height: 560px;"
                title="Slido"
              ></iframe> -->
            </div>
            <!-- End nav 2 -->
          </div>
        </div>
      </div>
    </div>
    <!-- End right list -->
  </div>
  <!-- </div> -->
</template>

<script>
import VideoPlayer from "@/components/ViduComponent/VideoPlayer.vue";
import _ from "lodash";
import { ref, computed, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "EmployerPresentation",
  emits: ["updateStream"],
  components: {
    VideoPlayer,
  },
  props: {
    streamManager: {
      type: Object,
    },
    data: {},
    question: {}
  },
  emits: ["endCallEvent", "updateStream", "sendQuestion"],
  setup(props, context) {
    const route = useRoute();
    const store = useStore();

    const emits = context.emit;
    const boothId = Number(route.params.boothId);

    const isLiked = ref(false);
    const boothInfo = ref(null);
    const subList = computed(() => store.state.listOfSub);
    const userInfo = computed(() => store.getters.getUser);

    const handleLike = () => {
      isLiked.value = !isLiked.value;
    };
    const heartIcon = computed(() => {
      if (isLiked.value) return "fas fa-heart text-danger";
      else return "far fa-heart text-danger";
    });

    const getBoothInfo = () => {
      if (store.state.boothInfo != null && !isNaN(boothId)) {
        console.log("Hi i am here");
        boothInfo.value = store.getters.getBoothInfo(boothId);
      }
    };

    /**
     * Get Client Data from ClientData Openvidu
     * @returns JSON of clientdata
     * @param {string}clientData
     */
    const parseClientData = (clientData) => {
      return JSON.parse(clientData);
    };

    const countDown = ref(60);
    const isSend = ref(false);

    /**
     *  Count down function
     */
    const timeOut = () => {
      const timer = setInterval(function() {
        // console.warn(`${countDown.value.toString(10)}`);
        if (--countDown.value < 0) {
          isSend.value = false;
          countDown.value = 60;
          clearInterval(timer);
        }
      }, 1000);
    };

    // const props = defineProps({
    //   streamManager: {
    //     type: Object,
    //   },
    //   data: {},
    // });
    const endCall = () => {
      emits("endCallEvent");
    };
    const updateMainStream = (sub) => {
      emits("updateStream", sub);
    };

    const sendQuestion = () => {
      isSend.value = true;
      emits("sendQuestion");
      timeOut();
    };

    const checkObject = (obj) => {
      return _.isEmpty(obj);
    }

    onMounted(() => {
      // timeOut()
      getBoothInfo();
    });

    return {
      endCall,
      updateMainStream,
      handleLike,
      heartIcon,
      isLiked,
      userInfo,
      subList,
      countDown,
      isSend,

      timeOut,
      getBoothInfo,
      boothInfo,
      parseClientData,
      sendQuestion,
      checkObject,
    };
  },
};
</script>

<style scoped>
.body-height {
  max-height: 55vh;
}
</style>
