<template>
  <div class="mx-3">
    <Header :isBooth="true"/>
      <div class="py-1">
        <div class="d-flex justify-content-between w-100 flex-wrap">
          <div class="mb-3 mb-lg-0">
            <h1 class="h4">Your Booth</h1>
            <p class="mb-0"></p>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Test Only -->
        <div v-if="data && !data.session">
          <!-- <input type="button" value="Call" @click="joinSession" /> -->
          <div class="d-flex justify-content-center">
            <strong class="h1">Loading...</strong>
            <div
              class="spinner-border ml-auto"
              style="width: 3rem; height: 3rem;"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        </div>
        <!-- End Test Only -->
        <div v-if="data && data.session">
          <employer-presentation
            :stream-manager="data.mainStreamManager"
            v-bind="{ data,question }"
            @updateMainStream="handleUpdateMainStream"
            @endCallEvent="handleEndCallEvent"
            @sendQuestion="sendQuestion"
          />
        </div>
      </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { OpenVidu } from "openvidu-browser";

import { useVCService } from "@/util/service/videoChatService";
import { useBoothService } from "@/util/service/boothService.js";

import { ref, computed } from "@vue/reactivity";
import VideoPlayer from "@/components/ViduComponent/VideoPlayer.vue";
import EmployerPresentation from "@/components/ViduComponent/EmployerPresentation.vue";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

import { useStore } from "vuex";

export default {
  name: "StudentBooth",
  components: {
    Header,
    VideoPlayer,
    EmployerPresentation,
  },
  setup() {
    const data = ref({
      OV: undefined,
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],
      mySessionId: "NyamSed",
      myUserName: "Participant" + Math.floor(Math.random() * 100),
    });
    const route = useRoute();
    const router = useRouter();
    const fairServive = useBoothService();
    const store = useStore();

    const propsData = ref({});
    const userInfo = computed(() => store.getters.getUser);
    const question = ref({});

    const boothIdFromRoute = Number(route.params.boothId);

    const getSessionId = async () => {
      const resp = await fairServive.getBoothById(boothIdFromRoute);
      data.value.mySessionId = resp.boothSessionUrl;
      // const info = await getCurrEmployeeInfo();
      data.value.myUserName = userInfo.name;
    };

    const joinSession = async () => {
      // --- Get an OpenVidu object ---
      data.value.OV = new OpenVidu();

      // --- Init a session ---
      data.value.session = data.value.OV.initSession();

      // --- Specify the actions when events take place in the session ---

      // On every new Stream received...
      data.value.session.on("streamCreated", ({ stream }) => {
        console.log("Tao la steram: ", stream);
        const subscriber = data.value.session.subscribe(stream);
        console.warn("sub: ", subscriber);
        data.value.subscribers.push(subscriber);
        // data.value.mainStreamManager = subscriber;
        // data.value.publisher = subscriber;
      });

      // On every Stream destroyed...
      data.value.session.on("streamDestroyed", ({ stream }) => {
        const index = data.value.subscribers.indexOf(stream.streamManager, 0);
        if (index >= 0) {
          data.value.subscribers.splice(index, 1);
        }
      });
      data.value.session.on("connectionCreated", (event) => {
        store.dispatch("getSub", boothIdFromRoute);

        if (
          event.connection.connectionId ===
          data.value.session.connection.connectionId
        ) {
          console.warn("YOUR OWN CONNECTION CREATED!");
        } else {
          console.warn("OTHER USER'S CONNECTION CREATED!");

          // console.warn("OTHER USER'S CONNECTION DATA: ",event.connection.data);
        }
        console.warn("data is sum event when connectionCreated: ", event);
      });
      data.value.session.on("connectionDestroyed", (event) => {
        if (
          !event.connection.connectionId ===
          data.value.session.connection.connectionId
        ) {
          console.warn("OTHER USER'S CONNECTION CREATED!");
        }
        console.warn("data is sum event when connectionDestroyed: ", event);
      });

      data.value.session.on("signal:question",(event)=>{
        console.log('event from signal :>> ', event);
        if (event.type === "signal:question") {
          question.value = event;
        }
      })
      // --- Connect to the session with a valid user token ---

      // 'getToken' method is simulating what your server-side should do.
      // 'token' parameter should be retrieved and returned by your own backend
      const token = await getToken2(data.value.mySessionId);
      const shortenUserInfo = {
        avatar: userInfo.value.avatar,
        name: userInfo.value.fullName,
        accountId: userInfo.value.accountId,
      };
      const session = await data.value.session.connect(token, shortenUserInfo);
      propsData.value = {
        publisher: data.value.publisher,
        subscribers: data.value.subscribers,
      };

      window.addEventListener("beforeunload", leaveSession);

      console.warn("Data frmom Util: ", data);
      console.warn("Data publisher from Util: ", data.value.publisher);
    };
    const leaveSession = () => {
      // --- Leave the session by calling 'disconnect' method over the Session object ---
      if (data.value.session) data.value.session.disconnect();

      data.value.session = undefined;
      data.value.mainStreamManager = undefined;
      data.value.publisher = undefined;
      data.value.subscribers = [];
      data.value.OV = undefined;

      window.removeEventListener("beforeunload", leaveSession);
    };

    const sendQuestion = () => {
      if (data.value.session) {
        data.value.session
          .signal({ data: "Test", type: "question" })
          .then(() => console.log("send sucessfully"))
          .catch(err => console.log(err));
      }
    };

    const updateMainVideoStreamManager = (stream) => {
      if (data.value.mainStreamManager === stream) return;
      data.value.mainStreamManager = stream;
    };

    const getToken2 = (sessionId) => {
      const VCService = useVCService();
      console.log("sessionId: ", sessionId);
      const req = {
        sessionId: sessionId,
      };
      return VCService.getToken(req);
    };
    const handleUpdateMainStream = (sub) => {
      updateMainVideoStreamManager(sub);
    };
    const handleEndCallEvent = () => {
      leaveSession();
      router.back();
    };

    onMounted(async () => {
      await getSessionId();

      joinSession();
    });

    return {
      data,
      joinSession,
      leaveSession,
      propsData,
      userInfo,
      question,

      handleUpdateMainStream,
      handleEndCallEvent,
      sendQuestion,
    };
  },
};
</script>

<style scoped></style>
