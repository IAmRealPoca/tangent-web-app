<template>
  <div v-if="streamManager">
    <div class="row">
      <!-- Video section -->
      <div class="col-12 col-xl-9">
        <div class="card border-light shadow-sm components-section mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-12 text-center">
                <div class="row">
                  <div v-if="data.publisher">
                    <video-player :stream-manager="props.streamManager" />
                  </div>
                </div>
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
            </div>
          </div>
        </div>
      </div>
      <!-- End video section -->
      <!-- Right list -->
      <div class="col-12 col-xl-3">
        <div class="card border-light shadow-sm components-section mb-4">
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
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div class="row">
                  <div v-if="data.subscribers">
                    <div
                      class="col-12 col-lg-6"
                      v-for="sub in data.subscribers"
                      :key="sub.stream.connection.connectionId"
                    >
                      <video-player
                        :stream-manager="sub"
                        @click="updateMainStream(sub)"
                      />
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
                <div class="row" v-for="f in 10" :key="f">
                  <div
                    class="card border-light shadow-sm align-item-center mb-4"
                  >
                    <div class="card-body">
                      <div class="row">
                        <div class="col-4">
                          <a href="#">
                            <img
                              class="avatar-sm me-2 rounded-circle"
                              src="https://picsum.photos/id/237/200/300"
                              alt="avatar"
                            />
                          </a>
                        </div>
                        <div class="col-8">
                          <a href="#"><h3 class="h6">Little T</h3></a>
                          <div class="small fw-bold mt-1">
                            Can I finish Openvidu in today?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End nav 2 -->
            </div>
          </div>
        </div>
      </div>
      <!-- End right list -->
    </div>
  </div>
</template>

<script>
import { defineEmit, defineProps } from "vue";
export default {
  name: "EmployerPresentation",
  emits: ["updateStream"],
};
</script>
<script setup>
import VideoPlayer from "@/components/ViduComponent/VideoPlayer.vue";
const emits = defineEmit(["endCallEvent", "updateStream"]);
const props = defineProps({
  streamManager: {
    type: Object,
  },
  data: {},
});
const endCall = () => {
  emits("endCallEvent");
};
const updateMainStream = (sub) => {
  emits("updateStream", sub);
};
</script>

<style scoped></style>
