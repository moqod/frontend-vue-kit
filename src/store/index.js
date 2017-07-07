import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';
import * as actions from './actions';
import * as getters from './getters';
import user from './modules/auth';

Vue.use(Vuex);

const state = {
  moduleError: null,
  authorized: false
};

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations: {
    [types.SET_AUTHORIZED_TRUE]() {
      state.authorized = true;
    },
    [types.SET_AUTHORIZED_FALSE]() {
      state.authorized = false;
    }
  },
  modules: {
    user
  },
  strict: debug
});
