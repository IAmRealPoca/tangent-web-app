export default {
  increment(state) {
    state.count++;
  },
  loginSuccess(state, user) {
    state.userInfo = user;
  },
  logOut(state) {
    state.userInfo = null;
  },
  contract(state) {
    state.isContracted = !state.isContracted;
  },
  getJobfairInfo(state, fairInfo) {
    state.jobfairInfo = fairInfo;
  },
  getBoothInfo(state, boothInfo) {
    state.boothInfo = boothInfo;
  },
  getSub(state, sub) {
    state.listOfSub = sub;
  },
  newCoverLetter(state, newCoverLetter) {
    state.newCoverLetter = newCoverLetter;
  },
};
