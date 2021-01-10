<template>
  <div class="serve-wrapper">
    <side-bar></side-bar>
    <router-view class="server-view"></router-view>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';

export default {
  components: {
    SideBar,
  },
};
</script>

<style lang='less'>
.serve-wrapper{
  height:90vh;
  width: 100vw;
  position: relative;
  .server-view{
    position: absolute;
    top: 10%;
    left: 20%;
    display: inline-block;
  }
}
</style>
