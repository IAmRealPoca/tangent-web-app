import {useVCService} from "@/util/service/videoChatService";
import {getCurrentInstance} from "vue";
import de from "vanillajs-datepicker/js/i18n/locales/de";

export default {
    getSub({commit, getters}, boothId) {
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
    toastMsg(ctx, {msg, proxy, stt, duration}) {
        if (!duration) duration = 4000;
        switch (stt) {
            case "error":
                proxy.$toast.error(`${msg}`, {
                    duration,
                    position: "top",
                });
                break;
            case "info":
                proxy.$toast.info(`${msg}`, {
                    duration,
                    position: "top",
                });
                break;
            case "warning":
                proxy.$toast.warning(`${msg}`, {
                    duration,
                    position: "top",
                });
                break;
            case "show":
                proxy.$toast.show(`${msg}`, {
                    duration,
                    position: "top",
                });
                break;
            default:
                proxy.$toast.success(`${msg}`, {
                    duration,
                    position: "top",
                });
                break;
        }

    },
  setBreadCrumb({ commit }, breadCrumb) {
    console.log('action: setBreadCrumb');
    commit('getDynamicBreadcrumb', breadCrumb)
  }
};
