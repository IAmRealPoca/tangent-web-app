<template>
  <!-- <div v-if="streamManager"> -->
  <div class="row">
    <!-- Video section -->
    <div class="col-12 col-xl-12">
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
        <nav>
          <div class="nav nav-tabs mb-4" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active col-lg-4 text-center"
              id="nav-info-tab"
              data-bs-toggle="tab"
              href="#nav-info"
              role="tab"
              aria-controls="nav-info"
              aria-selected="true"
              ><span class="nav-link-icon d-block"
                ><span class="fas fa-info-circle"></span> </span
            ></a>
            <a
              class="nav-item nav-link col-lg-4 text-center"
              id="nav-job-list-tab"
              data-bs-toggle="tab"
              href="#nav-job-list"
              role="tab"
              aria-controls="nav-job-list"
              aria-selected="false"
              ><span class="nav-link-icon d-block"
                ><span class="fas fa-list"></span> </span
            ></a>
            <a
              class="nav-item nav-link col-lg-4 text-center"
              id="nav-question-tab"
              data-bs-toggle="tab"
              href="#nav-question"
              role="tab"
              aria-controls="nav-question"
              aria-selected="false"
              ><span class="nav-link-icon d-block"
                ><span class="far fa-question-circle"></span> </span
            ></a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-info"
            role="info"
            aria-labelledby="nav-info-tab"
          >
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
          <div
            class="tab-pane fade"
            id="nav-question"
            role="question"
            aria-labelledby="nav-question-tab"
          >
            <div class="row" v-if="!checkObject(question)">
              <div
                class="col-12 mb-2"
                v-for="(q, index) in question"
                :key="index"
              >
                <div
                  class="card shadow-sm point-cursor"
                  @click="answerQuestion(index)"
                >
                  <div class="card-body">
                    <div class="row d-block d-xl-flex align-items-center">
                      <div class="col-12 px-xl-0">
                        <div class="d-sm-flex align-items-center">
                          <img
                            class="user-avatar rounded-circle me-2"
                            :src="q.user.avatar"
                            alt=""
                            srcset=""
                          />
                          <div class="d-flex flex-column">
                            <h5 class="h5">
                              {{ q.user.name }}
                            </h5>
                            <small>
                              {{ parseDate(q.created) }}
                            </small>
                          </div>
                        </div>
                        <div class="fs-6 mt-2 float-lg-end">
                          {{ q.questionText }}
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="idxClickedToAnswer == index"
                      class="row align-items-center"
                    >
                      <div class="col-12 col-lg-8">
                        <input class="w-100" type="text" name="Anwser" id="" />
                      </div>
                      <div class="col-12 col-lg-4">
                        <button
                          class="btn btn-primary w-100"
                          value="SendAnswer"
                          @click.prevent=""
                        >
                          <div>Anwser</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="role == `employee`" class="row align-items-center">
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
                    <div
                      class="d-flex align-items-center justify-content-evenly"
                      v-else
                    >
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
          </div>
        </div>
      </div>
    </div>
    <!-- End video section -->
    <!-- Right list -->

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
import { useFirebaseService } from "@/util/service/firebaseService";

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
  },
  emits: ["endCallEvent", "updateStream", "sendQuestion"],
  setup(props, context) {
    const route = useRoute();
    const store = useStore();
    const fbService = useFirebaseService();

    const emits = context.emit;
    const boothId = Number(route.params.boothId);

    const isLiked = ref(false);
    const boothInfo = ref(null);
    const role = ref("");
    const question = ref({});
    const idxClickedToAnswer = ref(-1);
    // const

    const subList = computed(() => store.state.listOfSub);
    const userInfo = computed(() => store.getters.getUser);

    const heartIcon = computed(() => {
      if (isLiked.value) return "fas fa-heart text-danger";
      else return "far fa-heart text-danger";
    });

    const handleLike = () => {
      isLiked.value = !isLiked.value;
    };

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
    };

    const getRole = (params) => {
      const rol = store.getters.getUserRole;
      if (rol.length > 0) {
        role.value = rol;
      }
    };

    const getQuestion = () => {
      const res = fbService.getAll();
      res.on("value", (item) => {
        console.warn("Some item: ", item.val());
        question.value = item.val();
      });
    };

    const parseDate = (timestamp) => {
      return new Date(timestamp).toLocaleString();
    };

    const answerQuestion = (idx) => {
      if (idxClickedToAnswer.value == -1 || idxClickedToAnswer.value != idx)
        idxClickedToAnswer.value = idx;
      else if (idxClickedToAnswer.value == idx) {
        idxClickedToAnswer.value = -1;
      }
    };

    onMounted(() => {
      // timeOut()
      getBoothInfo();
      getRole();
      getQuestion();
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
      role,
      question,
      idxClickedToAnswer,

      timeOut,
      getBoothInfo,
      boothInfo,
      parseClientData,
      sendQuestion,
      checkObject,
      parseDate,
      answerQuestion,
    };
  },
};
</script>

<style scoped>
.body-height {
  max-height: 55vh;
}
.user-avatar {
  height: 4rem !important;
  width: 4rem !important;
}
.point-cursor {
  cursor: pointer;
}
</style>
