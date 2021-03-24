<template>
  <div>
    <MainContent>
      <main>
        <CoverLetterVideoRecorder />
      </main>
    </MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import CoverLetterVideoRecorder from "@/components/CoverLetterVideoRecorder.vue";
export default {
  name: "StudentCreateCoverLetter",
  components: {
    MainContent,
    CoverLetterVideoRecorder,
  },
};
</script>

<style scoped>
#myVideo {
  background-color: #95ddf5;
}
</style>