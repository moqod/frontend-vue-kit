import user from '../../api/user';
import * as types from '../mutation-types';

// initial state
const state = {
  userItem: false
};

// getters
const getters = {
  userInfo: () => state.userItem,
  userLoading: () => state.loading
};

// actions
const actions = {
  loginUser({ commit }, form) {
    commit(types.LOADING);
    user.login(form, (item) => {
      if (item) {
        commit(types.RECEIVE_USER, { item });
        commit(types.SET_AUTHORIZED_TRUE);
      }
      commit(types.LOADED);
      return item;
    });
  },
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
  },
  [types.RECEIVE_USER](type, { item }) {
    state.userItem = item;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
