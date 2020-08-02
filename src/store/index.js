import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: undefined,
    projects: ['project-a', 'project-b', 'project-c']
  },
  mutations: {
    updateUser (state, user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
