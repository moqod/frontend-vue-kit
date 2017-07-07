import user from '../../api/user';
import * as types from '../mutation-types';

// initial state
const state = {
  userItem: null
};

// getters
const getters = {
  userInfo: () => state.userItem
};

// actions
const actions = {
  logoutUser({ commit }, id) {
    user.logout((item) => {
      commit(types.LOGOUT_USER, { item });
      commit(types.SET_AUTHORIZED_FALSE);
      return null;
    }, id);
  }
};

// mutations
const mutations = {
  [types.LOGOUT_USER](type, { item }) {
    state.userItem = item;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
