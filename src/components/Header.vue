<template>
  <div>
    <nav
      class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0"
    >
      <div class="container-fluid px-0">
        <div
          class="d-flex justify-content-between w-100"
          id="navbarSupportedContent"
        >
          <div class="d-flex align-items-center">
            <button
              id="sidebar-toggle"
              @click="contracted"
              class="sidebar-toggle me-3 btn btn-icon-only btn-lg btn-circle d-none d-md-inline-block"
            >
              <span class="fas fa-bars"></span>
            </button>
          </div>
          <ul class="navbar-nav align-items-center" v-if="user">
            <li class="nav-item dropdown">
              <a
                class="nav-link text-dark me-lg-3 icon-notifications dropdown-toggle"
                :class="{ show: isToggled }"
                @click="showNoti"
                data-unread-notifications="true"
                ref="notibell"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                ><span class="icon icon-sm"
                  ><span class="fas fa-bell bell-shake"></span>
                  <span
                    class="icon-badge rounded-circle unread-notifications"
                  ></span></span
              ></a>
              <div
                class="dropdown-menu dashboard-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0"
              >
                <div class="list-group list-group-flush">
                  <a
                    href="#"
                    class="text-center text-primary fw-bold border-bottom border-light py-3"
                    >Notifications</a
                  >
                  <a
                    href="../calendar.html"
                    class="list-group-item list-group-item-action border-bottom border-light"
                  >
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <img
                          alt="Image placeholder"
                          src="@/assets/img/tangent.png"
                          class="user-avatar lg-avatar rounded-circle"
                        />
                      </div>
                      <div class="col ps-0 ms-2">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <h4 class="h6 mb-0 text-small">Jose Leos</h4>
                          </div>
                          <div class="text-end">
                            <small class="text-danger">a few moments ago</small>
                          </div>
                        </div>
                        <p class="font-small mt-1 mb-0">
                          {{ notification.msg }}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle pt-1 px-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="media d-flex align-items-center">
                  <img
                    class="user-avatar md-avatar rounded-circle"
                    alt="Image placeholder"
                    :src="user.avatar"
                  />
                  <div
                    class="media-body ms-2 text-dark align-items-center d-none d-lg-block"
                  >
                    <span class="mb-0 font-small fw-bold">{{ user.name }}</span>
                  </div>
                </div>
              </a>
              <div
                class="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-0"
              >
                <a class="dropdown-item rounded-top fw-bold" href="#">
                  <span class="far fa-user-circle"></span>
                  My Profile
                </a>
                <a class="dropdown-item fw-bold" href="#">
                  <span class="fas fa-cog"></span>
                  Settings
                </a>
                <a class="dropdown-item fw-bold" href="#">
                  <span class="fas fa-envelope-open-text"></span>
                  Messages
                </a>
                <a class="dropdown-item fw-bold" href="#">
                  <span class="fas fa-user-shield"></span>
                  Support
                </a>
                <div role="separator" class="dropdown-divider my-0"></div>
                <a class="dropdown-item rounded-bottom fw-bold" href="#">
                  <span class="fas fa-sign-out-alt text-danger"></span>
                  Logout
                </a>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav align-items-center" v-if="!user">
            <button
              class="btn btn-outline-gray-700"
              type="button"
              @click="handleLoginClick"
            >
              Login
            </button>
          </ul>
        </div>
      </div>
    </nav>
    <Breadcrumb />
  </div>
</template>

<script>
import { onMounted, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useSignalR } from "@/util/signalr/signalrutil";
import { useParseJwt } from "@/util/parseJwt";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "Header",
  components: { Breadcrumb },
  setup() {
    const router = useRouter();
    const signalr = useSignalR();

    const notification = reactive({
      isNoti: false,
      msg: "",
    });
    const bellShake = ref(null);
    const notibell = ref(null);
    // unreadNotifications.style.display = "none";
    const unreadDisplay = ref(null);

    const jwtParser = useParseJwt();
    const userInfoToken = jwtParser.parseJwt(sessionStorage.getItem("token"));
    const hub = signalr.hubConnect(userInfoToken.sub);
    hub.on("noti", (msg) => {
      console.log(msg);
      notification.isNoti = true;
      notification.msg = msg;
      if (bellShake.value) {
        console.log("bellshake");
        bellShake.value.setAttribute("data-unread-notifications", true);
        if (unreadDisplay.value) {
          unreadDisplay.value.style.display = "block";
        }
        console.log(bellShake.value);
      }
      if (notibell.value) {
        console.log("notibell");
        notibell.value.setAttribute("data-unread-notifications", true);
        console.log(notibell.value);
      }
    });

    const handleLoginClick = () => {
      router.push("/login");
    };
    const store = useStore();

    const userFromStorage = sessionStorage.getItem("userInfo");
    userFromStorage
      ? store.commit("loginSuccess", userFromStorage)
      : store.commit("logOut");

    const user = JSON.parse(store.state.userInfo);
    // const user = store.state.userInfo;

    // function parseJwt(token) {
    //   var base64Url = token.split(".")[1];
    //   var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    //   var jsonPayload = decodeURIComponent(
    //     atob(base64)
    //       .split("")
    //       .map(function(c) {
    //         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    //       })
    //       .join("")
    //   );
    const isToggled = ref(false);
    const showNoti = () => {
      console.log('Something :>> ', notibell.value);
      isToggled = !isToggled;
      console.log("isToggled :>> ", isToggled);
    };

    const contracted = () => {
      store.commit("contract");
    };

    const userName = ref({});

    onMounted(() => {});

    return {
      userName,
      user,
      contracted,
      showNoti,
      handleLoginClick,
      notification,
    };
  },
};
</script>

<style scoped></style>
