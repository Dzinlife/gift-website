import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { getSingle } from '@/api'

Vue.config.productionTip = false

getSingle('ho').then(res => {
  store.commit('setHome', res)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
