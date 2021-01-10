<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="slideData in loopData" :key="slideData.imgSrc">
      <slide-card :imgSrc="slideData.imgSrc" :desc="slideData.desc">
        <div slot="more">
          <button class="btn-more">图像拼接，试一试</button>
        </div>
      </slide-card>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import SlideCard from './SlideCard.vue';
import 'swiper/swiper-bundle.css';

export default {
  name: 'swiper-example-vertical',
    title: 'Vertical slider',
  components: {
    Swiper,
    SwiperSlide,
    SlideCard,
  },
  data() {
    return {
      swiperOption: {
          direction: 'vertical',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
      loopData: [
        {
          imgSrc: 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/54fbb2fb43166d22cb799252442309f79152d2ee.jpg',
          desc: '更快的拼接速度',
        },
        {
          imgSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.16pic.com%2F00%2F56%2F13%2F16pic_5613832_b.jpg&refer=http%3A%2F%2Fpic2.16pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612781673&t=a3b368b1ef2031de85e3866c0816a012',
          desc: '更精准的拼接结果',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.swiper {
  height: 90vh;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    background-color: #fff;
  }
}
.btn-more{
  color: rgb(24, 21, 21);
  border: none;
  width: 200px;
  height: 30px;
  font-weight: bold;
  background-color: bisque;
  position: absolute;
  margin-left: -100px;
  margin-top: 15px;
  border-radius: 50px;
  font-size: 16px;
  vertical-align: center;
  outline: none;
}
</style>
