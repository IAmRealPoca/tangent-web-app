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
        <input type="button" value="Call" @click="joinSession" />
        <div v-if="data.session">
          <div class="col-12 mb-4">
            <div class="card border-light shadow-sm components-section">
              <div class="card-body">
                <div class="row">
                  <div class="col-7">
                    <div v-if="data.publisher">
                      <div>ABCD</div>
                      <video-player :streamManager="data.mainStreamManager" />
                    </div>
                  </div>
                  <div>ACD Under Pubs</div>
                  <div v-if="data.subscribers">
                    <div
                      class="col-5"
                      v-for="sub in data.subscribers"
                      :key="sub.stream.connection.connectionId"
                    >
                      <div>ABCDEF</div>
                      <video-player
                        :streamManager="data.mainStreamManager"
                        @click="OV.updateMainVideoStreamManager"
                      />
                    </div>
                  </div>
                </div>
                <input type="button" value="Bye bye" @click="OV.leaveSession" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";

import { OVUtil } from "@/util/viduUtil/OVUtil";
import { ref } from "@vue/reactivity";
import VideoPlayer from "@/components/ViduComponent/VideoPlayer.vue";

export default {
  name: "EmployerCreateBooth",
  components: {
    MainContent,
    VideoPlayer,
  },
  setup() {
    const OV = OVUtil();
    const data = ref({
      OV: undefined,
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],
      mySessionId: "NyamSed",
      myUserName: "Participant" + Math.floor(Math.random() * 100),
    });
    const joinSession = () => {
      data.value = OV.joinSession(data.value);
      console.log("Data check: ", data.value);
    };
    return { data, joinSession, OV };
  },
};
</script>

<style scoped></style>
