import { useVCService } from "@/util/service/videoChatService";

export default {
  getSub({ commit, getters }, boothId) {
    const vidu = useVCService();
    const booth = getters.getBoothInfo(boothId);

    if (booth) {
      console.log("state.boothInfo :>> ", booth);
      vidu
        .getSub(booth.boothSessionUrl)
        .then((resp) => {
          console.log("resp :>> ", resp);
          commit("getSub", resp);
        })
        .catch((err) => {
          console.log("get Sub err: ", err);
        });
    }
  },
};
