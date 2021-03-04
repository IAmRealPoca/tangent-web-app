<template>
  <MainContent>
    <div class="container-sm col-12 mt-2">
      <div class="card shadow-sm mb-3">
        <div class="card-body d-sm-flex">
          <!-- Images avatar -->
          <div class="float-left col-sm-2">
            <img
              src="@/assets/img/team/profile-picture-4.jpg"
              class="user-avatar large-avatar rounded"
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
              <div class="float-right mx-6">
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
              >
                {{ item.context }}
              </a>
            </li>
          </ul>

          <!-- End of Tab Nav -->
          <div class="card border-0 mt-4">
            <div class="tab-content" id="tabcontent1">
              <div
                class="tab-pane fade show active"
                id="tabs-icons-text-1"
                role="tabpanel"
                aria-labelledby="tabs-icons-text-1-tab"
              >
                <p>
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                  Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
                  readymade swag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainContent>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
export default {
  name: "SchoolViewCompanyDetail",
  components: { MainContent },
  data: function() {
    var navItems = [
      { context: "Job Post", status: "active" },
      { context: "Pending Post", status: "unactive" },
    ];
    return { navItems };
  },
};
</script>

<style scoped>
.company-bg-img {
  background: url("~@/assets/img/profile-cover.jpg");
}
/* .d-flex .align-items-center {
  display: none !important;
} */
</style>
