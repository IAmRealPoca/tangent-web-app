<template>
  <video src="myVideo" class="video-js vjs-default-skin" playsinline></video>
</template>

<script>
import "video.js/dist/video-js.css";
import "videojs-record/dist/css/videojs.record.jss";
import videojs from "video.js";

import "webrtc-adapter";
import RecordRTC from "recordrtc";

import { ref, onMounted, onBeforeUnmount } from "vue";
export default {
  name: "CoverLetterVideoRecorder",
  setup() {
    const player = ref("");
    const options = {
      controls: true,
      autoplay: false,
      fluid: false,
      loop: false,
      width: 320,
      height: 240,
      bigPlayButton: false,
      controlBar: {
        volumePanel: false,
      },
      plugins: {
        record: {
          audio: false,
          video: true,
          debug: true,
        },
      },
    };

    onMounted(() => {
      player.value = videojs("#myVideo", options, () => {
        let msg =
          "Using video.js " +
          videojs.VERSION +
          " with videojs-record " +
          videojs.getPluginVersion("record") +
          " and recordrtc " +
          RecordRTC.version;
        videojs.log(msg);
      });

      //device is ready
      player.value.on("deviceReady", () => {
        console.log("device is ready");
      });

      this.player.on("startRecord", () => {
        console.log("started recording!");
      });

      // user completed recording and stream is available
      this.player.on("finishRecord", () => {
        // the blob object contains the recorded data that
        // can be downloaded by the user, stored on server etc.
        console.log("finished recording: ", this.player.recordedData);
      });

      // error handling
      this.player.on("error", (element, error) => {
        console.warn(error);
      });

      this.player.on("deviceError", () => {
        console.error("device error:", this.player.deviceErrorCode);
      });
    });

    onBeforeUnmount(() => {
      if (player.value) {
        player.value.dispose();
      }
    });
  },
};
</script>

<style scoped>
</style>