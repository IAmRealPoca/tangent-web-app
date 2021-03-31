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
  getDynamicBreadcrumb(state, payload) {
    console.log('mutations: getDynamicBreadcrumb');
    state.breadcrumbsData = payload;
  },
  // another methods breadcrumb
  // set(state, breadcrumbs) {
  //   state.breadcrumbs = breadcrumbs;
  // },
  // push(state, breadcrumb) {
  //   state.breadcrumbs.push(breadcrumb)
  // },
  // pop(state) {
  //   state.breadcrumbs.pop();
  // },
  // replace(state, payload) {
  //   const index = state.breadcrumbs.findIndex((breadcrumb) => {
  //     return breadcrumb.text === payload.find;
  //   });

  //   if (index) {
  //     state.breadcrumbs.splice(index, 1, payload.replace);
  //   }
  // },
  // empty(state) {
  //   state.breadcrumbs = [];
  // }
};
