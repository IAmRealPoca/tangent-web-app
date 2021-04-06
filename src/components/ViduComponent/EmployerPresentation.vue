<template>
  <!-- <div v-if="streamManager"> -->

    <!-- Video section -->
    <div class="container-fluid">
      <div class="card border-light shadow-sm components-section mb-2">
        <div class="card-body">

            <video ref="videoPlayer" class="w-100 h-100" controls></video>

            <!--            <div class="col-12 text-center">-->
<!--              <div class="row">-->
<!--                &lt;!&ndash;                <div v-if="data?.publisher">&ndash;&gt;-->
<!--                &lt;!&ndash;                  <video-player :stream-manager="streamManager"/>&ndash;&gt;-->
<!--                &lt;!&ndash;                  &lt;!&ndash; Tri-state area &ndash;&gt;&ndash;&gt;-->
<!--                &lt;!&ndash;                  <div class="row nav-wrapper">&ndash;&gt;-->
<!--                &lt;!&ndash;                    <div&ndash;&gt;-->
<!--                &lt;!&ndash;                        class="nav nav-pills nav-pill-circle mb-3 col justify-content-center"&ndash;&gt;-->
<!--                &lt;!&ndash;                        id="tab-32"&ndash;&gt;-->
<!--                &lt;!&ndash;                        role="tablist"&ndash;&gt;-->
<!--                &lt;!&ndash;                    >&ndash;&gt;-->
<!--                &lt;!&ndash;                      <div class="nav-item me-3 me-md-0">&ndash;&gt;-->
<!--                &lt;!&ndash;                        <a&ndash;&gt;-->
<!--                &lt;!&ndash;                            class="nav-link text-sm-center active"&ndash;&gt;-->
<!--                &lt;!&ndash;                            aria-label="first navigation tab"&ndash;&gt;-->
<!--                &lt;!&ndash;                            id="tab-link-example-11"&ndash;&gt;-->
<!--                &lt;!&ndash;                            data-bs-toggle="tab"&ndash;&gt;-->
<!--                &lt;!&ndash;                            href=""&ndash;&gt;-->
<!--                &lt;!&ndash;                            role="tab"&ndash;&gt;-->
<!--                &lt;!&ndash;                            aria-controls="link-example-13"&ndash;&gt;-->
<!--                &lt;!&ndash;                            aria-selected="true"&ndash;&gt;-->
<!--                &lt;!&ndash;                        >&ndash;&gt;-->
<!--                &lt;!&ndash;                          <span class="nav-link-icon d-block"&ndash;&gt;-->
<!--                &lt;!&ndash;                          ><span class="fas fa-video"></span&ndash;&gt;-->
<!--                &lt;!&ndash;                          ></span>&ndash;&gt;-->
<!--                &lt;!&ndash;                        </a>&ndash;&gt;-->
<!--                &lt;!&ndash;                      </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                    <div&ndash;&gt;-->
<!--                &lt;!&ndash;                        class="nav nav-pills nav-pill-circle mb-3 col justify-content-center"&ndash;&gt;-->
<!--                &lt;!&ndash;                        id="tab-33"&ndash;&gt;-->
<!--                &lt;!&ndash;                        role="tablist"&ndash;&gt;-->
<!--                &lt;!&ndash;                    >&ndash;&gt;-->
<!--                &lt;!&ndash;                      <div class="nav-item me-3 me-md-0">&ndash;&gt;-->
<!--                &lt;!&ndash;                        <a&ndash;&gt;-->
<!--                &lt;!&ndash;                            class="nav-link text-sm-center"&ndash;&gt;-->
<!--                &lt;!&ndash;                            aria-label="first navigation tab"&ndash;&gt;-->
<!--                &lt;!&ndash;                            id="tab-link-example-12"&ndash;&gt;-->
<!--                &lt;!&ndash;                            data-bs-toggle="tab"&ndash;&gt;-->
<!--                &lt;!&ndash;                            @click="endCall"&ndash;&gt;-->
<!--                &lt;!&ndash;                            href=""&ndash;&gt;-->
<!--                &lt;!&ndash;                            role="tab"&ndash;&gt;-->
<!--                &lt;!&ndash;                            aria-controls="link-example-13"&ndash;&gt;-->
<!--                &lt;!&ndash;                            aria-selected="true"&ndash;&gt;-->
<!--                &lt;!&ndash;                        >&ndash;&gt;-->
<!--                &lt;!&ndash;                          <span class="nav-link-icon d-block"&ndash;&gt;-->
<!--                &lt;!&ndash;                          ><span class="fas fa-phone-slash"></span&ndash;&gt;-->
<!--                &lt;!&ndash;                          ></span>&ndash;&gt;-->
<!--                &lt;!&ndash;                        </a>&ndash;&gt;-->
<!--                &lt;!&ndash;                      </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                    <div&ndash;&gt;-->
<!--                &lt;!&ndash;                        class="nav nav-pills nav-pill-circle mb-3 col justify-content-center"&ndash;&gt;-->
<!--                &lt;!&ndash;                        id="tab-34"&ndash;&gt;-->
<!--                &lt;!&ndash;                        role="tablist"&ndash;&gt;-->
<!--                &lt;!&ndash;                    >&ndash;&gt;-->
<!--                &lt;!&ndash;                      <div class="nav-item me-3 me-md-0">&ndash;&gt;-->
<!--                &lt;!&ndash;                        <a&ndash;&gt;-->
<!--                &lt;!&ndash;                            class="nav-link text-sm-center"&ndash;&gt;-->
<!--                &lt;!&ndash;                            aria-label="first navigation tab"&ndash;&gt;-->
<!--                &lt;!&ndash;                            id="tab-link-example-13"&ndash;&gt;-->
<!--                &lt;!&ndash;                            data-bs-toggle="tab"&ndash;&gt;-->
<!--                &lt;!&ndash;                            href=""&ndash;&gt;-->
<!--                &lt;!&ndash;                            role="tab"&ndash;&gt;-->
<!--                &lt;!&ndash;                            aria-controls="link-example-13"&ndash;&gt;-->
<!--                &lt;!&ndash;                            aria-selected="true"&ndash;&gt;-->
<!--                &lt;!&ndash;                        >&ndash;&gt;-->
<!--                &lt;!&ndash;                          <span class="nav-link-icon d-block"&ndash;&gt;-->
<!--                &lt;!&ndash;                          ><span class="fas fa-microphone-slash"></span>&ndash;&gt;-->
<!--                &lt;!&ndash;                          </span>&ndash;&gt;-->
<!--                &lt;!&ndash;                          <span class="sr-only">Mute</span>&ndash;&gt;-->
<!--                &lt;!&ndash;                        </a>&ndash;&gt;-->
<!--                &lt;!&ndash;                      </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                  </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                  &lt;!&ndash; End tri-state area &ndash;&gt;&ndash;&gt;-->
<!--                &lt;!&ndash;                </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                <div&ndash;&gt;-->
<!--                &lt;!&ndash;                    v-if="&ndash;&gt;-->
<!--                &lt;!&ndash;                    data?.subscribers?.length && userInfo.role == 'employee'&ndash;&gt;-->
<!--                &lt;!&ndash;                  "&ndash;&gt;-->
<!--                &lt;!&ndash;                >&ndash;&gt;-->
<!--                &lt;!&ndash;                  <video-player :stream-manager="data?.subscribers[0]"/>&ndash;&gt;-->
<!--                &lt;!&ndash;                  &lt;!&ndash; Tri-state area &ndash;&gt;&ndash;&gt;-->
<!--                &lt;!&ndash;                  <div class="row nav-wrapper">&ndash;&gt;-->
<!--                &lt;!&ndash;                    <div&ndash;&gt;-->
<!--                &lt;!&ndash;                        class="nav nav-pills nav-pill-circle mb-3 col justify-content-center"&ndash;&gt;-->
<!--                &lt;!&ndash;                        id="tab-35"&ndash;&gt;-->
<!--                &lt;!&ndash;                        role="tablist"&ndash;&gt;-->
<!--                &lt;!&ndash;                    >&ndash;&gt;-->
<!--                &lt;!&ndash;                      <div class="nav-item me-3 me-md-0">&ndash;&gt;-->
<!--                &lt;!&ndash;                        <a&ndash;&gt;-->
<!--                &lt;!&ndash;                            class="nav-link text-sm-center"&ndash;&gt;-->
<!--                &lt;!&ndash;                            aria-label="first navigation tab"&ndash;&gt;-->
<!--                &lt;!&ndash;                            id="tab-link-example-14"&ndash;&gt;-->
<!--                &lt;!&ndash;                            data-bs-toggle="tab"&ndash;&gt;-->
<!--                &lt;!&ndash;                            @click="endCall"&ndash;&gt;-->
<!--                &lt;!&ndash;                            href=""&ndash;&gt;-->
<!--                &lt;!&ndash;                            role="tab"&ndash;&gt;-->
<!--                &lt;!&ndash;                            aria-controls="link-example-13"&ndash;&gt;-->
<!--                &lt;!&ndash;                            aria-selected="true"&ndash;&gt;-->
<!--                &lt;!&ndash;                        >&ndash;&gt;-->
<!--                &lt;!&ndash;                          <span class="nav-link-icon d-block"&ndash;&gt;-->
<!--                &lt;!&ndash;                          ><span class="fas fa-phone-slash"></span&ndash;&gt;-->
<!--                &lt;!&ndash;                          ></span>&ndash;&gt;-->
<!--                &lt;!&ndash;                        </a>&ndash;&gt;-->
<!--                &lt;!&ndash;                      </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                  </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                  &lt;!&ndash; End tri-state area &ndash;&gt;&ndash;&gt;-->
<!--                &lt;!&ndash;                </div>&ndash;&gt;-->
<!--              </div>-->
<!--            </div>-->

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
              class="tab-pane fade show active"
              id="nav-job-list"
              role="info"
              aria-labelledby="nav-info-tab"
          >
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
                    class="card shadow-sm"
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
                          <button class="btn btn-tertiary ms-auto" @click="answerQuestion(index)">
                            <span v-if="idxClickedToAnswer !== index">
                              Answer
                            </span>
                            <span v-else>
                              Close
                            </span>
                          </button>
                        </div>
                        <div class="fs-6 mt-2 float-lg-end">
                          {{ q.questionText }}
                        </div>
                      </div>
                    </div>
                    <div
                        v-if="idxClickedToAnswer === index"
                        class="row align-items-center"
                    >
                      <div class="col-12 col-lg-8">
                        <input v-model="answerTextbox" class="w-100" type="text" name="Anwser"/>
                      </div>
                      <div class="col-12 col-lg-4">
                        <button
                            class="btn btn-primary w-100"
                            value="SendAnswer"
                            @click.prevent="answer(index)"
                        >
                          <span>Answer</span>
                        </button>
                      </div>
                    </div>
                    <div
                        class="card shadow-sm mt-1"
                        v-if="q.answer"
                    >
                      <div class="card-body">
                        <div class="row d-block d-xl-flex align-items-center">
                          <div class="col-12 px-xl-0">
                            <div class="d-sm-flex align-items-center">
                              <img
                                  class="user-avatar rounded-circle me-2"
                                  :src="q.answer.avatar"
                                  alt=""
                                  srcset=""
                              />
                              <div class="d-flex flex-column">
                                <h5 class="h5">
                                  {{ q.answer.name }}
                                </h5>
                                <small>
                                  {{ parseDate(q.answer.created) }}
                                </small>
                              </div>
                            </div>
                            <div class="fs-6 mt-2 float-lg-end">
                              {{ q.answer.answerText }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="role === `employee`" class="row align-items-center">
                <div class="col-12 col-lg-8">
                  <input class="w-100" type="text" name="Question" id=""/>
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

  <!-- </div> -->
</template>

<script>
import VideoPlayer from "@/components/ViduComponent/VideoPlayer.vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";

import _ from "lodash";
import {ref, computed, onMounted, onBeforeUnmount, watchEffect} from "vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {useFirebaseService} from "@/util/service/firebaseQuestionService";
import {useAnswerService} from "@/util/service/firebaseAnswerService";

export default {
  name: "EmployerPresentation",
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
    const fbQuestionService = useFirebaseService();

    const emits = context.emit;
    const boothId = Number(route.params.boothId);

    const isLiked = ref(false);
    const boothInfo = ref(null);
    const role = ref("");
    const question = ref({});
    const idxClickedToAnswer = ref(-1);
    const answerTextbox = ref("");
    const videoPlayer = ref(null);
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
      const timer = setInterval(function () {
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

    const getRole = () => {
      const rol = store.getters.getUserRole;
      if (rol.length > 0) {
        role.value = rol;
      }
    };

    const getQuestion = () => {
      const res = fbQuestionService.getAll();
      res.on("value", (item) => {
        console.warn("Some item: ", item.val());
        question.value = item.val();
      });
    };

    const parseDate = (timestamp) => {
      return new Date(timestamp).toLocaleString();
    };

    const player = ref(null);
    const playVideo = () => {
      videoPlayer.value.src = "/AmeKara.mp4";
    }


    const answerQuestion = (idx) => {
      if (idxClickedToAnswer.value == -1 || idxClickedToAnswer.value != idx) {
        idxClickedToAnswer.value = idx;

      } else if (idxClickedToAnswer.value == idx) {
        idxClickedToAnswer.value = -1;

      }
    };

    const answer = async (idx) => {
      console.log("Hey yo!");
      const fbAnswerService = useAnswerService(idx);
      const usr = store.getters.getUser

      if (answerTextbox.value.length > 0 && usr) {
        console.log("Hey yo inside!");
        const answer = {
          avatar: usr.avatar,
          name: usr.name,
          created: Date.now(),
          answerText: answerTextbox.value
        }
        await fbAnswerService.create(answer);
        answerTextbox.value = "";
      }
    }

      watchEffect(()=>{
        console.warn("Textbox: ",answerTextbox.value);
      });

    onMounted(() => {
      // timeOut()
      getBoothInfo();
      getRole();
      getQuestion();
      playVideo();

    });


    onBeforeUnmount(() => {
      if (player.value) {
        player.value.dispose();
      }
    })

    return {
      heartIcon,
      isLiked,
      userInfo,
      subList,
      countDown,
      isSend,
      role,
      question,
      idxClickedToAnswer,
      boothInfo,
      answerTextbox,
      videoPlayer,

      endCall,
      answer,
      updateMainStream,
      handleLike,
      timeOut,
      getBoothInfo,
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
  height: 3rem !important;
  width: 3rem !important;
}
.nav-tabs{
  border-bottom: 0 !important;
}
.nav-tabs .nav-link{
  border-radius: 1rem !important;
}
</style>
