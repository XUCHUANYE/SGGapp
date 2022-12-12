import Vue from "vue";
import VueRouter from "vue-router";
// import home from "../views/Home/home.vue";
// import login from "../views/Login/login.vue";
// import search from "../views/Search/search.vue";
// import register from "../views/Register/register.vue";
// import detail from '../views/Detail/index.vue';
import routes from './routes';
Vue.use(VueRouter);


export default new VueRouter({
  // name:'search',
  routes,
   scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  },
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
