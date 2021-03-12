import { createStore,createLogger } from "vuex";
import mutations from "./mutation";
import getters from "./getter";
import actions from "./action";

 const store = createStore({
  state() {
    return {
      count: 0,
      userInfo: null,
    };
  },
  mutations,
  getters,
  actions,
  plugins: [createLogger()]
});
export default store;