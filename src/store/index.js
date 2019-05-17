import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

const store = new Vuex.Store({
  state: {
    order: 'game',
    players: [],
    takeover: null,
    current: null,
  },
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: [vuexPersist.plugin]
})

export default store
