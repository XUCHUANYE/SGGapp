import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "../views/Home/home.vue";
import login from "../views/Login/login.vue";
import search from "../views/Search/search.vue";
import register from "../views/Register/register.vue";

export default new VueRouter({
  name:'search',
  routes: [
    {
      path: "/home/:keyword?",
      component: home,
      meta: { show: true },
    },
    {
      path: "/search/:keyword?",
      component: search,
      meta: { show: true },
      name:"search"
     
    },
    {
      path: "/login",
      component: login,
      meta: { show: false },
    },
    {
      path: "/register",
      component: register,
      meta: { show: false },
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
