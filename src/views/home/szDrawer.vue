<template>
  <v-drawer :direction="'right'" :width="'25%'">
    <el-button
      class="closeBtn"
      @click="handleClose"
      icon="el-icon-circle-close"
    ></el-button>
    <div style="height: calc(30% - 8px); margin-bottom: 8px">
      <v-card>
        <v-title>水质检测器</v-title>

        <div class="qxCon">
          <div v-for="(item, index) in qxList" :key="index">
            <p><img :src="item.img" alt="" />{{ item.name }}</p>
            <span>{{ item.value }}{{ item.unit }}</span>
          </div>
        </div>
      </v-card>
    </div>

    <div style="height: calc(50% - 8px); margin-bottom: 8px">
      <v-card>
        <v-title>历史情况</v-title>

        <div style="padding: 0 10px 10px; height: calc(100% - 53px)">
          <el-tabs v-model="activeNameQxz" @tab-click="handleClickQxz">
            <el-tab-pane label="今天" name="1"></el-tab-pane>
            <el-tab-pane label="最近7天" name="7"></el-tab-pane>
            <el-tab-pane label="最近15天" name="15"></el-tab-pane>
          </el-tabs>
          <div class="chart qxzChart" ref="qxzChart"></div>
        </div>
      </v-card>
    </div>
    <div style="height: 20%">
      <v-card>
        <v-title>环境预警</v-title>

        <div class="yjCon">
          <p>
            <img src="~images/plant/ico_jb_lan.png" />
            2022-03-21，悬浮物浓度偏高
          </p>
          <p>
            <img src="~images/plant/ico_jb_lan.png" />
            2022-03-17，PH值偏低
          </p>
        </div>
      </v-card>
    </div>
  </v-drawer>
</template>

<script>
import { loadQxzChart } from "./rightDrawer/charts/qxzChart";

