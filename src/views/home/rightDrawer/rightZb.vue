<template>
  <div class="panel">
    <v-card>
      <v-title>水质监测</v-title>

      <div style="padding: 0 10px 10px; height: calc(100% - 53px)">
        <el-tabs v-model="activeNameSq" @tab-click="handleClickQxz">
          <el-tab-pane label="实时" name="now">
            <div class="qxCon">
              <div v-for="(item, index) in qxList" :key="index">
                <p><img :src="item.img" alt="" />{{ item.name }}</p>
                <span>{{ item.value }}{{ item.unit }}</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历史" name="history">
            <div class="chart" ref="sqChart"></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </v-card>
  </div>
</template>

<script>
import { loadChart } from "./charts/equipData";
let chart = null;
export default {
  data() {
    return {
      activeNameSq: "now",
      qxList: [
        {
          img: require("images/plant/ico_dqwd.png"),
          value: "22",
          unit: "°C",
          name: "水温",
        },
        {
          img: require("images/plant/ico_fs.png"),
          value: "14.1",
          unit: "S",
          name: "电导",
        },
        {
          img: require("images/plant/ico_qy.png"),
          value: "999",
          unit: "hPa",
          name: "氧化还原",
        },
        {
          img: require("images/plant/ico_dqsd.png"),
          value: "55",
          unit: "%",
          name: "溶解氧",
        },
        {
          img: require("images/plant/ico_gz.png"),
          value: "164",
          unit: "lux",
          name: "浊度",
        },
        {
          img: require("images/plant/ico_yl.png"),
          value: "0",
          unit: "mm",
          name: "悬浮物",
        },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      chart = this.$echarts.init(this.$refs.chart);

      let data = [
        {
          name: "带动农户",
          value: 165520,
        },
        {
          name: "紧密型",
          value: 120,
        },
        {
          name: "松散型",
          value: 5300,
        },
        {
          name: "辐射型",
          value: 160000,
        },
        {
          name: "带动贫困人口",
          value: 100,
        },
      ];
      loadChart(chart, data);

      window.addEventListener("resize", () => {
        chart.resize();
      });
    },
  },
  destroyed() {
    chart.dispose();
  },
};
</script>

<style lang="stylus" scoped>
.panel
  height 34%
  font-size .06rem

.el-tabs
  height 100%

  >>>.el-tabs__header
    margin 0 0 10px

  >>>.el-tabs__content
    height calc(100% - 50px)

  >>>.el-tab-pane
    height 100%

  >>>.el-tabs__item
    color #fff

  >>>.el-tabs__item.is-active
    color rgb(243, 208, 19)

  >>>.el-tabs__nav-wrap::after
    height 0

  >>>.el-tabs__active-bar
    background rgb(243, 208, 19)

.chart
  width 100%
  height calc(100% - 40px)

.qxCon
  display flex
  justify-content center
  flex-wrap wrap
  height 100%
  padding 0 10px

.qxCon>div
  width 32%
  margin .5%
  box-sizing border-box
  background url('~images/plant/qxlist.png')
  background-size 100% 100%
  align-items center
  height 49%
  display flex
  flex-wrap wrap
  flex-direction column
  justify-content center

.qxCon
  img
    height 20px
    display inline-block
    margin-right 5px

  p
    display flex
    align-items center
    font-size 16px
    color #fff
    text-align center
    justify-content center
    width 100%
    margin-bottom 5px

  span
    display block
    text-align center
    color #3BFAD6
    width 100%
    font-size 20px
</style>
