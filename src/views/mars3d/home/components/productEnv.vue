<template>
  <div class="ricebaseBox">
    <div class="chooseDiv flex-column flex-center">
      <div
        @click="choose = index"
        :class="choose === index ? 'active' : ''"
        v-for="(item, index) in chooseList"
        :key="index"
      >
        {{ item }}
      </div>
    </div>

    <div
      class="contDiv qxCont flex-center"
      v-if="choose === 0"
      @mouseover="timerClear"
      @mouseleave="timerLoad"
    >
      <div class="titleBox flex-column">
        <span class="num" style="font-size: 0.21rem; color: #fff"> 94 </span>
        <span>气象评分</span>
      </div>
      <img class="circleimg" src="~images/land/circle_bg.png" />
      <img class="nocircle" src="~images/land/nocircle.png" />
      <div
        v-for="(item, index) in qxcirImages"
        :key="index"
        class="smallCircle"
        :class="'smallCircle' + index"
      >
        <img class="circlebg" src="~images/land/ico_qxdb.png" />
        <img class="qxiconImg" :src="item" />
      </div>
      <div
        class="qxBox flex-column flex-center"
        :class="'qxBox' + index"
        v-for="(item, index) in qxData"
        :key="index"
      >
        <span>{{ item.name }}</span>
        <div
          :class="index === 0 || index === 3 ? '' : 'flex-column flex-center'"
        >
          <span class="textColor" style="font-size: 0.11rem">
            {{ item.value }}
          </span>
          <span class="textColor">{{ item.unit }}</span>
        </div>
      </div>
    </div>

    <div
      class="contDiv sqCont flex-center"
      v-if="choose === 1"
      @mouseover="timerClear"
      @mouseleave="timerLoad"
    >
      <div class="titleBox sqTitle flex-column">
        <span class="num" style="font-size: 0.21rem; color: #fff"> 85 </span>
        <span>墒情评分</span>
      </div>
      <img class="circleimg sqCircle" src="~images/land/circle_bg.png" />
      <img class="nocircle sqnoCircle" src="~images/land/nocircle.png" />
      <div class="sqheight">
        <span>10cm</span>
        <span>20cm</span>
        <span>40cm</span>
      </div>
      <div class="sqBox">
        <div class="flex-between sqBox1">
          <div class="flex-column flex-center">
            <span class="sqValue">20℃</span>
            <span>温度</span>
          </div>
          <div class="flex-column flex-center">
            <span class="sqValue">60%</span>
            <span>湿度</span>
          </div>
        </div>
        <div class="flex-column flex-center sqBox2">
          <div class="flex-column flex-center">
            <span class="sqValue">20℃</span>
            <span>温度</span>
          </div>
          <div class="flex-column flex-center">
            <span class="sqValue">60%</span>
            <span>湿度</span>
          </div>
        </div>
        <div class="flex-column flex-center sqBox3">
          <div class="flex-column flex-center">
            <span class="sqValue">20℃</span>
            <span>温度</span>
          </div>
          <div class="flex-column flex-center">
            <span class="sqValue">60%</span>
            <span>湿度</span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="contDiv qxCont flex-center"
      v-if="choose === 2"
      @mouseover="timerClear"
      @mouseleave="timerLoad"
    >
      <div class="titleBox flex-column">
        <span class="num" style="font-size: 0.21rem; color: #fff"> 90 </span>
        <span>虫情评分</span>
      </div>
      <img class="circleimg" src="~images/land/circle_bg.png" />
      <img class="nocircle" src="~images/land/nocircle.png" />
      <div
        v-for="(item, index) in cqcirImages"
        :key="index"
        class="smallCircle"
        :class="'smallCircle' + index"
      >
        <img class="cqiconImg" :src="item" />
      </div>
      <div
        class="qxBox flex-column flex-center"
        :class="'qxBox' + index"
        v-for="(item, index) in cqData"
        :key="index"
      >
        <span>{{ item.name }}</span>
        <span class="textColor" style="font-size: 0.11rem">
          {{ item.value }}
        </span>
      </div>
    </div>

    <div
      class="contDiv trfxCont flex-center"
      v-if="choose === 3"
      @mouseover="timerClear"
      @mouseleave="timerLoad"
    >
      <div class="titleBox flex-column">
        <span class="num" style="font-size: 0.21rem; color: #fff"> 90 </span>
        <span>土壤评分</span>
      </div>
      <img class="circleimg" src="~images/land/circle_bg.png" />
      <img class="nocircle" src="~images/land/nocircle.png" />
      <div
        class="qxBox flex-column flex-center"
        :class="'trBox' + index"
        v-for="(item, index) in trfxData"
        :key="index"
      >
        <span>{{ item.name }}</span>
        <span class="textColor" style="font-size: 0.11rem">
          {{ item.value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      activeName: "0",
      choose: 0,
      chooseList: ["气象", "墒情", "虫情", "土壤分析"],
      qxcirImages: [
        require("images/land/ico_sd.png"),
        require("images/land/ico_qy.png"),
        require("images/land/ico_yl.png"),
        require("images/land/ico_fs.png"),
        require("images/land/ico_gzd.png"),
        require("images/land/ico_wd.png"),
      ],
      cqcirImages: [
        require("images/land/img_ce.png"),
        require("images/land/img_hc.png"),
        require("images/land/img_tzm.png"),
        require("images/land/img_qx.png"),
        require("images/land/img_ee.png"),
        require("images/land/img_lxm.png"),
      ],
      qxData: [
        {
          name: "湿度",
          value: "64",
          unit: "%",
        },
        {
          name: "气压",
          value: "1010",
          unit: "hPa",
        },
        {
          name: "雨量",
          value: "10",
          unit: "mm",
        },
        {
          name: "风速",
          value: "16",
          unit: "m/s",
        },
        {
          name: "光照",
          value: "280",
          unit: "lux",
        },
        {
          name: "温度",
          value: "28.4",
          unit: "℃",
        },
      ],
      cqData: [
        {
          name: "尺蛾",
          value: "64",
        },
        {
          name: "红蝽",
          value: "55",
        },
        {
          name: "桃蛀溟",
          value: "10",
        },
        {
          name: "七星",
          value: "16",
        },
        {
          name: "夜蛾",
          value: "280",
        },
        {
          name: "梨星毛",
          value: "65",
        },
      ],
      trfxData: [
        {
          name: "土种名称",
          value: "沙壤土",
        },
        {
          name: "PH",
          value: "6.9",
        },
        {
          name: "有机质",
          value: "10",
        },
        {
          name: "有效磷",
          value: "16",
        },
        {
          name: "质地",
          value: "软",
        },
        {
          name: "全氮",
          value: "65",
        },
      ],
    };
  },
  mounted() {
    this.timerLoad();
  },
  methods: {
    timerLoad() {
      if (this.timer === null) {
        this.timer = setInterval(() => {
          if (this.choose < this.chooseList.length - 1) {
            this.choose++;
          } else {
            this.choose = 0;
          }
        }, 3000);
      }
    },
    timerClear() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="stylus" scoped>
.el-tabs
  height 100%

  >>>.el-tabs__header
    margin-bottom 8px

  >>>.el-tabs__nav-next
    line-height .17rem

  >>>.el-tabs__nav-prev
    line-height .17rem

  >>>.el-tabs__item
    color #2172AA
    font-size .075rem
    height .15rem
    line-height .15rem

  >>>.el-tabs__nav-wrap::after
    background none

  >>>.el-tabs__item:hover
    color #9BF5F9

  >>>.el-tabs__item.is-active
    color #9BF5F9

  >>>.el-tabs__active-bar
    background #15467B
    height: 0.05rem;
    z-index: -1;

  >>>.el-tabs__content
    height calc(100% - .17rem - 8px)

  >>>.el-tab-pane
    height 100%

.ricebaseBox
  height 100%
  display flex
  align-items: flex-start;
  position relative
  .chooseDiv
    color: #358AC5;
    font-size 0.07rem
    width 20%
    div
      width 0.4rem
      height 0.2rem
      background #052352
      line-height: 0.21rem;
      text-align: center;
      margin-bottom: 0.1rem;
      cursor pointer

  .active
    background: linear-gradient(90deg, rgba(0, 255, 252, .2) 0%, #0C2439 100%) !important;
    border 1px solid #00FFFC
    border-left 5px solid #00fffc
    border-radius: 0 5px 5px 0;
    color #00FFFC
    box-sizing border-box

  .qxCont
    background url("~images/land/ico_qx.png")
    background-size 92% 100%

  .sqCont
    background url("~images/land/img_sq.png")
    background-size 100% 100%

  .trfxCont
    background url("~images/land/img_trfx.png")
    background-size 100% 100%

  .contDiv
    width: 2rem;
    height: 2rem;
    margin-left: 5%;
    background-repeat no-repeat
    background-position: 50%;

    .titleBox
      position absolute
      color #C0E7FF
      font-size 0.08rem
      align-items center
      z-index 2

    .sqTitle
      top: 44%;

    .sqCircle,.sqnoCircle
      position: absolute;
      top: 37%;

    .sqheight
      color #fff
      font-size 0.06rem
      span
        position absolute
      span:nth-child(1)
        top: 5%;
        left: 58%;
      span:nth-child(2)
        bottom: 22%;
        right: 2%;
      span:nth-child(3)
        bottom: 21%;
        left: 26.5%;

    .sqBox
      font-size: 0.07rem;
      color: #fff;
      .sqValue
        font-size: 0.09rem;
        color #07C7D2
      .sqBox1
        position: absolute;
        top: 13%;
        left: 52%;
        width: 18%;
        height: 15%;
      .sqBox2
        position: absolute;
        bottom: 18%;
        left: 34%;
        width: 11%;
        height: 22%;
      .sqBox3
        position: absolute;
        bottom: 18%;
        right: 10%;
        width: 11%;
        height: 22%;

    .circleimg
      width 0.72rem
      animation rotation 8s linear infinite
      -moz-animation rotation 8s linear infinite
      -webkit-animation rotation 8s linear infinite
      -o-animation rotation 8s linear infinite

    .nocircle
      position absolute
      width 0.72rem
      z-index 1

    .smallCircle0
      top: 0.8%;
      right: 33.5%;
    .smallCircle1
      top: 20%;
      right: 3.6%;
    .smallCircle2
      bottom: 32%;
      right: 3.6%;
    .smallCircle3
      bottom: 12.8%;
      right: 33.5%;
    .smallCircle4
      bottom: 32%;
      left: 27.5%;
    .smallCircle5
      top: 20%;
      left: 27.5%;

    .smallCircle
      position absolute
      width: 0.22rem;
      height: 0.22rem;

      .circlebg
        position: absolute;
        height: 100%;
        animation rotation 8s linear infinite
        -moz-animation rotation 8s linear infinite
        -webkit-animation rotation 8s linear infinite
        -o-animation rotation 8s linear infinite

      .qxiconImg
        position: absolute;
        top: 30%;
        left: 30%;
        width: 0.09rem;

      .cqiconImg
        width: 100%;

    .qxBox
      position absolute
      color #fff
      font-size 0.08rem
      width: 15%;
      height: 20%;

    .qxBox0
      top: 8%;

    .qxBox1
      top: 20%;
      right: 10%;

    .qxBox2
      bottom: 30%;
      right: 10%;

    .qxBox3
      bottom: 20%;

    .qxBox4
      bottom: 30%;
      left: 34%;

    .qxBox5
      top: 20%;
      left: 34%;

    .qxBox0,.qxBox2,.qxBox4,.trBox0,.trBox2,.trBox4
      .textColor
        color #9DD168

    .qxBox1,.qxBox3,.qxBox5,.trBox1,.trBox3,.trBox5
      .textColor
        color #08B6C4

    .trBox0
      top: 2%;

    .trBox1
      top: 18%;
      right: 6%;

    .trBox2
      bottom: 28%;
      right: 6%;

    .trBox3
      bottom: 12%;
    .trBox4
      bottom: 28%;
      left: 30%;

    .trBox5
      top: 18%;
      left: 30%;


@keyframes rotation
  from
    -webkit-transform rotate(0deg)

  to
    -webkit-transform rotate(360deg)
</style>
