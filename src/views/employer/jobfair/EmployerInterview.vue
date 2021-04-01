<template>
  <div>
<MainContent>
  <main>
    
  </main>
</MainContent>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import MainContent from "@/components/MainContent.vue";
import { useInterviewService } from "@/util/service/interviewService.js";
export default {
  name: "EmployerInterview",
  components: {
    MainContent,
  },
  setup() {
    const route = useRoute();
    const interviewList = ref([]);
    const interviewService = useInterviewService();
    const fetchInterviews = async () => {
      interviewList.value = await interviewService.getInterviews();
    };
    onMounted(() => {
      fetchInterviews();
    });

    return {
      interviewList,
    };
  },
};
</script>

<style scoped>
</style>