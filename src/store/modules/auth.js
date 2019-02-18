import user from '../../api/user'
export default {
  state: {
    userItem: false
  },
  getters: {
    userInfo: () => state.userItem,
    userLoading: () => state.loading,
    isAuthenticated(state) {
      return !!state.userItem;
    }
  },
  actions: {
    loginUser({ commit }, form) {
      commit('USER_LOADING', true)
      user.login(form, item => {
        if (item) {
          commit('SET_USER', { item })
        }
        commit('USER_LOADING', false)
        return item
      })
    },
    logoutUser({ commit }, id) {
      user.logout(() => {
        commit('SET_USER', false)
        return null
      }, id)
    }
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    USER_LOADING(state, payload) {
      state.user_loading = payload;
    }
  }
};

