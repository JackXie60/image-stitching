<template>
  <div class="wrapper">
    <home-header></home-header>
    <swiper-comp v-if="isShow"></swiper-comp>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HomeHeader from '../components/HomeHeader.vue';
import SwiperComp from '../components/SwiperComp.vue';

export default {
  components: {
    HomeHeader,
    SwiperComp,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      isShow: (state) => state.isShow,
    }),
  },
};
</script>

<style lang='less'>
</style>
