import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import typenav from "./components/TypeNav/typenav.vue";
import NProgress from "nprogress";
import "@/mock/mockServe";
// import VueAwesomeSwiper from "vue-awesome-swiper";
// import 'swiper/swiper-bundle.css';
import 'swiper/css/swiper.css';

// import "swiper/swiper/swiper.css";

Vue.config.productionTip = false;

Vue.component(typenav.name, typenav);
// Vue.use(VueAwesomeSwiper);

// import { reCategoryList } from "@/api";
// // let res = reCategoryList()
// // console.log(res);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
