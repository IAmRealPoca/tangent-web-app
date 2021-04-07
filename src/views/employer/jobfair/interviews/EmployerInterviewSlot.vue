<template>
  <div>
<MainContent>    
  <main>
    <div v-if="interviewInfo.length <= 0">
      <div v-for="slot in interviewInfo.interviewSlots" :key="slot.interviewSlotId"></div>
    </div>
  </main>
</MainContent>
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useInterviewService } from "@/util/service/interviewService.js";
export default {
  name: "EmployerInterviewSlot",
  components: {
    MainContent,
  },
  setup() {
    const route = useRoute();
    const interviewService = useInterviewService();
    const interviewInfo = ref({});
    const fetchInterviewSlot = async () => {
      interviewInfo.value = await interviewService.getInterviews(Number(route.params.boothId));

    };

    onMounted(() => {
      fetchInterviewSlot();
    });

    return {
      interviewInfo,
    }
  },
}
</script>

<style slot>

</style>