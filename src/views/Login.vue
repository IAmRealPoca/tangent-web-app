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
            <a href="/" class="text-gray-700"
              ><i class="fas fa-angle-left me-2"></i> Back to homepage</a
            >
          </p>
          <div
            class="row justify-content-center form-bg-image"
            data-background-lg="@/assets/img/signin.svg"
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

                <!-- <span
                  class="fas text-danger ms-2"
                  title=""
                  data-bs-toggle="tooltip"
                ></span> -->
                <div class="d-flex justify-content-center my-4">
                  <button
                    class="btn btn-google mx-auto"
                    type="button"
                    @click="onClick"
                  >
                    <span class="me-1"
                      ><span class="fab fa-google-f"></span
                    ></span>
                    Login with Google
                  </button>
                </div>

                <p class="text-center">
                  <a href="/register" class="text-gray-700"
                    > Click here to
                    register.
                  </a>
                </p>
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
import { onMounted, ref, watchEffect } from "vue";
import { useLoginService } from "@/util/service/login";
import * as schoolService from "@/util/service/schoolService";
import * as employerService from "@/util/service/employerService";
import { getCurrEmployeeInfo } from "@/util/service/employeeService";
import { useStore } from "vuex";

export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const listOfSchools = ref([]);
    const selectedSchoolId = ref(0);
    const store = useStore();
    const loginService = useLoginService();
    //match typeId with RoleIdConstants in backend

    const userToken = sessionStorage.getItem("token");
    // console.log("user", userToken);

    onMounted(() => {
      schoolService.getListOfSchools().then((resp) => {
        listOfSchools.value = resp;
      });
      if (userToken) {
        router.push("/dashboard");
      }
      // this._setUser(user ? JSON.parse(user) : null);
    });

    async function onClick() {
      // selectedSchoolId.value = 3;
      // console.log("school: ", selectedSchoolId.value);

      // if (!selectedSchoolId.value || !selectedAccTypeId.value) {

      const resp = await loginService.loginGoogle(selectedSchoolId.value);
      sessionStorage.setItem("token", resp.token);
      console.log("usrResp: ", resp);
      console.log("usrResp Token ", parseJwt(resp.token));
      const usrResp = await fetchUserData(parseJwt(resp.token));
      // store.dispatch("setCurrentUserFlag", resp.flg);
      router.push("/dashboard");
    }

    const fetchUserData = async ({ role }) => {
      console.log("usrFlag :>> ", role);
      if (role === "employee") {
        const resp = await employeeService.getCurrEmployeeInfo();
        sessionStorage.setItem("userInfo", JSON.stringify(resp));
        store.commit("loginSuccess", resp);
      } else if (role === "employer") {
        const resp = await employerService.getCurrEmployerInfo();
        sessionStorage.setItem("userInfo", JSON.stringify(resp));
        store.commit("loginSuccess", resp);
      } else if (role === "school") {
        // sessionStorage.setItem("userInfo", JSON.stringify(resp));
        // store.commit("loginSuccess", resp);
      }
    };

    const parseJwt = (token) => {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    };

    return {
      //data
      listOfSchools,
      selectedSchoolId,
      //methods
      onClick,
    };
  },
};
</script>

<style scoped></style>
