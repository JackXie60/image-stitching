<template>
  <div class="optimize-wrapper">
    <div class="header">
      <div class="btn">
        <div
          class="faster"
          :class="{
            active: type == 'speed'
          }"
          @click="changeType('speed')"
        >
          速度
        </div>
        <div
          class="better"
          :class="{
            active: type == 'accurate'
          }"
          @click="changeType('accurate')"
        >
          精准
        </div>
      </div>
      <div class="submit">
        <button class="submit-btn">提交</button>
      </div>
    </div>
    <div class="content">
      <textarea name="" id="" cols="30" rows="10" placeholder="请提出优化思路或相关代码"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "speed"
    };
  },
  methods: {
    changeType(type) {
      this.type = type;
    }
  }
};
</script>

<style lang="less">
.optimize-wrapper {
  width: 60vw;
  .header {
    display:flex;
    width: 100%;
    border: 1px solid rgb(196, 190, 190);
    height: 35px;
    line-height: 35px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    .btn {
      display: flex;
      > div {
        width: 100px;
        text-align: center;
      }
      > div.active {
        background-color: #0366d6;
        color: #fff;
        font-weight: bold;
      }
    }
    .submit{
      position: absolute;
      right: 0;
    }
  }
  .content {
    width: 60vw;
    height: 20vw;
    margin-top: 20px;
    textarea {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      outline: none;
      text-indent: 5px;
    }
  }
}
</style>
