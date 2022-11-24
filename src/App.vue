<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view>
    <Appfooter v-show="$route.meta.show"></Appfooter>
  </div>
</template>

<script>
import AppHeader from "./components/Header/AppHeader.vue";
import Appfooter from "./components/Footer/Appfooter.vue";
export default {
  name: "App",

  data() {
    return {
      
    };
  },
  components: {
    AppHeader,
    Appfooter,
  },
  mounted(){
    this.$store.dispatch("categoryList");
  }
};
</script>

<style scoped lang="">
</style>
