<template>
  <MainContent>
    <div class="container-sm col-12 mt-2">
      <div class="card shadow-sm mb-3">
        <div class="card-body d-sm-flex">
          <!-- Images avatar -->
          <div class="float-left col-sm-2">
            <img
              src="@/assets/img/fpt.png"
              class="user-avatar large-avatar rounded border"
            />
          </div>
          <div class="float-right col-sm-10 d-flex flex-column px-4">
            <!-- Div name of company -->
            <div class="float-right">
              <h2 class="h5 ">FPT Software</h2>
            </div>

            <!-- Bounce of information in Row 1 -->
            <div class="d-sm-flex">
              <div class="float-left ">
                <!-- Location -->
                <i class="fas fa-map-marker-alt me-2" />
                <label for="exampleFormControlInput1" class="form-label">
                  Ha Noi, Ho Chi Minh, Da Nang</label
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
            </div>
          </div>
        </div>
      </div>
      <!-- List of Job Posts -->
      <div class="card shadow-sm mb-4">
        <div class="card-body">
          <!-- Tab Nav -->
          <ul class="nav nav-tabs nav-fill flex-column flex-md-row">
            <li class="nav-item" v-for="item in navItems" :key="item.context">
              <a
                class="nav-link"
                v-bind:class="item.status"
                id="tabs-icons-text-1-tab"
                data-bs-toggle="tab"
              >
                {{ item.context }}
              </a>
            </li>
          </ul>

          <!-- End of Tab Nav -->
          <!-- Tab Contents -->
          <div class="card border-0">
            <div class="tab-content" id="tabcontent1">
              <div
                class="tab-pane fade show active"
                id="tabs-icons-text-1"
                role="tabpanel"
                aria-labelledby="tabs-icons-text-1-tab"
              >
                <div class="row">
                  <div
                    v-for="item in jobItems"
                    :key="item.jobTitle"
                    class="col-12 col-lg-4"
                  >
                    <div
                      class="card shadow-sm my-2"
                      @mouseover="hover = true"
                      @mouseleave="hover = false"
                    >
                      <div class="card-header">
                        <img
                          src="@/assets/img/fpt1_0.png"
                          class="card-img-top rounded py-2"
                          alt="blog image"
                        />
                        <div class="card-body">
                          <h5
                            class="h5 text-truncate"
                            @click="
                              handleClick(`/school/job-detail/${item.jobTitle}`)
                            "
                          >
                            {{ item.jobTitle }}
                          </h5>
                          <h6 class="h6 mb-1">
                            <span class="icon icon-small"
                              ><span class="fas fa-dollar-sign"> </span>
                            </span>
                            {{ item.salary }}
                          </h6>
                          <div class="small mb-2">
                            <span class="icon icon-small"
                              ><span class="fas fa-code"> </span>
                            </span>
                            {{ item.position }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of Tab Contents -->
        </div>
      </div>
    </div>
  </MainContent>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import { useRouter } from "vue-router";

export default {
  name: "SchoolViewCompanyDetail",
  components: { MainContent },
  data: function() {
    var navItems = [
      { context: "Job Post", status: "active" },
      { context: "Unused Tab", status: "unactive" },
    ];

    var jobItems = [
      {
        jobTitle: "Technical Leader",
        salary: "Up to $3000",
        position: ".Net",
      },
      {
        jobTitle: ".NET Desktop Developer (Java, C#)",
        salary: "Up to $1500",
        position: "Junior .Net, Java",
      },
      {
        jobTitle: "Front-end",
        salary: "Up to $1200",
        position: "Fresher/Intern Vue, React",
      },
    ];
    var hover = false;
    return { navItems, jobItems, hover };
  },
  setup() {
    const router = useRouter();

    const handleClick = (url) => {
      router.push(url);
    };
    return {
      handleClick,
    };
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
