<template>
  <div>
    <MainContent>
      <div class="py-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li class="breadcrumb-item">
              <a href="#"><span class="fas fa-home"></span></a>
            </li>
            <li class="breadcrumb-item"><a href="#">Components</a></li>
            <li class="breadcrumb-item active" aria-current="page">Forms</li>
          </ol>
        </nav>
        <div class="d-flex justify-content-between w-100 flex-wrap">
          <div class="mb-3 mb-lg-0">
            <h1 class="h4">Create job</h1>
            <p class="mb-0">Create new job</p>
          </div>
          <div>
            <a href="#" class="btn btn-outline-gray"
              ><i class="far fa-question-circle me-1"></i> Forms Docs</a
            >
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Video section -->
        <div class="col-12 col-xl-9">
          <div class="card border-light shadow-sm components-section mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <details>
                      <summary>Test Video Size</summary>
                      <p>Here we go</p>
                      <img
                        src="@/assets/img/z2358820138055_341c257ff575934f26613727fee0cb8e.jpg"
                        alt="Xoa xoa cl"
                      />
                    </details>
                  </div>
                  <!-- Tri-state area -->
                  <div class="row nav-wrapper position-relative">
                    <div
                      class="nav nav-pills nav-pill-circle mb-3 col"
                      id="tab-34"
                      role="tablist"
                    >
                      <div class="nav-item me-3 me-md-0">
                        <a
                          class="nav-link text-sm-center active"
                          aria-label="first navigation tab"
                          id="tab-link-example-13"
                          data-bs-toggle="tab"
                          href=""
                          role="tab"
                          aria-controls="link-example-13"
                          aria-selected="true"
                        >
                          <span class="nav-link-icon d-block"
                            ><span class="fas fa-video"></span
                          ></span>
                        </a>
                      </div>
                    </div>
                    <div
                      class="nav nav-pills nav-pill-circle mb-3 col"
                      id="tab-34"
                      role="tablist"
                    >
                      <div class="nav-item me-3 me-md-0">
                        <a
                          class="nav-link text-sm-center"
                          aria-label="first navigation tab"
                          id="tab-link-example-13"
                          data-bs-toggle="tab"
                          href=""
                          role="tab"
                          aria-controls="link-example-13"
                          aria-selected="true"
                        >
                          <span class="nav-link-icon d-block"
                            ><span class="fas fa-camera"></span
                          ></span>
                        </a>
                      </div>
                    </div>
                    <div
                      class="nav nav-pills nav-pill-circle mb-3 col"
                      id="tab-34"
                      role="tablist"
                    >
                      <div class="nav-item me-3 me-md-0">
                        <a
                          class="nav-link text-sm-center"
                          aria-label="first navigation tab"
                          id="tab-link-example-13"
                          data-bs-toggle="tab"
                          href=""
                          role="tab"
                          aria-controls="link-example-13"
                          aria-selected="true"
                        >
                          <span class="nav-link-icon d-block"
                            ><span class="fas fa-microphone-slash"></span>
                          </span>
                          <span class="sr-only">Mute</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- End tri-state area -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End video section -->
        <!-- Right list -->
        <div class="col-12 col-xl-3">
          <div class="card border-light shadow-sm components-section mb-4">
            <!-- Header is nav bar -->
            <div class="card-header pb-0">
              <div class="row pt-0">
                <nav>
                  <div class="nav nav-tabs mb-4" id="nav-tab" role="tablist">
                    <a
                      class="nav-item nav-link active col-lg-6"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      ><span class="nav-link-icon d-block"
                        ><span class="far fa-user"></span> </span
                    ></a>
                    <a
                      class="nav-item nav-link col-lg-6"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      ><span class="nav-link-icon d-block"
                        ><span class="far fa-question-circle"></span> </span
                    ></a>
                  </div>
                </nav>
              </div>
            </div>
            <!-- Body is nav content -->
            <div class="card-body">
              <div class="tab-content" id="nav-tabContent">
                <!-- Begin nav 1 -->
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div class="row">
                    <div v-for="item in 9" :key="item" class="col-12 col-lg-6">
                      <div class="mx-0 my-4 py-0 px-0">
                        <a href="#">
                          <img
                            v-if="Math.floor(Math.random() * 100 + 1) > 70"
                            src="@/assets/img/gloriousSuccess1.gif"
                            class="card-img-top rounded py-2"
                            alt="blog image"
                          />
                          <img
                            v-else
                            src="@/assets/img/gloriousSuccess2.gif"
                            class="card-img-top rounded py-2"
                            alt="blog image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End nav 1 -->
                <!-- Begin nav 2 -->
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div class="row" v-for="f in 10" :key="f">
                    <div
                      class="card border-light shadow-sm align-item-center mb-4"
                    >
                      <div class="card-body">
                        <div class="row">
                          <div class="col-4">
                            <a href="#">
                              <img
                                class="avatar-sm me-2 rounded-circle"
                                src="https://picsum.photos/id/237/200/300"
                                alt="avatar"
                              />
                            </a>
                          </div>
                          <div class="col-8">
                            <a href="#"><h3 class="h6">Little T</h3></a>
                            <div class="small fw-bold mt-1">
                              Can I finish Openvidu in today?
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End nav 2 -->
              </div>
            </div>
          </div>
        </div>
        <!-- End right list -->
      </div>
    </MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
export default {
  name: "EmployerPresentation",
  components: {
    MainContent,
  },
};
</script>

<style scoped>
</style>