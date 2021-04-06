<template>
  <!-- List of Job Posts -->
  <div class="task-wrapper border bg-white shadow-sm rounded">
    <div
      class="card hover-state border-bottom rounded-0 rounded-top py-2"
      v-for="item in listPost"
      :key="item"
    >
      <div
        class="card-body d-sm-flex align-items-center flex-wrap flex-lg-nowrap py-0"
      >
        <!-- Div Form Checker -->
        <div class="col-1 text-left mb-2 mb-sm-0">
          <div class="form-check check-lg inbox-check">
            <input class="form-check-input" type="checkbox" value="" />
          </div>
        </div>
        <!-- End of Div Form Checker -->
        <!-- Div of Level -->
        <div class="col-2 text-left mb-2 mb-sm-0">
          <div class="ms-sm-0 mb-5">
            <span class="badge super-badge badge-lg bg-success">
              <!-- {{ listPost.level }} -->
              level
            </span>
          </div>
        </div>
        <!-- End of Div Level -->
        <!-- Div of Job Contents -->
        <div class="col-9 col-lg-7 px-0 mb-4 mb-md-0">
          <div
            class="mb-2"
            @click="handleClick(`/school/job-detail/${item.postId}`)"
          >
            <h3 class="h5">
              <!-- {{ item.title }} -->
              Title
            </h3>
            <div class="d-block d-sm-flex">
              <div class="badge super-badge bg-info">
                <h4 class="h6 fw-normal text-white mb-3 mb-sm-0">
                  <span class="icon icon-small">
                    <span class="fas fa-hand-holding-usd"></span>
                  </span>
                  <!-- {{ item.minSalary }} - {{ item.maxSalary }} -->
                  Salary
                </h4>
              </div>
            </div>
            <div class="d-block d-sm-flex">
              <h4 class="h6 fw-normal text-gray mb-3 mt-1 mb-sm-0">
                <span class="icon icon-small">
                  <span class="fas fa-code"></span>
                </span>
                <!-- {{ item.jobDescription }} -->
                description
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
</template>

<script>
import { useRouter, useRoute } from "vue-router";

export default {
  name: "SchoolViewJobList",
  props: { listPost: [] },
  data: function() {
    const router = useRouter();
    const route = useRoute();
    return { router, route };
  },
  methods: {
    handleClick: function(url) {
      this.router.push(url);
    },
  },
};
</script>

<style scoped></style>
