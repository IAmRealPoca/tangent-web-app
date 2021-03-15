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
    <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
      <a class="navbar-brand me-lg-5" href="/"
        ><img
          class="navbar-brand-dark"
          src="@/assets/img/logo.svg"
          alt="Volt logo"/>
        <img
          class="navbar-brand-light"
          src="@/assets/img/logo.svg"
          alt="Volt logo"
      /></a>
      <div class="d-flex align-items-center">
        <button
          class="navbar-toggler d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <nav
      id="sidebarMenu"
      class="sidebar d-md-block bg-dark text-white collapse"
      data-simplebar
    >
      <div class="sidebar-inner px-4 pt-3">
        <div
          class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4"
        >
          <div class="d-flex align-items-center">
            <div class="user-avatar lg-avatar me-4">
              <img
                src="@/assets/img/team/profile-picture-3.jpg"
                class="card-img-top rounded-circle border-white"
                alt="Bonnie Green"
              />
            </div>
            <div class="d-block">
              <h2 class="h6">Hi, Jane</h2>
              <a
                href="../examples/sign-in.html"
                class="btn btn-secondary text-dark btn-xs"
                ><span class="me-2"
                  ><span class="fas fa-sign-out-alt"></span></span
                >Sign Out</a
              >
            </div>
          </div>
          <div class="collapse-close d-md-none">
            <a
              href="#sidebarMenu"
              class="fas fa-times"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="true"
              aria-label="Toggle navigation"
            ></a>
          </div>
        </div>
        <ul class="nav flex-column pt-3 pt-md-0">
          <li class="nav-item">
            <a href="/dashboard" class="nav-link d-flex align-items-center"
              ><span class="sidebar-icon"
                ><img
                  src="@/assets/img/logo.svg"
                  height="20"
                  width="20"
                  alt="Volt Logo"
                /> </span
              ><span class="mt-1 sidebar-text">Tangent App</span></a
            >
          </li>
          <div v-for="(menuItem, index) in menuItems" :key="index">
            <li class="nav-item" v-if="menuItem.subItem.length > 0">
              <span
                class="nav-link d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#submenu-dashboard"
                ><span
                  ><span class="sidebar-icon"
                    ><span class="fas fa-chart-pie"></span
                  ></span>
                  <span class="sidebar-text">{{ menuItem.title }}</span> </span
                ><span class="link-arrow"
                  ><span class="fas fa-chevron-right"></span></span
              ></span>
              <div
                class="multi-level collapse show"
                role="list"
                id="submenu-dashboard"
                aria-expanded="false"
              >
                <ul class="flex-column nav">
                  <li
                    class="nav-item active"
                    v-for="(subMenuItem, index2) in menuItem.subItem"
                    :key="index2"
                  >
                    <a :href="subMenuItem.url" class="nav-link"
                      ><span class="sidebar-text-contracted">O</span>
                      <span class="sidebar-text">{{
                        subMenuItem.title
                      }}</span></a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" v-else>
              <a
                :href="menuItem.url"
                class="nav-link d-flex align-items-center justify-content-between"
                ><span
                  ><span class="sidebar-icon"
                    ><span class="fas fa-th"></span
                  ></span>
                  <span class="sidebar-text">{{ menuItem.title }}</span></span
                ></a
              >
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "LeftNavbar",
  data: () => ({
    menuItems: [
      {
        icon: "",
        title: "Dashboard",
        url: "/",
        subItem: [],
      },

      {
        title: "Jobs",
        url: "/employer/jobs",
        subItem: [],
      },
      {
        title: "Applicants",
        url: "/employer/applicants",
        subItem: [],
      },
      {
        title: "Job Fair",
        url: "/employer/jobfair",
        subItem: [],
      },
      {
        title: "Schools",
        url: "/employer/schools",
        subItem: [],
      },
      {
        title: "School",
        url: "/school",
        subItem: [
          {
            title: "Company List",
            url: "/school/company",
          },
          {
            title: "Major List",
            url: "/school/majors",
          },
          {
            title: "Students",
            url: "/school/student",
          },
          {
            title: "Job Fair",
            url: "/school/jobfair",
          },
        ],
      },
      {
        title: "Student",
        url: "/student",
        subItem: [
          {
            title: "CV",
            url: "/student/cv",
          },
          // {
          //   title: "CV Detail",
          //   url: "/student/cv-detail",
          // },
          {
            title: "Cover Letter",
            url: "/student/cover-letter",
          },
        ],
      },
    ],
  }),
  props: {
    role: String,
  },
};
</script>

<style scoped></style>
