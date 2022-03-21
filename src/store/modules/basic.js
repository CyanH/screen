const state = {
  homeDrawer: "rightDrawer",
};

const mutations = {
  SET_HOME_COMPONENT: (state, drawer) => {
    state.homeDrawer = drawer;
  },
};

const actions = {
  setHomeComponent({ commit }, drawer) {
    commit("SET_HOME_COMPONENT", drawer);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
