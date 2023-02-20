import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: window.sessionStorage.getItem("theme")
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
