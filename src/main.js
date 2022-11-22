import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import typenav from './components/TypeNav/typenav.vue'
import NProgress from 'nprogress';

Vue.config.productionTip = false

Vue.component(typenav.name,typenav)

// import { reCategoryList } from "@/api";
// // let res = reCategoryList()
// // console.log(res);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
