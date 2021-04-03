import _ from "lodash";
export default {
  getPathName: (state) => (path) => {
    console.warn("par: ", path);
    let result = [];
    for (const [key, value] of Object.entries(path)) {
      console.log(`${key}: ${value}`);
      const val = parseInt(value);
      switch (key) {
        case "jobFairId":
          let res1 = {};
          const jfInfo = state.jobfairInfo;
          const re = _.pick(jfInfo, ["jobFairId", "jobFairName"]);

          if (re.jobFairId == val) {
            res1.jobFairId = re.jobFairName;
          }

          console.warn("res1: ", res1);
          result.push(res1);
          break;
        case "boothId":
          const res2 = {
            boothId: _.find(state.boothInfo, { boothId: val })?.boothName,
          };
          result.push(res2);
          break;
        default:
          break;
      }
    }
    return result;
  },
  getBoothInfo: (state) => (boothId) => {
    return _.find(state.boothInfo, { boothId });
  },
  getUserRole(state) {
    if (state.userInfo) {
      const userJson = JSON.parse(state.userInfo);
      return userJson.role;
    }
    else return ""
  },
  getUser(state) {
    return JSON.parse(state.userInfo);
  },
};
