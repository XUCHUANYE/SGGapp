import home from "../views/Home/home.vue";
import login from "../views/Login/login.vue";
import search from "../views/Search/search.vue";
import register from "../views/Register/register.vue";
import detail from '../views/Detail/index.vue';

export default [
  {
    path: "/detail/:skuid",
    component:detail,
    meta: { show: true },
  },
  {
    path: "/home/:keyword?",
    component: home,
    meta: { show: true },
  },
  {
    path: "/search/:keyword?",
    component: search,
    meta: { show: true },
    name: "search",
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
];
