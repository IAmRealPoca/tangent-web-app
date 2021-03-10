<template>
  <MainContent>
    <div class="row mt-4 mb-3">
      <div class="col-6 d-flex justify-content-between ps-0">
        <!-- Optional Button -->
      </div>
      <!-- Div buttons group -->
      <div class="col-6 px-3 text-right">
        <div class="btn-group">
          <button class="btn btn-dark text-white">
            <span class="fas fa-archive"></span>
          </button>
          <button class="btn btn-dark text-white">
            <span class="fas fa-trash-alt"></span>
          </button>
        </div>
      </div>
      <!-- End of Buttons group -->
    </div>
    <!-- Left Panel -->
    <div class="row my-4">
      <div class="col-12 col-lg-8">
        <div class="card shadow-sm text-center py-1 mb-1 mb-lg-0">
          <div class="card-header d-flex">
            <h5 class="h5 float-left">Title of Job Post</h5>
          </div>
          <div class="row card-body d-sm-flex">
            <h6 class="text-left pb-1">Job Description</h6>
            <div class="content text-left pw-2 pb-1">
              {{ content.p }}
            </div>
            <hr />
            <h6 class="text-left pb-1">Your Skills and Experience</h6>
            <div class="content text-left pw-2">{{ content.p }}</div>
          </div>
        </div>
      </div>
      <!-- End of Left Panel -->
      <!-- Right Panel -->
      <div class="col-12 col-lg-4">
        <div class="card shadow-sm text-center py-1 mb-lg-0">
          <img src="@/assets/img/fpt1_0.png" />
          <hr />
          <div class="row card-body py-0 d-sm-flex">
            <div class="text-center"><h5>FPT Software</h5></div>
            <div class="text-center">
              <span class="font-weight-light"
                >The leading provider of software outsourcing services in
                Vietnam</span
              >
              <hr />
              <div><h3>Company Information</h3></div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Right Panel -->
    </div>
  </MainContent>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
export default {
  name: "SchoolViewJobDetail",
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

    var content = [
      {
        p:
          "<ul><li>Ít nhất 10 năm kinh nghiệm trong lĩnh vực software</li><li>5 năm làm vị trí SA</li><li>Nắm rõ các kiến thức nền tảng với các layer từ Hardware => OS => Infra => Application System, Middleware => Application</li><li>Nắm rõ cách thức hoạt động của 1 hệ thống phần mềm, mối liên hệ giữa các layer như trên</li><li>Nắm rõ quy trình phần mềm, estimation, các quy trình testing</li><li>Có kinh nghiệm làm trong nhiều hệ thống khác nhau</li></ul>",
      },
    ];
    return { navItems, jobItems, content };
  },
};
</script>

<style>
/* #nav-searchbar {
  display: none !important;
} */
/* #navbarSupportedContent {
  float: right !important;
} */
</style>
