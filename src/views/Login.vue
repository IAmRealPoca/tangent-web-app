<template>
  <div>
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-THQTXJ7"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
    <main>
      <section class="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <div class="container">
          <p class="text-center">
            <a href="../dashboard/dashboard.html" class="text-gray-700"
              ><i class="fas fa-angle-left me-2"></i> Back to homepage</a
            >
          </p>
          <div
            class="row justify-content-center form-bg-image"
            data-background-lg="https://demo.themesberg.com/volt-pro/assets/img/illustrations/signin.svg"
          >
            <div
              class="col-12 d-flex align-items-center justify-content-center"
            >
              <div
                class="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500"
              >
                <div class="text-center text-md-center mb-4 mt-md-0">
                  <h1 class="mb-0 h3">Sign in to our platform</h1>
                </div>
                <div class="btn-group me-2 mb-2">
                  <button type="button" class="btn btn-primary center">
                    {{ selectedAccTypeString }}
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-angle-down dropdown-arrow"></i>
                    <span class="sr-only">\/</span>
                  </button>
                  <div class="dropdown-menu">
                    <div
                      class="dropdown-item"
                      @click="selectedAccTypeId = accType.typeId"
                      v-for="(accType, index) in listOfAccountType"
                      :key="index"
                    >
                      {{ accType.typeName }}
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center my-4">
                  <button
                    class="btn btn-google me-3 mb-3"
                    type="button"
                    @click="onClick"
                  >
                    <span class="me-1"
                      ><span class="fab fa-google-f"></span
                    ></span>
                    Login with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { loginService } from "@/util/service/login";
import * as schoolService from "@/util/service/schoolService";

export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const listOfSchools = ref([]);
    const selectedSchoolId = ref();
    //match typeId with RoleIdConstants in backend
    const listOfAccountType = [
      {
        typeId: 0,
        typeName: "Admin",
      },
      {
        typeId: 2,
        typeName: "Employer",
      },
      {
        typeId: 4,
        typeName: "School",
      },
    ];
    const selectedAccTypeId = ref();
    const selectedAccTypeString = ref();
    const user = sessionStorage.getItem("token");
    console.log("user", user);

    if (user) {
      router.push("/");
    }
    onMounted(() => {
      console.log("Mason Mounted");

      schoolService.getListOfSchools().then((resp) => {
        listOfSchools.value = resp;
      });

      // this._setUser(user ? JSON.parse(user) : null);
    });

    selectedAccTypeString.value = "[Select type]";
    watch((selectedAccTypeId) => {
      if (selectedAccTypeId.value === 0) {
        selectedAccTypeString.value = "Admin";
      }
      if (selectedAccTypeId.value === 2) {
        selectedAccTypeString.value = "Employer";
      }
      if (selectedAccTypeId.value === 4) {
        selectedAccTypeString.value = "School";
      }
    });

    function onClick() {
      selectedSchoolId.value = 1;
      console.log("school: ", selectedSchoolId.value);
      console.log("acc type: ", selectedAccTypeId.value);

      // if (!selectedSchoolId.value || !selectedAccTypeId.value) {

      loginService(selectedSchoolId.value, selectedAccTypeId.value)
        .then((resp) => {
          // console.log(resp.token);
          sessionStorage.setItem("token", resp.token);
          // store.dispatch("setCurrentUserFlag", resp.flg);
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const onChange = () => {
      console.log("Normal trigger");
      console.log("value ", selectedSchoolId.value);

      console.log(event);
    };

    const onClickToOpenVidu = () => {
      return "/vc";
    };
    return {
      //data
      listOfAccountType,
      listOfSchools,
      selectedSchoolId,
      selectedAccTypeId,
      selectedAccTypeString,
      //methods
      onClick,
      onChange,
      onClickToOpenVidu,
    };
  },
};
</script>

<style scoped>
</style>