import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home: null
  },
  mutations: {
    setHome (state, payload) {
      state.home = payload
    }
  },
  actions: {

  }
})
