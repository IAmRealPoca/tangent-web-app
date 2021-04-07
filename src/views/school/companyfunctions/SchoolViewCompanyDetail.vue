<template>
  <MainContent>
    <main>
      <div class="row">
        <div class="container-fluid col-lg-12 mt-2">
          <div class="card shadow-lg mb-3">
            <div class="row card-body d-sm-flex">
              <!-- Images avatar -->
              <div class="float-left col-sm-2">
                <img
                  :src="companyDetail.avatar"
                  class="user-avatar large-avatar rounded border"
                />
              </div>
              <div class="float-right col-sm-10 d-flex flex-column px-4">
                <!-- Div name of company -->
                <div>
                  <h3 class="h3 title">
                    {{ companyDetail.companyName }}
                  </h3>
                  <div class="float-right">
                    <button
                      type="button"
                      class="btn btn-success"
                      @click="handleClick(`/school/view-jobs`)"
                    >
                      See All Jobs
                    </button>
                  </div>
                </div>
                <!-- End of company name row -->
                <!-- Bounce of information in Row 1 -->
                <div class="d-sm-flex row">
                  <div class="float-left col">
                    <!-- Location -->
                    <label class="form-label">Address: </label>
                    <span class="mb-1 mt-1">
                      <!-- {{ companyDetail.address }} -->
                      09 Lô A ,phường Tân Chánh Hiệp, quận 9, TP. HCM, Việt Nam
                    </span>
                  </div>
                  <div class="float-left col">
                    <label class="form-label">Phone: </label>
                    <span>
                      +84 1566 8995
                    </span>
                  </div>
                </div>
                <!-- Bounce of information in Row 2 -->
                <div class="d-sm-flex row">
                  <div class="float-left col">
                    <label class="form-label">Industry: </label>
                    <span>
                      Outsourcing
                    </span>
                  </div>
                  <div class="float-left col">
                    <label class="form-label">Founded: </label>
                    <span>
                      2005
                    </span>
                  </div>
                </div>
                <!-- Bounce of information in Row 3 -->
                <div class="d-sm-flex row">
                  <div class="float-left col">
                    <label class="form-label">Company Size:</label>
                    <span for="exampleFormControlInput3" class="form-label">
                      30000 employees
                    </span>
                  </div>
                  <div class="float-left col">
                    <label class="form-label">Type:</label>
                    <span for="exampleFormControlInput3" class="form-label">
                      Public Company
                    </span>
                  </div>
                </div>
                <!-- Bounce of information in Row 4 -->
                <div class="d-sm-flex row">
                  <div class="float-left col">
                    <label class="form-label">Website: </label>&nbsp;
                    <span>
                      <a href="www.google.com">https://www.google.com</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End of Card Row -->
          </div>
          <!-- Div Details -->
          <div class="row mb-2">
            <div class="col-sm-8">
              <div class="card shadow-lg">
                <div class="card-header">
                  <h4 class="h4 title-description">About us</h4>
                </div>
                <div class="card-body">
                  ...
                </div>
                <hr />
                <div class="card-header">
                  <h4 class="h4 title-description">Specialties</h4>
                </div>
                <div class="card-body">
                  Ads, Business Analyst, Business Intelligence, Fresher React,
                  Junior DevOps,...
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card border-light shadow-sm">
                <div
                  class="card-body d-flex flex-row align-items-center flex-0 border-bottom"
                >
                  <h4 class="h4 title-description">Communicate Language</h4>
                </div>
                <div class="card-body">
                  <div class="progress-wrapper">
                    <div class="progress-info">
                      <span class="h4 progress-tooltip bg-primary">
                        English
                      </span>
                      <div class="progress-percentage">
                        <span>70%</span>
                      </div>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style="width: 70%;"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="progress-wrapper">
                    <div class="progress-info">
                      <span class="h4 progress-tooltip bg-success">
                        Vietnamese
                      </span>
                      <div class="progress-percentage">
                        <span>40%</span>
                      </div>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 25%;"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of div Details -->
          <div class="row">
            <div class="col-sm-8">
              <div class="card shadow-lg">
                <div class="card-header">
                  <h4 class="h4 title-description">Jobs Post</h4>
                </div>
                <div class="card-body">
                <SchoolViewJobList :listPost="companyDetail.recruitmentPosts"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </MainContent>
</template>

<script>
import { ref, onMounted } from "vue";
import MainContent from "@/components/MainContent.vue";
import SchoolViewJobList from "@/views/school/companyfunctions/SchoolViewJobList.vue";
import { useRouter, useRoute } from "vue-router";
import * as SchoolServices from "@/util/service/schoolService";

export default {
  name: "SchoolViewCompanyDetail",
  components: { MainContent, SchoolViewJobList },
  data: function() {
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
    return { jobItems, hover };
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const companyIdFromRoute = Number(route.params.companyId);
    const companyDetail = ref({});
    
    const handleClick = (url) => {
      router.push(url);
    };

    const fetchCompanyDetails = async (companyId) => {
      companyDetail.value = await SchoolServices.getCompanyDetailsAsSchool(
        companyId
      );
      // SchoolServices.getListOfCompany(2)
      //   .then((res) => {
      //     companyDetail.value = res;
      //   })
      //   .catch((er) => {
      //     console.log("---------fetch-list-company---------", er);
      //   });
    };

    onMounted(() => {
      fetchCompanyDetails(companyIdFromRoute);
    });

    return {
      companyDetail,
      handleClick,
      fetchCompanyDetails,
    };
  },
  methods: {
    handleDelete: function(index) {
      this.jobItems.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.sub-title {
  font-size: medium;
  color: black;
}
.title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  color: #5f2be3;
  text-shadow: 1px 2px 2px #aaaaaaa2;
  float: left;
}
.title-description {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  color: #2e2e2e;
  text-shadow: 1px 2px 2px #aaaaaaa2;
  float: left;
}
.btn {
  float: right;
}
</style>
