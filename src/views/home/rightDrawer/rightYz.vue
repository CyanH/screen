<template>
  <div class="panel">
    <v-card>
      <v-title>电子围栏</v-title>
      <div class="content">
        <div class="chart" ref="chart" />
      </div>
    </v-card>
  </div>
</template>

<script>
import { loadChart } from "./charts/chartData";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.chart = this.$echarts.init(this.$refs.chart);

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
      loadChart(this.chart, data);

      window.addEventListener("resize", () => {
        this.chart.resize();
      });
    },
    djClick(val) {
      this.xzIndex = val;
      if (this.xzIndex == 0) {
        this.list = this.list1;
      } else {
        this.list = this.list2;
      }
    },
  },
  destroyed() {
    this.chart.dispose();
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styl/varibles.styl'
.panel
  height calc(33% - 8px)
  margin-bottom: 8px
  font-size 0.06rem
  overflow hidden
.content
  height calc(100% - 0.21rem)
  text-align center
  position relative
.chart
  height 100%
  width 100%
</style>
