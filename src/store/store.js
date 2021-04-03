import { createStore, createLogger } from "vuex";
import mutations from "./mutation";
import getters from "./getter";
import actions from "./action";
import createPersistedState from "vuex-persistedstate";


const store = createStore({
  state() {
    return {
      count: 0,
      userInfo: null,
      isContracted: false,
      jobfairInfo: null,
      boothInfo: null,
      boothToken: null,
      listOfSub: [],
      newCoverLetter: null,
    };
  },
  mutations,
  getters,
  actions,
  plugins: [createLogger(), createPersistedState()],
});
export default store;
