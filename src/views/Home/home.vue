<template>
  <div>
   <typenav/>
   <listcontainer></listcontainer>
   <recommed></recommed>
   <rank></rank>
   <like></like>
   <firfoor></firfoor>
   <secfloor></secfloor>
   <brand></brand>
  </div>
</template>



<script>
import listcontainer from '@/views/Home/ListContainer/listcontainer.vue';
import recommed from '@/views/Home/Recommed/recommed.vue';
import rank from '@/views/Home/Rank/rank.vue';
import like from '@/views/Home/Like/like.vue';
import firfoor from '@/views/Home/FirFoor/firfoor.vue';
import secfloor from '@/views/Home/SecFloor/secfloor.vue';
import brand from '@/views/Home/Brand/brand.vue';
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
    secfloor,
    brand
  },
};
</script>

<style scoped lang="">
</style>
