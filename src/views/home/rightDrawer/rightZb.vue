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
            <div class="chart" ref="chart"></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </v-card>
  </div>
</template>

<script>
import { loadQxzChart } from "./charts/qxzChart";
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

  methods: {
    handleClickQxz(val) {
      if (val.index === "0") {
        chart.dispose();
        chart = null;
      } else {
        setTimeout(() => {
          this.getData();
        }, 500);
      }
    },
    getData() {
      chart = this.$echarts.init(this.$refs.chart);

      let data = [
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          airp: 1012.6,
          date: 1644940816000,
          temp: 10.7,
          speed: 0.9,
          humi: 86.7,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          direction: 11.0,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          direction: 94.0,
          humi: 88.2,
          date: 1644942610000,
          airp: 1012.7,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          temp: 10.6,
          speed: 0.0,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          humi: 90.3,
          direction: 118.0,
          date: 1644944413000,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          temp: 10.5,
          speed: 0.3,
          airp: 1012.4,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          airp: 1012.3,
          speed: 0.4,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          date: 1644946207000,
          temp: 10.5,
          humi: 90.2,
          direction: 63.0,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          humi: 88.2,
          direction: 332.0,
          speed: 0.9,
          airp: 1011.9,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          date: 1644948013000,
          temp: 10.3,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          speed: 0.2,
          humi: 88.1,
          airp: 1011.9,
          date: 1644949808000,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          direction: 241.0,
          temp: 10.3,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          airp: 1011.5,
          temp: 10.2,
          direction: 180.0,
          date: 1644951609000,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          speed: 0.0,
          humi: 88.0,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          speed: 1.0,
          temp: 10.1,
          airp: 1011.0,
          direction: 304.0,
          humi: 88.3,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          date: 1644953409000,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          direction: 275.0,
          humi: 89.2,
          airp: 1011.2,
          date: 1644955216000,
          temp: 10.0,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          speed: 0.0,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          humi: 88.7,
          direction: 349.0,
          airp: 1011.2,
          temp: 10.0,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          date: 1644957008000,
          speed: 0.5,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          humi: 91.1,
          temp: 9.9,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          date: 1644958815000,
          airp: 1011.4,
          speed: 0.3,
          direction: 44.0,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          humi: 89.7,
          date: 1644960606000,
          direction: 315.0,
          temp: 10.0,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          airp: 1011.4,
          speed: 0.0,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          direction: 85.0,
          airp: 1011.9,
          date: 1644962414000,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          temp: 9.8,
          humi: 93.3,
          speed: 0.0,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          direction: 134.0,
          airp: 1011.9,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          humi: 91.8,
          speed: 0.3,
          temp: 9.8,
          date: 1644964208000,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          speed: 0.2,
          direction: 171.0,
          date: 1644966012000,
          temp: 10.2,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          humi: 90.9,
          airp: 1012.1,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          speed: 0.2,
          temp: 10.2,
          date: 1644967810000,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          humi: 88.5,
          airp: 1012.4,
          direction: 147.0,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          humi: 87.3,
          airp: 1012.5,
          speed: 0.6,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          temp: 10.5,
          date: 1644969618000,
          direction: 289.0,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          speed: 0.2,
          humi: 89.2,
          airp: 1012.8,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          date: 1644971411000,
          temp: 10.5,
          direction: 202.0,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          speed: 0.2,
          airp: 1013.3,
          direction: 287.0,
          humi: 91.6,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          temp: 10.6,
          date: 1644973213000,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          speed: 0.2,
          direction: 13.0,
          date: 1644975011000,
          temp: 11.0,
          humi: 90.7,
          airp: 1013.5,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          direction: 195.0,
          airp: 1013.4,
          temp: 11.0,
          date: 1644976815000,
          humi: 90.0,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          speed: 0.3,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          speed: 0.2,
          airp: 1013.4,
          date: 1644978612000,
          humi: 89.9,
          direction: 294.0,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          temp: 11.1,
        },
        {
          wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
          direction: 125.0,
          airp: 1012.7,
          wlwWeatherCode: "CJ02A-2100027",
          wlwWeatherName: "金穗华晨气象",
          humi: 87.0,
          speed: 0.0,
          temp: 11.9,
          date: 1644980411000,
        },
      ];

      loadQxzChart(chart, data, 1);

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
    height calc(100% - 38px)

  >>>.el-tab-pane
    height 100%

  >>>.el-tabs__item
    color #fff
    height 28px
    line-height 28px
    padding 0 15px

  >>>.el-tabs__item.is-active
    color rgb(243, 208, 19)

  >>>.el-tabs__nav-wrap::after
    height 0

  >>>.el-tabs__active-bar
    background rgb(243, 208, 19)

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
