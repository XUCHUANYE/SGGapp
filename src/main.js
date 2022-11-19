import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import typenav from './views/Home/TypeNav/typenav.vue'

Vue.config.productionTip = false

Vue.component(typenav.name,typenav)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
