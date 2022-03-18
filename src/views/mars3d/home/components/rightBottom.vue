<template>
  <div class="right-bottom">
    <v-card>
      <v-title>种植面积</v-title>
      <div class="content" ref="chart"></div>
    </v-card>
  </div>
</template>

<script>
import { loadChart } from "../chart/barChart";
let chart = null;
export default {
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      chart = this.$echarts.init(this.$refs.chart);
      loadChart(chart);

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
.right-bottom
  position absolute
  bottom 10px
  right 20px
  height 30%
  width  30%

  .content
    height calc(100% - 43px)
</style>
