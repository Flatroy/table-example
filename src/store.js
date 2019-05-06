import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    users: [],
    fields: {
      date: true,
      name: true,
      address: true
    },
    search: ''
  },
  mutations: {
    setUsers (state, users) {
      state.users = users
    },
    searchUser (state, text) {
      state.search = text
    },
    filterField (state, item) {
      state.fields[item] = !state.fields[item]
    }
  },
  actions: {
    async getUsers ({ commit }) {
      await axios
        .get('https://jsonblob.com/api/jsonBlob/8b736f94-197f-11e9-bede-11a3fc81650d')
        .then((response) => {
          console.log(response.data)
          commit('setUsers', response.data)
        })
    }
  },
  getters: {
    users: (state, getters) => getters.allUsers.filter(function (mode) {
      return mode.name.toLowerCase().indexOf(state.search.toLowerCase()) >= 0 ||
                mode.address.toLowerCase().indexOf(state.search.toLowerCase()) >= 0 ||
                mode.date.indexOf(state.search.toLowerCase()) >= 0
      // return mode
    }),
    allUsers: state => state.users,
    fields: state => state.fields
  }
})
