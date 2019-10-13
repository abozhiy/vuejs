import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clients_path: '/client/clients'
  },
  mutations: {},
  actions: {},
  modules: {},
  // plugins: [createPersistedState()]
})