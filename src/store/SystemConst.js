import { createStore } from 'vuex'

export default createStore({
  state: {
    // apiPrefix: "http://localhost:8080", // dev
    apiPrefix: "http://192.168.66.150/api-Rinko-Community", // prod
    // apiPrefix4ws: "ws://localhost:8080", // dev
    apiPrefix4ws: "ws://192.168.66.150/api-Rinko-Community", // prod
    resourcesPrefix: "http://192.168.66.150/Rinko-Community/resources", // dev&prod
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
