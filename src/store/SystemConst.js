import { createStore } from 'vuex'

export default createStore({
  state: {
    // apiPrefix: "http://localhost:8080", // dev
    // apiPrefix: "http://192.168.66.150/api-Rinko-Community", // test
    apiPrefix: "http://175.178.244.172/api-Rinko-Community", // prod

    // apiPrefix4ws: "ws://localhost:8080", // dev
    // apiPrefix4ws: "ws://192.168.66.150/api-Rinko-Community", // test
    apiPrefix4ws: "ws://175.178.244.172/api-Rinko-Community", // prod

    // resourcesPrefix: "http://192.168.66.150/resources", // dev&test
    resourcesPrefix: "http://175.178.244.172/resources", // prod
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
