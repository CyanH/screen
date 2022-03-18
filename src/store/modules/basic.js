const state = {
  zhwlDrawer: "",
};

const mutations = {
  SET_ZHWL_COMPONENT: (state, drawer) => {
    state.zhwlDrawer = drawer;
  },
};

const actions = {
  setZhwlComponent({ commit }, drawer) {
    commit("SET_ZHWL_COMPONENT", drawer);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
