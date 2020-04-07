import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	contacts: []
  },
  mutations: {
    SET_CONTACTS_TO_STORE(state, contacts) {
      state.contacts = contacts;
    }
  },
  actions: {
    FETCH_CONTACTS({commit}) {
      return axios.get('http://localhost:3000/contacts')
        .then((contacts) => {
          commit('SET_CONTACTS_TO_STORE', contacts.data)
        })
    }  	
  },
  modules: {
  }
})
