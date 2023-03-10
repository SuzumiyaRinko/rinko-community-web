import { createStore } from 'vuex'

export default createStore({
  state: {
    // apiPrefix: "http://localhost:8080", // dev
    // apiPrefix: "http://192.168.66.150/api-Rinko-Community", // test
    apiPrefix: "http://175.178.61.207/api-Rinko-Community", // prod

    // apiPrefix4ws: "ws://localhost:8080", // dev
    // apiPrefix4ws: "ws://192.168.66.150/api-Rinko-Community", // test
    apiPrefix4ws: "ws://175.178.61.207/api-Rinko-Community", // prod

    // resourcesPrefix: "http://192.168.66.150/Rinko-Community/resources", // dev&test
    resourcesPrefix: "http://175.178.61.207/Rinko-Community/resources", // prod
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
