<template>
  <MainContent>
    <main>
      <div class="py-0">
        <!-- <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li class="breadcrumb-item">
              <a href="#"><span class="fas fa-home"></span></a>
            </li>
            <li class="breadcrumb-item"><a href="#">Tangent</a></li>
            <li class="breadcrumb-item"><a href="#">Company</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ companyDetail.companyName }}
            </li>
          </ol>
        </nav> -->
        <div class="d-flex justify-content-between w-100 flex-wrap">
          <div class="mb-3 mb-lg-0">
            <!-- <h1 class="h4">Create major</h1>
              <p class="mb-0">Create new major</p> -->
          </div>
          <div>
            <a href="#" class="btn btn-outline-gray"
              ><i class="far fa-question-circle me-1"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container-fluid col-lg-12 mt-2">
          <div class="card shadow-lg mb-3">
            <div class="card-body d-sm-flex">
              <!-- Images avatar -->
              <div class="float-left col-sm-2">
                <img
                  :src="companyDetail.avatar"
                  class="user-avatar large-avatar rounded border"
                />
              </div>
              <div class="float-right col-sm-10 d-flex flex-column px-4">
                <!-- Div name of company -->
                <div class="float-right">
                  <h2 class="h5 ">{{ companyDetail.companyName }}</h2>
                </div>
                <!-- Bounce of information in Row 1 -->
                <div class="d-sm-flex">
                  <div class="float-left ">
                    <!-- Location -->
                    <i class="fas fa-map-marker-alt me-2" />
                    <label for="exampleFormControlInput1" class="form-label">
                      {{ companyDetail.address }}</label
                    >
                  </div>
                  <!-- Country -->
                  <div class="float-right px-6">
                    <i class="fas fa-globe-asia me-2" />
                    <label for="exampleFormControlInput2" class="form-label"
                      >Vietnam</label
                    >
                  </div>
                </div>
                <!-- Bounce of information in Row 2 -->
                <div class="d-sm-flex">
                  <!-- Specialize -->
                  <div class="float-left">
                    <i class="fas fa-toolbox me-2" />
                    <label for="exampleFormControlInput3" class="form-label"
                      >Outsourcing</label
                    >
                  </div>
                  <!-- Scale -->
                  <div class="justify-content-sm-center px-6">
                    <i class="fas fa-user-plus me-2" />
                    <label for="exampleFormControlInput3" class="form-label"
                      >30000</label
                    >
                  </div>
                  <!-- Salary -->
                  <div class="float-right mx-6">
                    <i class="fas fa-hand-holding-usd me-2" />
                    <label for="exampleFormControlInput3" class="form-label"
                      >Negotiable</label
                    >
                  </div>
                  <!-- Description -->
                  <div>
                    {{ companyDetail.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- List of Job Posts -->
          <div class="task-wrapper border bg-white shadow-sm rounded">
            <div
              class="card hover-state border-bottom rounded-0 rounded-top py-2"
              v-for="item in companyDetail.recruitmentPosts"
              :key="item.postId"
            >
              <div
                class="card-body d-sm-flex align-items-center flex-wrap flex-lg-nowrap py-0"
              >
                <!-- Div Form Checker -->
                <div class="col-1 text-left mb-2 mb-sm-0">
                  <div class="form-check check-lg inbox-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="ckb1"
                    />
                  </div>
                </div>
                <!-- End of Div Form Checker -->
                <!-- Div of Level -->
                <div class="col-2 text-left mb-2 mb-sm-0">
                  <div class="ms-sm-0 mb-5">
                    <span class="badge super-badge badge-lg bg-success">{{
                      item.level
                    }}</span>
                  </div>
                </div>
                <!-- End of Div Level -->
                <!-- Div of Job Contents -->
                <div class="col-9 col-lg-7 px-0 mb-4 mb-md-0">
                  <div
                    class="mb-2"
                    @click="handleClick(`/school/job-detail/${item.postId}`)"
                  >
                    <h3 class="h5">{{ item.title }}</h3>
                    <div class="d-block d-sm-flex">
                      <div class="badge super-badge bg-info">
                        <h4 class="h6 fw-normal text-white mb-3 mb-sm-0">
                          <span class="icon icon-small">
                            <span class="fas fa-hand-holding-usd"></span>
                          </span>
                          {{ item.minSalary }} - {{ item.maxSalary }}
                        </h4>
                      </div>
                    </div>
                    <div class="d-block d-sm-flex">
                      <h4 class="h6 fw-normal text-gray mb-3 mt-1 mb-sm-0">
                        <span class="icon icon-small">
                          <span class="fas fa-code"></span>
                        </span>
                        {{ item.jobDescription }}
                      </h4>
                    </div>
                  </div>
                </div>
                <!-- Div of Dropdown Button -->
                <div
                  class="col-10 col-sm-2 col-lg-2 col-xl-2 d-none d-lg-block d-xl-inline-flex align-items-center ms-lg-auto text-right justify-content-end px-md-0"
                >
                  <div class="btn-group ms-md-3">
                    <button
                      type="button"
                      class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="icon icon-sm">
                        <span class="fas fa-ellipsis-h icon-dark"></span>
                      </span>
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-end py-0"
                      style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(-170px, 26px);"
                      data-popper-placement="bottom-end"
                    >
                      <a class="dropdown-item rounded-top" href="#">
                        <span class="fas fa-edit"></span>Edit
                      </a>
                      <a
                        class="dropdown-item text-danger rounded-bottom"
                        href="#"
                        @click="handleDelete(jobItems)"
                      >
                        <span class="fas fa-trash-alt"></span>
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
                <!-- End of Dropdown Button -->
              </div>
              <!-- End of Job Contents -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </MainContent>
</template>

<script>
import { ref } from "vue";
import { mapGetters, mapActions } from "vuex";
import MainContent from "@/components/MainContent.vue";
import { useRouter, useRoute } from "vue-router";
import * as SchoolServices from "@/util/service/schoolService";

export default {
  name: "SchoolViewCompanyDetail",
  components: { MainContent },
  data: function() {
    const navItems = [
      { context: "Job Post", status: "active" },
      { context: "Unused Tab", status: "unactive" },
    ];
    var companyDetail = ref({});
    var jobItems = [
      // {
      //   jobTitle: "Technical Leader",
      //   salary: "Up to $3000",
      //   language: ".Net",
      //   level: "Technical Lead",
      // },
      // {
      //   jobTitle: ".NET Desktop Developer (Java, C#)",
      //   salary: "Up to $1500",
      //   language: ".Net, Java",
      //   level: "Junior",
      // },
      // {
      //   jobTitle: "Front-end",
      //   salary: "Up to $1200",
      //   language: "Vue, React",
      //   level: "Fresher/Intern",
      // },
      // {
      //   jobTitle: "Data Science",
      //   salary: "Up to $2500",
      //   language: "Python",
      //   level: "Senior",
      // },
      // {
      //   jobTitle: "Back-end",
      //   salary: "Up to $1200",
      //   language: "Python",
      //   level: "Fresher",
      // },
    ];
    var hover = false;
    return { navItems, jobItems, hover, companyDetail };
  },
  mounted() {
    this.initBreadCrumb();
  },
  computed: {
    ...mapGetters(["getBreadCrumb"]),
  },
  setup() {
    const router = useRouter();
    // const route = useRoute();
    // const companyIdFromRoute = Number(route.params.companyId);
    // const companyDetail = ref({});

    const handleClick = (url) => {
      router.push(url);
    };

    // const fetchCompanyDetails = async (companyId) => {
    //   this.companyDetail.value = await SchoolServices.getCompanyDetailsAsSchool(
    //     companyId
    //   );
    //   console.log(this.companyDetail.value);
    //   // SchoolServices.getListOfCompany(2)
    //   //   .then((res) => {
    //   //     companyDetail.value = res;
    //   //   })
    //   //   .catch((er) => {
    //   //     console.log("---------fetch-list-company---------", er);
    //   //   });
    // };

    // onMounted(() => {
    //   fetchCompanyDetails(companyIdFromRoute);
    // });

    return {
      handleClick,
    };
  },
  methods: {
    ...mapActions({ setBreadCrumb: "setBreadCrumb" }),
    handleDelete: function(index) {
      this.jobItems.splice(index, 1);
    },
    initBreadCrumb() {
      this.setBreadCrumb("");
      let pathArray = useRoute().path.split("/");
      pathArray.shift();
      // xử lý startCase
      pathArray.forEach((item, index) => {
        pathArray[index] = item[0].toUpperCase() + item.slice(1);
      });

      console.log("pathArray", pathArray);
      SchoolServices.getCompanyDetailsAsSchool(parseInt(pathArray[2]))
        .then((data) => {
          this.companyDetail = data;
          pathArray[2] = data.companyName;
          // lưu thành object: {name: "", href: {}}
          this.setBreadCrumb(pathArray);
        })
        .catch(() => {
          // window.location.href = "http://localhost:8080/404.html";
          // router.push("");
        });
    },
  },
};
</script>

<style scoped>
/* .company-bg-img {
  background: url("~@/assets/img/profile-cover.jpg");
} */
/* .d-flex .align-items-center {
  display: none !important;
} */
</style>
