<template>
  <div>
    <typenav />
    <listcontainer></listcontainer>
    <recommed></recommed>
    <rank></rank>
    <like></like>
    <firfoor v-for="(floor,index) in floorlist" :key="floor.id"></firfoor>
    
    <brand></brand>
  </div>
</template>



<script>
import listcontainer from "@/views/Home/ListContainer/listcontainer.vue";
import recommed from "@/views/Home/Recommed/recommed.vue";
import rank from "@/views/Home/Rank/rank.vue";
import like from "@/views/Home/Like/like.vue";
import firfoor from "@/views/Home/FirFoor/firfoor.vue";
// import secfloor from '@/views/Home/SecFloor/secfloor.vue';
import brand from "@/views/Home/Brand/brand.vue";
import {mapState} from "vuex";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    listcontainer,
    recommed,
    rank,
    like,
    firfoor,
    // secfloor,
    brand,
  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorlist: (state) => {
        return state.home.floorlist;
      },
    }),
  },
};
</script>

<style scoped lang="">
</style>
