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

        <div class="row justify-content-between">
          <div class="col-12">
            <div class="card border-light shadow-sm components-section mb-4">
              <div v-if="interviewInfo.length > 0">
                <div class="row">
                  <div v-for="interview in interviewInfo" :key="interview.interviewId">
                    <div class="card-body">
                      <label>Interview: {{ interview.interviewName }}</label>
                      <div v-if="interview.dividedInterviewSlots">
                        <div v-for="(oneDay, indexOneDay) in interview.dividedInterviewSlots.days" :key="indexOneDay"
                             class="row">
                          <label>{{ dateFns.format(new Date(oneDay.date), "dd/MM/yyy") }}</label>
                          <div v-for="(slot, indexOneSlot) in oneDay.oneDaySlots" :key="indexOneSlot" class="col-sm-4 col-xl-3">
                            <div v-if="slot != null">
                              <div class="card border-light shadow-sm components-section mt-1 mb-1 px-2">
                                {{ dateFns.format(new Date(slot.startSlot), "HH:mm") }} -
                                {{ dateFns.format(new Date(slot.endSlot), "HH:mm") }}
                              </div>
                            </div>
                          </div>
                        </div>
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
import * as dateFns from "date-fns";
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";
import {useInterviewService} from "@/util/service/interviewService.js";

export default {
  name: "EmployerInterviewSlot",
  components: {
    MainContent,
  },
  setup() {
    const route = useRoute();
    const interviewService = useInterviewService();
    const interviewInfo = ref({});
    // const interviewSlotsDividedByDays = ref({}); //contains slots divided by days for each interview
    const fetchInterviewSlot = async () => {
      interviewInfo.value = await interviewService.getInterviews(Number(route.params.boothId));
      let interviewInfoVar = interviewInfo.value;
      let daysInOneInterview = []; //contains days of one interviews
      let oneDaySlots = []; //interview slots occur in one day
      let dividedInterviewSlots = []; //contains the final result

      //divide slots by days for each interview
      //2 arrays to 3 arrays. I hate date time processing now.
      for (let i = 0; i < interviewInfoVar.length; i++) {
        let interviewSlots = interviewInfoVar[i].interviewSlots;
        if (interviewSlots.length > 0) {
          let currInterviewDate = new Date(interviewSlots[0].interviewStart);
          oneDaySlots = [];//start new interview, reset oneDaySlots
          daysInOneInterview = [];//start new interview
          // dividedInterviewSlots = [];
          for (let j = 0; j < interviewSlots.length; j++) {
            let interviewStart = new Date(interviewSlots[j].interviewStart);

            //if interview slot still belong to the day
            if (dateFns.getDayOfYear(currInterviewDate) === dateFns.getDayOfYear(interviewStart)) {
              oneDaySlots.push(interviewSlots[j]);
            }
            //end of day or the interview is out of slots, push all slots of that day to daysInOneInterview and reset oneDaySlots for next day
            if (!(dateFns.getDayOfYear(currInterviewDate) === dateFns.getDayOfYear(interviewStart)) || (j === interviewSlots.length - 1)) {
              const daysInOneInterviewElement = {
                oneDaySlots,
                "date": currInterviewDate,
              };
              daysInOneInterview.push(daysInOneInterviewElement);
              //reset oneDaySlots and push current slot as the start slot of new date
              oneDaySlots = [];
              oneDaySlots.push(interviewSlots[j]);
            }
            currInterviewDate = interviewStart; //reset oneDayInterview after each slot to determine if the next slot is still belong to current day or to next day
          } //end loop slot

          const oneInterview = {
            days: daysInOneInterview,
            "interviewId": interviewInfoVar[i].interviewId,
          };
          dividedInterviewSlots.push(oneInterview);
        }

      }

      //map divided slot result to the interview data
      for (let i = 0; i < interviewInfo.value.length; i++) {
        let e = interviewInfo.value[i];
        for (let j = 0; j < dividedInterviewSlots.length; j++) {
          console.log("e: ", e);
          if (dividedInterviewSlots[j].interviewId === e.interviewId) {
            console.log("here");
            interviewInfo.value[i] = {
              ...e,
              "dividedInterviewSlots": dividedInterviewSlots[j],
            }
          }
        }
      }


      console.log("oneInterviewSlot: ", dividedInterviewSlots);
      console.log("interviewInfo: ", interviewInfo.value);
    };

    onMounted(() => {
      fetchInterviewSlot();
    });

    return {
      interviewInfo,

      dateFns,
    }
  },
}
</script>

<style slot>

</style>