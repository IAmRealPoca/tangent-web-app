<template>
  <div>
    <MainContent>
      <main>
        <div class="py-2">
          <div class="d-flex justify-content-between w-100 flex-wrap">
            <div class="mb-3 mb-lg-0">
              <h1 class="h4">Edit job</h1>
              <p class="mb-0">Edit your current job</p>
            </div>
          </div>
        </div>

        <div class="row" v-if="Object.keys(employerProfile).length > 0">
          <div class="col-12 col-xl-4">
            <div class="card text-center p-0 mb-4">
              <div
                class="profile-cover rounded-top"
                background="@/assets/img/profile-cover.jpg"
              ></div>
              <div class="card-body pb-5">
                <img
                  :src="employerProfile.avatar"
                  class="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
                  alt="Neil Portrait"
                />
                <h4 class="h3">{{ employerProfile.name }}</h4>

                <p class="text-gray mb-4">
                  <span class="fas fa-map-marker-alt me-1"></span
                  >{{ employerProfile.address }}
                </p>
                <a class="btn btn-sm btn-dark me-2" href="#"
                  ><span class="fas fa-wrench me-1"></span> Edit profile
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-8">
            <div class="card text-center">
              Place some info
            </div>
          </div>
        </div>
        <div class="card text-center p-0 mb-4" v-else>
          <div class="card-body">
            <div class="spinner-border spinner-border-sm" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import MainContent from "@/components/MainContent.vue";

import * as employerService from "@/util/service/employerService";

export default {
  name: "EmployerProfile",
  components: {
    MainContent,
  },
  setup() {
    const employerProfile = ref({});

    const token = sessionStorage.getItem("token");

    onMounted(() => {
      employerService.getCurrEmployerInfo().then((resp) => {
        employerProfile.value = resp;
      });
    });

    return {
      employerProfile,
    };
  },
};
</script>

<style scoped></style>
