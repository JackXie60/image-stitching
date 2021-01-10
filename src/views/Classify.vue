<template>
  <div class="catalogue">
    <div class="catalogue-left">
      <h2>文件目录</h2>
      <tree-comp :data1="treeData"></tree-comp>
    </div>
    <div class="catalogue-right">
      <h2>最近</h2>
      <div class="date-img" v-for="dateImg in dateImgData" :key="dateImg.title">
        <div class="date-title">{{ dateImg.title }}</div>
        <div class="date-content" v-if="dateImg.content.length==0">暂无数据</div>
        <div class="date-imgContent" v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
import TreeComp from "../components/TreeComp.vue";
export default {
  components: {
    TreeComp
  },
  data() {
    return {
      treeData: [
        {
          title: "root",
          expand: true,
          children: [
            {
              title: "MyTravel",
              expand: true,
              children: [
                {
                  title: "泰山"
                },
                {
                  title: "桂林"
                }
              ]
            },
            {
              title: "MyStudy",
              expand: true,
              children: [
                {
                  title: "工程"
                },
                {
                  title: "项目"
                }
              ]
            }
          ]
        }
      ],
      dateImgData:[
        {
          title:"今天",
          content:[],
        },
        {
          title:"昨天",
          content:[],
        },
        {
          title:"一周之内",
          content:[],
        },
        {
          title:"一个月之内",
          content:[],
        },
        {
          title:"一年之内",
          content:[],
        },
        {
          title:"一年之前",
          content:[],
        }
      ]
    };
  }
};
</script>

<style lang="less">
.catalogue {
  height: 90vh;
  width: 100vw;
  display: flex;
  .catalogue-left {
    display: inline-block;
    padding-left: 20px;
    padding-top: 10px;
    height: 100%;
    width: 250px;
    background-color: #d5d8d7;
  }
  .catalogue-right{
    overflow: scroll;
    margin-top: 30px;
    margin-left: 30px;
    .date-img{
      height: 100px;
    }
  }
  .catalogue-right::-webkit-scrollbar{
    display: none;
    width: 0px;
  }
}
</style>
