import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import info from './info'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    chats: []
  },
  mutations: {
    SET_CONTACTS_TO_STORE(state, contacts) {
      state.contacts = contacts
    },
    SET_CHATS_TO_STORE(state, chats) {
      state.chats = chats
    }    
  },
  actions: {
    FETCH_CONTACTS({commit}) {
      return axios.get('http://localhost:3000/contacts')
        .then((contacts) => {
          commit('SET_CONTACTS_TO_STORE', contacts.data)
        })
    },
    FETCH_CHATS({commit}) {
      return axios.get('http://localhost:3000/chats')
        .then((chats) => {
          commit('SET_CHATS_TO_STORE', chats.data)
        })
    },
    GET_LAST_MESSAGE() {}     	
  },
  modules: {
    info
  }
})
