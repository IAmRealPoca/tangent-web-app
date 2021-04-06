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
      <div v-if="data && data.session && isConnected">
        <employer-presentation
            :stream-manager="data.mainStreamManager"
            :data="propsData"
            :question="question"
            @updateMainStream="handleUpdateMainStream"
            @endCallEvent="handleEndCallEvent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

import {OpenVidu} from "openvidu-browser";

import {useVCService} from "@/util/service/videoChatService";
import {useBoothService} from "@/util/service/boothService.js";

import EmployerPresentation from "@/components/ViduComponent/EmployerPresentation.vue";

import {ref} from "@vue/reactivity";
import {useRoute, useRouter} from "vue-router";
import {computed, onMounted} from "@vue/runtime-core";

import {useStore} from "vuex";
import {getCurrentInstance} from "vue";

export default {
  name: "EmployerCreateBooth",
  components: {
    Header,
    EmployerPresentation,
  },
  setup() {
    const data = ref({
      OV: undefined,
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],
      mySessionId: "",
      myUserName: "",
    });
    const route = useRoute();
    const router = useRouter();
    const fairServive = useBoothService();
    const store = useStore();
    const {proxy} = getCurrentInstance();


    const propsData = ref({});

    const userInfo = computed(() => store.getters.getUser);

    const question = ref({});

    const isConnected = ref(false);

    const boothIdFromRoute = Number(route.params.boothId);

    const getSessionId = () => {
      // if (isNaN(boothIdFromRoute)){
      //   router.push("/404");
      // }
      // const resp = await fairServive.getBoothById(boothIdFromRoute);
      // data.value.mySessionId = resp.boothSessionUrl;
      // const info = await getCurrEmployerInfo();
      data.value.myUserName = userInfo.name;
    };

    const joinSession = async () => {
      // --- Get an OpenVidu object ---
      data.value.OV = new OpenVidu();

      // --- Init a session ---
      data.value.session = data.value.OV.initSession();

      // --- Specify the actions when events take place in the session ---

      // On every new Stream received...
      data.value.session.on("streamCreated", ({stream}) => {
        console.log("Tao la stream: ", stream);
        const subscriber = data.value.session.subscribe(stream);
        data.value.subscribers.push(subscriber);
      });

      // On every Stream destroyed...
      data.value.session.on("streamDestroyed", ({stream}) => {
        const index = data.value.subscribers.indexOf(stream.streamManager, 0);
        if (index >= 0) {
          data.value.subscribers.splice(index, 1);
        }
      });
      data.value.session.on("connectionCreated", (event) => {
        if (
            event.connection.connectionId ===
            data.value.session.connection.connectionId
        ) {
          console.warn("YOUR OWN CONNECTION CREATED!");
        } else {
          console.warn("OTHER USER'S CONNECTION CREATED!");
          store.dispatch("getSub", boothIdFromRoute);
          // console.warn("OTHER USER'S CONNECTION DATA: ",event.connection.data);
        }
        console.warn("data is sum event when connectionCreated: ", event);
      });
      data.value.session.on("connectionDestroyed", (event) => {
        if (
            !event.connection.connectionId ===
            data.value.session.connection.connectionId
        )
          console.warn("OTHER USER'S CONNECTION DESTROYED!");
        console.warn("data is sum event when connectionDestroyed: ", event);
      });

      data.value.session.on("signal:question", (event) => {
        console.log("event from signal :>> ", event);
        if (event.type === "signal:question") {
          question.value = event;
        }
      });

      // --- Connect to the session with a valid user token ---

      // 'getToken' method is simulating what your server-side should do.
      // 'token' parameter should be retrieved and returned by your own backend
      const token = getToken2();

      if (token.length === 0) {
        const payload = {
          proxy,
          msg: "An error occurred!",
          stt: "error"
        }
        store.dispatch("toastMsg", payload);

        router.back();
      }

      try {
        await data.value.session.connect(token, {
          clientData: userInfo.value,
        });
        isConnected.value = true;
      } catch (e) {
        if (e.code === 202) {
          store.commit("getFoundBooth");
          router.back();
        }
        console.warn(e.message);
      }

      console.log("Hi there im in here");
      try {
        // --- Get your own camera stream with the desired properties ---
        const publisher = data.value.OV.initPublisher(undefined, {
          audioSource: undefined, // The source of audio. If undefined default microphone
          videoSource: undefined, // The source of video. If undefined default webcam
          publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
          publishVideo: true, // Whether you want to start publishing with your video enabled or not
          resolution: "640x480", // The resolution of your video
          frameRate: 40, // The frame rate of your video
          insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
          mirror: false, // Whether to mirror your local video or not
        });

        console.log("publisher init: ", publisher);

        data.value.mainStreamManager = publisher;
        data.value.publisher = publisher;

        console.log("data publisher init: ", data.value.publisher);

        // --- Publish your stream ---

        data.value.session.publish(data.value.publisher);
      } catch (error) {
        console.log(
            "There was an error connecting to the session:",
            error.code,
            error.message
        );
      }

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

    const updateMainVideoStreamManager = (stream) => {
      if (data.value.mainStreamManager === stream) return;
      data.value.mainStreamManager = stream;
    };

    const getToken2 = () => {
      const toke = store.state.boothToken;
      if (toke) {
        return toke;
      }
      // const VCService = useVCService();
      // console.log("sessionId: ", sessionId);
      // const req = {
      //   sessionId: sessionId,
      // };
      return "";
    };
    const handleUpdateMainStream = (sub) => {
      updateMainVideoStreamManager(sub);
    };
    const handleEndCallEvent = () => {
      leaveSession();
      router.back();
    };

    onMounted(async () => {
      getSessionId();
      try {
        await joinSession();
      } catch (e) {
        console.warn("Error when join session: ", e.message);

      }
    });

    return {
      data,
      propsData,
      userInfo,
      question,
      isConnected,

      joinSession,
      leaveSession,
      handleUpdateMainStream,
      handleEndCallEvent,
    };
  },
};
</script>

<style scoped></style>
