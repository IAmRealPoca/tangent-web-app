<template>
  <div>
    <MainContent>
      <div class="py-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li class="breadcrumb-item">
              <a href="#"><span class="fas fa-home"></span></a>
            </li>
            <li class="breadcrumb-item"><a href="#">Job Fair</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              Your Booth
            </li>
          </ol>
        </nav>
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
          <input type="button" value="Call" @click="joinSession" />
        </div>
        <!-- End Test Only -->
        <div v-if="data && data.session">
          <employer-presentation
            :stream-manager="data.mainStreamManager"
            :data="propsData"
            @updateMainStream="handleUpdateMainStream"
            @endCallEvent="handleEndCallEvent"
          />
        </div>
      </div>
    </MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import { OpenVidu } from "openvidu-browser";

import { useVCService } from "@/util/service/videoChatService";
import { ref } from "@vue/reactivity";
import VideoPlayer from "@/components/ViduComponent/VideoPlayer.vue";
import EmployerPresentation from "@/components/ViduComponent/EmployerPresentation.vue";

export default {
  name: "EmployerCreateBooth",
  components: {
    MainContent,
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
    const propsData = ref({});
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
        data.value.subscribers.push(subscriber);
      });

      // On every Stream destroyed...
      data.value.session.on("streamDestroyed", ({ stream }) => {
        const index = data.value.subscribers.indexOf(stream.streamManager, 0);
        if (index >= 0) {
          data.value.subscribers.splice(index, 1);
        }
      });
      // data.value.session.on("connectionCreated", (event) => {
      //   console.warn("data is sum event when connectionCreated: ", event);
      // });
      // data.value.session.on("connectionDestroyed", (event) => {
      //   console.warn("data is sum event when connectionDestroyed: ", event);
      // });

      // --- Connect to the session with a valid user token ---

      // 'getToken' method is simulating what your server-side should do.
      // 'token' parameter should be retrieved and returned by your own backend
      const token = await getToken2(data.value.mySessionId);
      const session = await data.value.session.connect(token, {
        clientData: data.value.myUserName,
      });
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
        subscribers: data.value.subscribers
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

    const getToken2 = (sessionId) => {
      const VCService = useVCService();
      const session = {
        recordingMode: "ALWAYS",
        customSessionId: sessionId,
      };
      return VCService.getToken(session);
    };
    const handleUpdateMainStream = (sub) => {
      updateMainVideoStreamManager(sub);
    };
    const handleEndCallEvent = () => {
      leaveSession();
    };
    return {
      data,
      joinSession,
      leaveSession,
      propsData,
      handleUpdateMainStream,
      handleEndCallEvent,
    };
  },
};
</script>

<style scoped></style>
