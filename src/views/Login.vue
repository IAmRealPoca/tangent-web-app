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
                <form action="#" class="mt-4">
                  <div class="form-group mb-4">
                    <label for="email">Your Email</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1"
                        ><span class="fas fa-envelope"></span
                      ></span>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="example@company.com"
                        id="email"
                        autofocus
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-group mb-4">
                      <label for="password">Your Password</label>
                      <div class="input-group">
                        <span class="input-group-text" id="basic-addon2"
                          ><span class="fas fa-unlock-alt"></span
                        ></span>
                        <input
                          type="password"
                          placeholder="Password"
                          class="form-control"
                          id="password"
                          required
                        />
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-between align-items-top mb-4"
                    >
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="remember"
                        />
                        <label class="form-check-label mb-0" for="remember"
                          >Remember me</label
                        >
                      </div>
                      <div>
                        <a href="forgot-password.html" class="small text-right"
                          >Lost password?</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-dark">Sign in</button>
                  </div>
                </form>
                <div class="mt-3 mb-4 text-center">
                  <span class="fw-normal">or login with</span>
                </div>
                <div class="d-flex justify-content-center my-4">
                  <a
                    href="#"
                    class="btn btn-icon-only btn-pill btn-outline-gray-400 text-facebook me-2"
                    type="button"
                    aria-label="facebook button"
                    title="facebook button"
                    ><span
                      aria-hidden="true"
                      class="fab fa-facebook-f"
                    ></span> </a
                  ><a
                    href="#"
                    class="btn btn-icon-only btn-pill btn-outline-gray-400 text-twitter me-2"
                    type="button"
                    aria-label="twitter button"
                    title="twitter button"
                    ><span aria-hidden="true" class="fab fa-twitter"></span> </a
                  ><a
                    href="#"
                    class="btn btn-icon-only btn-pill btn-outline-gray-400 text-facebook"
                    type="button"
                    aria-label="github button"
                    title="github button"
                    ><span aria-hidden="true" class="fab fa-github"></span
                  ></a>
                </div>
                <div
                  class="d-flex justify-content-center align-items-center mt-4"
                >
                  <span class="fw-normal"
                    >Not registered?
                    <a href="sign-up.html" class="fw-bold"
                      >Create account</a
                    ></span
                  >
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
import {useRouter} from "vue-router";
import { onMounted, ref } from "vue";
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
        typeId: 1,
        typeName: "Employee",
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
    const user = sessionStorage.getItem("token");
    console.log("user", user);

    if (user) {
      router.push("/home");
    }
    onMounted(() => {
      console.log("Mason Mounted");

      schoolService.getListOfSchools().then((resp) => {
        listOfSchools.value = resp;
      });

      // this._setUser(user ? JSON.parse(user) : null);
    });
    function onClick() {
      console.log("school: ", selectedSchoolId.value);
      console.log("acc type: ", selectedAccTypeId.value);

      // if (!selectedSchoolId.value || !selectedAccTypeId.value) {
        const alwaysTrueFuckYouTypescipt = 1 + 1;
      if (alwaysTrueFuckYouTypescipt !== 2) {
        noti.openToast(
          "Please fill all required info (School, Account type)",
          true
        );
      } else {
        loginService(selectedSchoolId.value, selectedAccTypeId.value)
          .then((resp) => {
            // console.log(resp.token);
            sessionStorage.setItem("token", resp.token);
            store.dispatch("setCurrentUserFlag", resp.flg);
            router.push("/home");
            noti.openToast("Login successfully", false);
          })
          .catch((err) => {
            console.log(err);
            noti.openToast("Login failed", true);
          });
      }
    }
    const onChange = () => {
      console.log("Normal trigger");
      console.log("value ", selectedSchoolId.value);

      console.log(event);
    };

    const onClickToOpenVidu = () => {
      return "/vc";
    };

    const bgColour = `--ion-background-color: #f6f5f7`;
    return {
      //data
      listOfAccountType,
      listOfSchools,
      selectedSchoolId,
      selectedAccTypeId,
      bgColour,
      //methods
      onClick,
      onChange,
      onClickToOpenVidu,
    };
  },
}
</script>

<style scoped>

</style>