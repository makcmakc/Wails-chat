
export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = { locale: state.info.locale }
    }
  },
  getters: {
    info: s => s.info
  }
}