<template>
  <div class="home-header">
    <div class="img-wrapper">
      <img src="../../public/images/pinjie.jpg" alt="" />
      <div>Image stitching</div>
    </div>
    <div class="link-wrapper">
      <router-link to="/home" @click.native="changeIsShow(true)">首页</router-link>
      <router-link to="/home/serve" @click.native="changeIsShow(false)">服务</router-link>
      <router-link to="/home/classify" @click.native="changeIsShow(false)">图像文件夹</router-link>
      <router-link to="/home/login" @click.native="changeIsShow(false)">登录 | 注册</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setIsShow']),
    changeIsShow(bool) {
      this.setIsShow(bool);
    },
  },
};
</script>

<style lang="less">
.home-header {
  width: 100vw;
  height: 10vh;
  box-sizing: border-box;
  position: relative;
  background-color: rgb(6, 51, 36);
  justify-content: space-between;
  line-height: 70px;
  display: flex;
  align-items: center;
  .img-wrapper {
    height: 60px;
    width: 300px;
    margin-left: 40px;
    display: flex;
    align-items: center;
    background-color: rgb(6, 51, 36);
    img {
      border-radius: 5px;
      width: 80px;
      height: 60px;
      padding-right: 20px;
      border-right: 4px solid #fff;
      flex-shrink: 0;
      margin-right: 20px;
    }
    div {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-shadow: 3px 3px 1px #777;
    }
    .break {
      display: inline-block;
      margin-left: 20px;
      width: 30px;
      height: 60px;
      background: #fff;
    }
  }
  .link-wrapper {
    display: flex;
    a {
      display: block;
      width: 120px;
      text-decoration: none;
      text-align: center;
      color: #fff;
    }
  }
}
</style>
