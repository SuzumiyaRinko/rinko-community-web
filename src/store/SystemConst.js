import { createStore } from 'vuex'

export default createStore({
  state: {
    resourcesPrefix: "http://192.168.66.150/resources",
    theme: window.sessionStorage.getItem("theme"),
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
