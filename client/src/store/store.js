import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    userToken: null,
    user: null,
    admin: null,
    adminToken: null,
    isUserLoggedIn: false,
    isAdminLoggedIn: false
  },
  mutations: {
    setUserToken (state, userToken) {
      state.userToken = userToken
      if (userToken) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setAdminToken (state, adminToken) {
      state.adminToken = adminToken
      if (adminToken) {
        state.isAdminLoggedIn = true
      } else {
        state.isAdminLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setAdmin (state, admin) {
      state.admin = admin
    }
  },
  actions: {
    setUserToken ({commit}, userToken) {
      commit('setUserToken', userToken)
    },
    setAdminToken ({commit}, adminToken) {
      commit('setAdminToken', adminToken)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setAdmin ({commit}, admin) {
      commit('setAdmin', admin)
    }
  }
})
