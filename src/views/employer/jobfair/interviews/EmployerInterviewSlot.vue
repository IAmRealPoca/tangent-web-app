<template>
  <div>
<MainContent>    
  <main>
    <div class="py-2">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="h4">Interview Setting</h1>
          <p class="mb-0"></p>
        </div>
        <div>
          <a href="#" class="btn btn-outline-gray"
          ><i class="far fa-question-circle me-1"></i
          ></a>
        </div>
      </div>
    </div>

    <div v-if="interviewInfo.length > 0">
      <div v-for="interview in interviewInfo" :key="interview.interviewId">
        <p>Interview: {{ interview.interviewName }}</p>
        <div v-for="slot in interview.interviewSlots" :key="slot.interviewSlotId">
          {{ slot.startSlot }}
        </div>
      </div>
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
      console.log("interviewInfo: ", interviewInfo.value);
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