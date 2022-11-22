import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from './home';
import search from './search';

export default new Vuex.Store({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    home,
    search
  }
})
