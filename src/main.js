import Vue from 'vue'
import Players from './components/Players'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Players),
}).$mount('#app')
