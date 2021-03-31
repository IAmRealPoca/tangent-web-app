import _ from "lodash";
export default {
  getCompanyName: (state) => (cid) => {
    if (cid == state.jobfairInfo.jobFairId) {
      return state.jobfairInfo.jobFairName;
    }
  },
  getBoothInfo: (state) => (boothId) => {
    return _.find(state.boothInfo, { boothId })
  },
  getUserRole(state) {
    const userJson = JSON.parse(state.userInfo);
    return userJson.role;
  },
  getUser(state) {
    return JSON.parse(state.userInfo);
  },
  getBreadCrumb: (state) => () => {
    console.log('getter: getBreadCrumb');
    return state.breadcrumbsData;
  },
};
