export default {
  increment(state) {
    state.count++;
  },
  loginSuccess(state,user){
      state.userInfo = user;
  },
  logOut(state){
      state.userInfo = null;
  },
  contract(state){
      state.isContracted = !state.isContracted;
  }
};
