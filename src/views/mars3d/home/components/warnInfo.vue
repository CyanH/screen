<template>
  <div class="nwwest-roll">
    <swiper
      class="roll-ul"
      :options="swiperOption"
      ref="mySwiper"
      v-if="yjList.length > 0"
    >
      <swiper-slide v-for="(item, index) in yjList" :key="index">
        <div class="liBar flex">
          <div class="line"></div>
          <div class="liLeft flex">
            <span class="arrow"></span>
            <span class="liL">{{ item.date }}</span>
            <span class="liR">{{ item.content }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      yjList: [
        {
          content: "土壤温度为27.30℃，过高，请注意及时处理！",
          date: "2022-01-20 12:00:29",
        },
        {
          content: "土壤温度为27.30℃，过高，请注意及时处理！",
          date: "2022-01-20 15:00:29",
        },
        {
          content: "土壤湿度为89%，过高，请注意及时处理！",
          date: "2022-01-23 11:24:29",
        },
        {
          content: "土壤温度为27.30℃，过高，请注意及时处理！",
          date: "2022-01-26 15:00:29",
        },
        {
          content: "土壤湿度为27.3%，过低，请注意及时处理！",
          date: "2022-01-27 05:00:29",
        },
        {
          content: "土壤温度为27.30℃，过高，请注意及时处理！",
          date: "2022-01-28 15:00:29",
        },
        {
          content: "土壤温度为27.30℃，过高，请注意及时处理！",
          date: "2022-01-29 15:00:29",
        },
        {
          content: "土壤温度为27.30℃，过高，请注意及时处理！",
          date: "2022-01-30 15:00:29",
        },
      ],
      swiperOption: {
        direction: "vertical",
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        loop: true,
        debugger: true,
        autoplayDisableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
        autoplay: 5000,
        slidesPerView: 4, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        centeredSlides: true, //<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
        prevButton: ".swiper-button-prev", //上一张
        nextButton: ".swiper-button-next", //下一张
        notNextTick: true,
        pagination: ".swiper-pagination",
        speed: 300,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
.nwwest-roll {
  height: 100%;
  width: 100%;
  padding: 0.07rem 0.07rem 0.05rem 0.07rem;
  box-sizing: border-box;
  overflow: hidden;

  .roll-ul {
    height: 100%;
    width: 100%;
  }
}

.swiper-slide {
  color: #9BA8B3;
  font-size: 0.06rem;
  box-sizing: border-box;
  height: 30%;

  .liBar {
    width: 100%;
    margin: 0.05rem 0;
    height: calc(100% - 0.1rem);
  }

  .line {
    width: 0.02rem;
    height: 100%;
    background: #197A99;
  }

  .liLeft {
    width: calc(100% - 0.02rem);
    background: rgba(59, 77, 95, 0.2);
    height: 100%;
    position: relative;
  }

  .arrow {
    width: 0px;
    height: 0px;
    border-top: 0.03rem solid transparent;
    border-left: 0.03rem solid;
    border-bottom: 0.03rem solid transparent;
    border-left-color: #72AAB8;
    margin:0 0.03rem;
  }
  .liL{
    width: 0.6rem;
    text-align:center;
  }
  .liR{
    flex:1;
    margin-left:0.1rem;
  }
}

.swiper-slide-active {
  color: #fff;
  font-size: 0.08rem;
  transition: 0.2s;
  box-sizing: border-box;
  height: 40%;

  .liBar {
    margin: 0.01rem 0;
    height: calc(100% - 0.02rem);
  }

  .line {
    width: 0.02rem;
    height: 100%;
    background: #1DA9CC;
  }

  .liLeft {
    background: rgba(82, 100, 121, 0.2);
  }
  .arrow {
    border-left-color: #B1F8FF;
  }
}
</style>
