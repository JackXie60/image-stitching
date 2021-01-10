<template>
  <div class="sideBar-wrapper">
    <ul class="sideBar-list">
      <li v-for="list in listData" :key="list.path">
        <router-link :to="list.path">
          {{ list.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [
        {
          title: '文档',
          path: '/home/serve/document',
        },
        {
          title: '源码',
          path: '/home/serve/sourcecode',
        },
        {
          title: '源码优化',
          path: '/home/serve/optimize',
        },
        {
          title: '社区',
          path: '/home/serve/community',
        },
      ],
    };
  },
};
</script>

<style lang="less">
.sideBar-wrapper {
  width: 250px;
  height: 100%;
  background: rgb(30, 163, 134);
  padding-top: 30px;
  box-sizing: border-box;
  display: inline-block;
  .sideBar-list {
    width: 100%;
    > li {
      width: 100%;
      text-align: center;
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      position: relative;
      >a{
        text-decoration: none;
        color: #fff;
      }
      &:hover {
        background-color: #ccc;
      }
      &:hover>a{
        color: rgb(116, 50, 26);
      }
      &::before {
        content: "";
        width: 10px;
        height: 50px;
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    li:hover::before {
      background-color: rgb(214, 80, 18);
    }
  }
}
</style>