export default {
  watch: {
    activeNameQxz() {
      this.getWeatherData();
    },
  },
  data() {
    return {
      activeNameQxz: "1",
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
          unit: "μS/cm",
          name: "电导率",
        },
        {
          img: require("images/plant/ico_qy.png"),
          value: "6.4",
          unit: "",
          name: "pH",
        },
        {
          img: require("images/plant/ico_dqsd.png"),
          value: "8",
          unit: "mg/L",
          name: "溶解氧",
        },
        {
          img: require("images/plant/ico_gz.png"),
          value: "1.4",
          unit: "NTU",
          name: "浊度",
        },
        {
          img: require("images/plant/ico_yl.png"),
          value: "0.1",
          unit: "mg/L",
          name: "悬浮物",
        },
      ],
    };
  },
  mounted() {
    this.qxzChart = this.$echarts.init(this.$refs.qxzChart);

    this.initChart();
    this.getWeatherData();
  },
  methods: {
    initChart() {
      this.qxzChart = this.$echarts.init(this.$refs.qxzChart);
      window.addEventListener("resize", () => {
        this.qxzChart.resize();
      });
    },
    getWeatherData() {
      if (this.activeNameQxz == 1) {
        let data = [
          {
            date: 1644940816000,
            temp: 10.7,
            ec: 0.9,
            pH: 6.7,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            direction: 11.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            direction: 94.0,
            pH: 8.2,
            date: 1644942610000,
            airp: 1012.7,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            temp: 10.6,
            ec: 0.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            pH: 9.3,
            direction: 118.0,
            date: 1644944413000,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            temp: 10.5,
            ec: 0.3,
            airp: 1012.4,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            airp: 1012.3,
            ec: 0.4,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            date: 1644946207000,
            temp: 10.5,
            pH: 9.2,
            direction: 63.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            pH: 8.2,
            direction: 332.0,
            ec: 0.9,
            airp: 1011.9,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            date: 1644948013000,
            temp: 10.3,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            ec: 0.2,
            pH: 8.1,
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
            ec: 0.0,
            pH: 8.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            ec: 1.0,
            temp: 10.1,
            airp: 1011.0,
            direction: 304.0,
            pH: 8.3,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            date: 1644953409000,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            direction: 275.0,
            pH: 8.2,
            airp: 1011.2,
            date: 1644955216000,
            temp: 10.0,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            ec: 0.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            pH: 8.7,
            direction: 349.0,
            airp: 1011.2,
            temp: 10.0,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            date: 1644957008000,
            ec: 0.5,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            pH: 9.1,
            temp: 9.9,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            date: 1644958815000,
            airp: 1011.4,
            ec: 0.3,
            direction: 44.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            pH: 8.7,
            date: 1644960606000,
            direction: 315.0,
            temp: 10.0,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            airp: 1011.4,
            ec: 0.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            direction: 85.0,
            airp: 1011.9,
            date: 1644962414000,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            temp: 9.8,
            pH: 9.3,
            ec: 0.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            direction: 134.0,
            airp: 1011.9,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            pH: 9.8,
            ec: 0.3,
            temp: 9.8,
            date: 1644964208000,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            ec: 0.2,
            direction: 171.0,
            date: 1644966012000,
            temp: 10.2,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            pH: 9.9,
            airp: 1012.1,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            ec: 0.2,
            temp: 10.2,
            date: 1644967810000,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            pH: 8.5,
            airp: 1012.4,
            direction: 147.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            pH: 7.3,
            airp: 1012.5,
            ec: 0.6,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            temp: 10.5,
            date: 1644969618000,
            direction: 289.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            ec: 0.2,
            pH: 8.2,
            airp: 1012.8,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            date: 1644971411000,
            temp: 10.5,
            direction: 202.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            ec: 0.2,
            airp: 1013.3,
            direction: 287.0,
            pH: 9.6,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            temp: 10.6,
            date: 1644973213000,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            ec: 0.2,
            direction: 13.0,
            date: 1644975011000,
            temp: 11.0,
            pH: 9.7,
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
            pH: 9.0,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            ec: 0.3,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            ec: 0.2,
            airp: 1013.4,
            date: 1644978612000,
            pH: 8.9,
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
            pH: 7.0,
            ec: 0.0,
            temp: 11.9,
            date: 1644980411000,
          },
        ];

        this.loadChart(data, 1);
      } else if (this.activeNameQxz == 7) {
        let data = [
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            pH: 9.1,
            airp: 1011.97,
            direction: 107.91,
            ec: 0.23,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            temp: 7.11,
            date: "2022-02-10",
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            temp: 8.5,
            airp: 1012.75,
            pH: 9.2,
            ec: 0.12,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            date: "2022-02-11",
            direction: 179.78,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            pH: 8.3,
            direction: 208.46,
            airp: 1013.13,
            ec: 0.9,
            date: "2022-02-12",
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            temp: 9.15,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            airp: 1012.76,
            pH: 9.1,
            ec: 0.85,
            temp: 7.5,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            direction: 192.69,
            date: "2022-02-13",
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            airp: 1013.72,
            temp: 10.83,
            pH: 8.3,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            direction: 184.05,
            date: "2022-02-14",
            ec: 1.27,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            date: "2022-02-15",
            airp: 1013.44,
            direction: 189.29,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            pH: 6.7,
            temp: 11.14,
            ec: 0.81,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            direction: 195.65,
            pH: 8.4,
            date: "2022-02-16",
            airp: 1012.15,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            temp: 10.65,
            ec: 0.32,
          },
        ];

        this.loadChart(data, 0);
      } else if (this.activeNameQxz == 15) {
        let data = [
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            airp: 1015.4,
            temp: 5.1,
            direction: 228.0,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            date: "2022-02-02",
            ec: 0.0,
            pH: 8.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            airp: 1015.4,
            temp: 5.1,
            direction: 228.0,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            date: "2022-02-03",
            ec: 0.0,
            pH: 8.0,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            airp: 1015.4,
            date: "2022-02-04",
            temp: 5.1,
            direction: 228.0,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            ec: 0.0,
            pH: 7.6,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            date: "2022-02-05",
            airp: 1015.4,
            temp: 5.1,
            direction: 228.0,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            ec: 0.0,
            pH: 6.9,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            airp: 1015.4,
            temp: 5.1,
            direction: 228.0,
            date: "2022-02-06",
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            ec: 0.0,
            pH: 6.4,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            pH: 9.4,
            date: "2022-02-09",
            temp: 6.03,
            ec: 0.9,
            airp: 1016.47,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            direction: 231.27,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            pH: 9.1,
            airp: 1011.97,
            direction: 107.91,
            ec: 0.23,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            temp: 7.11,
            date: "2022-02-10",
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            temp: 8.5,
            airp: 1012.75,
            pH: 9.2,
            ec: 0.12,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            date: "2022-02-11",
            direction: 179.78,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            pH: 8.3,
            direction: 208.46,
            airp: 1013.13,
            ec: 0.9,
            date: "2022-02-12",
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            temp: 9.15,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            airp: 1012.76,
            pH: 9.1,
            ec: 0.85,
            temp: 7.5,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            direction: 192.69,
            date: "2022-02-13",
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            airp: 1013.72,
            temp: 10.83,
            pH: 8.7,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            direction: 184.05,
            date: "2022-02-14",
            ec: 1.27,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            date: "2022-02-15",
            airp: 1013.44,
            direction: 189.29,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            pH: 6.7,
            temp: 11.14,
            ec: 0.81,
          },
          {
            wlwWeatherId: "7fb3b7329c014cac9b8d66ef48a98c61",
            direction: 195.65,
            pH: 8.4,
            date: "2022-02-16",
            airp: 1012.15,
            wlwWeatherCode: "CJ02A-2100027",
            wlwWeatherName: "金穗华晨气象",
            temp: 10.65,
            ec: 0.32,
          },
        ];

        this.loadChart(data, 0);
      }
    },
    loadChart(res, f) {
      this.qxzChart.clear();
      loadQxzChart(this.qxzChart, res, f);
    },

    handleClose() {
      this.$store.dispatch("basic/setHomeComponent", "rightDrawer");
    },
  },
  destroyed() {
    this.qxzChart.dispose();
  },
};
</script>
<style lang="stylus" scoped>
.closeBtn
  padding 0
  background transparent
  border 0
  color #fff
  font-size 24px
  z-index 9
  position absolute
  top 10px
  right 15px
  cursor pointer

  &:hover
    background transparent
    color #fff

>>>.el-tabs__header
  margin 0 0 10px

>>>.el-tabs__item
  color #fff
  height 28px
  line-height 28px

>>>.el-tabs__item.is-active
  color #3BFAD6

>>>.el-tabs__nav-wrap::after
  height 0

>>>.el-tabs__active-bar
  background #3BFAD6

.chart
  width 100%
  height calc(100% - 37px)

.qxCon
  display flex
  justify-content center
  flex-wrap wrap
  height calc(100% - 43px)
  padding 0 10px

.qxCon>div
  width 32%
  margin .5%
  box-sizing border-box
  background url('~images/plant/qxlist.png')
  background-size 100% 100%
  align-items center
  height 45%
  display flex
  flex-wrap wrap
  padding 5px
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
    margin-bottom 10px

  span
    display block
    text-align center
    color #3BFAD6
    width 100%
    font-size 20px

>>>.el-tabs__item
  color #fff

.yjCon
  display flex
  justify-content flex-start
  flex-wrap wrap
  flex-direction column
  height calc(100% - 43px)
  padding 0 10px

  p
    width 100%
    color #fff
    font-size 14px
    display flex
    align-items center
    margin-bottom 10px

  img
    height 30px
    display inline-block
    margin-right 10px
</style>
