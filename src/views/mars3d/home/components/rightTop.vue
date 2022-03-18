<template>
  <div class="right-top">
    <v-card>
      <v-title>地块信息</v-title>
      <div style="height: calc(100% - 43px)">
        <div class="head">
          <p>名称</p>
          <p>面积</p>
        </div>
        <vue-seamless-scroll
          :data="xcjl"
          class="seamless-warp"
          :class-option="defaultOption"
        >
          <div v-for="(item, index) in xcjl" :key="index" class="body">
            <p>{{ item.name }}</p>
            <p>{{ item.num }}</p>
          </div>
        </vue-seamless-scroll>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xcjl: [
        { name: "地块一", num: "7亩" },
        { name: "地块二", num: "5.4亩" },
        { name: "地块三", num: "8.2亩" },
      ],
    };
  },
  computed: {
    defaultOption() {
      return {
        step: 0.15, // 数值越大速度滚动越快
        limitMoveNum: 7, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 0, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.right-top
  position absolute
  top 10px
  left 20px
  border-radius 5px
  color #0ff
  width 22%

  .head
    height .15rem
    width 100%
    line-height .15rem
    color #fff
    text-align center
    display flex

  .body
    display flex
    width 100%

  .head, .body
    p
      color #fff
      line-height 3
      text-align center
    p:nth-child(1)
      width 50%
    p:nth-child(2)
      width 50%

  .seamless-warp
    width 100%
    height calc(100% - .15rem)
    overflow hidden
</style>
