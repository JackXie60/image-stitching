<template>
  <div class="slide-wrapper">
    <div class="slide-img">
      <img :src="imgSrc" alt="">
    </div>
    <div class="slide-desc">
      {{ desc }}
      <slot name="more"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    desc: String,
  },
};
</script>

<style lang="less" scoped>
.slide-wrapper{
  width: 100%;
  height: 100%;
  position: relative;
  .slide-img{
    >img{
      width: 100vw;
      height: 90vh;
      opacity: .9;
    }
  }
  .slide-desc{
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%);
    color: #fff;
    text-shadow: 3px 3px 10px #ccc;
    background-color: rgba(244,244,244,.1);
    font-size: 60px;
  }
}
</style>
