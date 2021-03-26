<template>
  <div>
    <MainContent>
      <main>
        <div class="py-0">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
              <li class="breadcrumb-item">
                <a href="#"><span class="fas fa-home"></span></a>
              </li>
              <li class="breadcrumb-item"><a href="#">Tangent</a></li>
              <li class="breadcrumb-item"><a href="#">Student</a></li>
              <li class="breadcrumb-item"><a href="#">Cover Letter</a></li>
              <li class="breadcrumb-item active" aria-current="page">Create</li>
            </ol>
          </nav>
          <div class="d-flex justify-content-between w-100 flex-wrap">
            <div class="mb-3 mb-lg-0">
              <h1 class="h4">Create cover letter</h1>
              <p class="mb-0">Create new cover letter</p>
            </div>
            <div>
              <a href="#" class="btn btn-outline-gray"
                ><i class="far fa-question-circle me-1"></i>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="row justify-content-between">
            <div class="col-12 mb-4">
              <div class="row mb-4">
                <div class="col-lg-2 col-sm-6"></div>
                <div class="col-lg-8 col-sm-6">
                  <div
                    class="card border-light shadow-sm components-section px-5 py-3"
                  >
                    <div class="card-body">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Cover letter title</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          v-model="newCoverLetterTitle"
                        />
                      </div>
                      <div>
                        <button
                          class="btn btn-outline-dark"
                          v-on:click.stop.prevent="openWindowToRecordVideo()"
                        >
                          Record Video
                        </button>
                        <!-- <div
                          class="modal fade"
                          id="record-video-modal-form"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="record-video-modal-form"
                          aria-hidden="true"
                        >
                          <div
                            class="modal-dialog modal-dialog-centered modal-xl"
                            role="document"
                          >
                            <StudentRecordCoverLetter />
                          </div>
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import StudentRecordCoverLetter from "./StudentRecordCoverLetter.vue";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "StudentCreateCoverLetter",
  components: {
    MainContent,
    StudentRecordCoverLetter,
  },
  setup() {
    const store = useStore();
    const newCoverLetterTitle = ref("");
    const openWindowToRecordVideo = () => {
      store.commit("newCoverLetter", {
        title: newCoverLetterTitle.value,
      });
      window.open("/student/coverletter/create/recordvieo", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    };
    return {
      openWindowToRecordVideo,
      newCoverLetterTitle,
    };
  },
};
</script>

<style scoped>
#myVideo {
  background-color: #95ddf5;
}
</style>