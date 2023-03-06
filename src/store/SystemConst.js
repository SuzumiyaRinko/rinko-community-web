import { createStore } from 'vuex'

export default createStore({
  state: {
    apiPrefix: "http://localhost:8080/Rinko-Community",
    apiPrefix4ws: "ws://localhost:8080/Rinko-Community",
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
