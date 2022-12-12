import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import typenav from "./components/TypeNav/typenav.vue";
import NProgress from "nprogress";
import "@/mock/mockServe";
import "swiper/css/swiper.css";
import carousel from "@/components/Carousel/carousel.vue";
import pagination from '@/components/Pagination/pagination.vue';
Vue.config.productionTip = false;

Vue.component(typenav.name, typenav);
Vue.component(carousel.name, carousel);
Vue.component(pagination.name,pagination)
// Vue.use(VueAwesomeSwiper);

// import { reCategoryList } from "@/api";
// // let res = reCategoryList()
// // console.log(res);

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
}).$mount("#app");
