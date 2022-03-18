<template>
  <div>
    <div class="menu_ghcx">
      <div class="search-box">
        <el-select
          v-model="searchValue"
          clearable
          filterable
          remote
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading"
          @change="handleSelect"
        >
          <el-option
            v-for="(item, index) in options"
            :key="index"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>

      <div class="unit_body">
        <div class="flex-around">
          <div
            @click="handleChose(0)"
            class="flex cardDiv"
            :class="chooseIndex === 0 ? 'activeDiv' : ''"
          >
            <img
              :src="
                chooseIndex === 0
                  ? require('images/tjcx/ico_qb_l.png')
                  : require('images/tjcx/ico_qb.png')
              "
              class="icon"
            /><span>全部</span>
          </div>
          <div
            @click="handleChose(1)"
            class="flex cardDiv"
            :class="chooseIndex === 1 ? 'activeDiv' : ''"
          >
            <img
              :src="
                chooseIndex === 1
                  ? require('images/tjcx/ico_qy_l.png')
                  : require('images/tjcx/ico_qy.png')
              "
              class="icon"
            /><span>农户</span>
          </div>
          <div
            @click="handleChose(2)"
            class="flex cardDiv"
            :class="chooseIndex === 2 ? 'activeDiv' : ''"
          >
            <img
              :src="
                chooseIndex === 2
                  ? require('images/tjcx/ico_xm_l.png')
                  : require('images/tjcx/ico_xm.png')
              "
              class="icon"
            /><span>田块</span>
          </div>
        </div>
        <div class="buffer flex-between">
          <div class="line_serch flex">
            <span>查询半径</span>
            <el-input
              oninput="value=value.replace(/[^\d]/g,'')"
              v-model="hcNum"
            ></el-input>

            <span class="del-item" style="display: inline">公里</span>
          </div>
          <div class="topic-line flex">
            <div
              class="topic"
              :class="topicIndex === 0 ? 'active' : ''"
              @click="handleClick(0)"
            >
              <img src="~images/tjcx/ico_line.png" />
            </div>
            <div
              class="topic"
              :class="topicIndex === 1 ? 'active' : ''"
              @click="handleClick(1)"
            >
              <img src="~images/tjcx/ico_point.png" />
            </div>
            <div
              class="topic"
              :class="topicIndex === 2 ? 'active' : ''"
              @click="handleClick(2)"
            >
              <img src="~images/tjcx/ico_squire.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="!showSearch">
      <v-drawer :direction="'right'" :width="'26%'">
        <div style="margin-bottom: 5px; height: calc(50% - 5px)">
          <v-card>
            <v-title>土地统计</v-title>
            <div class="content" ref="tdChart"></div>
          </v-card>
        </div>
        <div style="height: calc(50% - 5px); margin-top: 5px">
          <v-card>
            <v-title>各镇农田统计</v-title>
            <div class="content" ref="ntChart"></div>
          </v-card>
        </div>
      </v-drawer>
    </div>

    <div class="searchValue" v-if="showSearch">
      <div class="right-top">
        <v-card>
          <v-title>农田归属</v-title>
          <div style="height: calc(100% - 43px)">
            <div class="head">
              <p>姓名</p>
              <p>联系方式</p>
              <p>农田面积</p>
            </div>
            <vue-seamless-scroll
              :data="xcjl"
              class="seamless-warp"
              :class-option="defaultOption"
            >
              <div v-for="(item, index) in xcjl" :key="index" class="body">
                <p>{{ item.name }}</p>
                <p>{{ item.num }}</p>
                <p>{{ item.date }}</p>
              </div>
            </vue-seamless-scroll>
          </div>
        </v-card>
      </div>
      <div class="right-bottom">
        <v-card>
          <v-title>种植面积</v-title>
          <div class="content" ref="chart"></div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
let layer = null,
  areaLayer = null,
  chart = null,
  tdChart = null,
  ntChart = null,
  serchArr = [
    {
      label: "怀集双禄垌蔬菜种植基地",
      value: 1,
    },
    {
      label: "怀集桐光村韭菜、莲藕基地",
      value: 2,
    },
    {
      label: "怀集谭脉西瓜种植基地",
      value: 3,
    },
  ],
  searchLayer = null;
import { mapGetters } from "vuex";
import { loadChart } from "./chart/barChart";
import { loadTdChart } from "./chart/pieChart";
import { loadNtChart } from "./chart/ntBarChart";
export default {
  data() {
    return {
      searchValue: "",
      chooseIndex: 0,
      topicIndex: null,
      hcNum: "10",
      showSearch: false,
      xcjl: [
        { name: "李王一", num: "18111432124", date: "7亩" },
        { name: "韩四", num: "18812341234", date: "5.4亩" },
        { name: "王五", num: "13821211212", date: "8.2亩" },
        { name: "张华", num: "13512911921", date: "4.9亩" },
      ],
      loading: false,
      options: [],
    };
  },
  computed: {
    ...mapGetters(["map"]),
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
  watch: {
    map(val) {
      if (val) {
        this.createLayer();
      }
    },
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      tdChart = this.$echarts.init(this.$refs.tdChart);
      loadTdChart(tdChart);

      ntChart = this.$echarts.init(this.$refs.ntChart);
      loadNtChart(ntChart);

      window.addEventListener("resize", () => {
        tdChart.resize();
        ntChart.resize();
      });
    },
    initChart() {
      chart = this.$echarts.init(this.$refs.chart);
      loadChart(chart);

      window.addEventListener("resize", () => {
        chart.resize();
      });
    },
    createLayer() {
      layer = new window.esri.layers.GraphicsLayer();
      this.map.addLayer(layer);
      searchLayer = new window.esri.layers.GraphicsLayer();
      this.map.addLayer(searchLayer);
      areaLayer = new window.esri.layers.GraphicsLayer();
      this.map.addLayer(areaLayer);
      this.createPolygon();
    },
    handleChose(index) {
      this.chooseIndex = index;
    },
    handleClick(index) {
      this.topicIndex = index;
      if (index === 0) {
        // 画线

        this.search("polyline");
      } else if (index === 1) {
        // 画圆
        this.search("point");
      } else {
        this.search("polygon");
      }
    },
    // 缓存查询
    search(type) {
      layer.clear();
      // 进入绘制
      let draw = new window.esri.toolbars.Draw(this.map);
      // 开启绘制几何
      draw.activate(type);
      // 监听完成事件
      let drawFn = draw.on("draw-complete", (e) => {
        if (type === "polyline") {
          e.geometry = window.esri.geometry.geometryEngine.buffer(
            e.geometry,
            this.hcNum * 1000
          );
        } else if (type === "point") {
          e.geometry = new window.esri.geometry.Circle(e.geometry, {
            radiusUnit: window.esri.Units.KILOMETERS,
            radius: Number(this.hcNum),
          });
        } else {
          e.geometry = window.esri.geometry.geometryEngine.buffer(
            e.geometry,
            this.hcNum * 1000
          );
        }
        // 去除掉回调
        drawFn.remove();
        // 关闭绘制
        draw.deactivate();
        // 绘图
        this.setGometry(e.geometry);
        this.topicIndex = null;
        // 去除掉按钮事件
        document.onkeyup = null;
      });
      let _this = this;
      // 监听ESC退出
      document.onkeyup = (evt) => {
        if (evt.key === "Escape") {
          _this.topicIndex = null;
          // 去除掉回调
          drawFn.remove();
          // 关闭绘制
          draw.deactivate();
          // 去除掉自己
          document.onkeyup = null;
        }
      };
    },
    setGometry(geometry) {
      // 绘制几何
      let lineSymbol = new window.esri.symbol.SimpleLineSymbol(
        window.esri.symbol.SimpleLineSymbol.STYLE_DASH,
        new window.esri.Color([255, 0, 0]),
        3
      );
      let color = new window.esri.Color([255, 0, 0]);
      color.a = 0.2;
      let fillSymbol = new window.esri.symbol.SimpleFillSymbol(
        window.esri.symbol.SimpleFillSymbol.STYLE_SOLID,
        lineSymbol,
        color
      );
      // 获取存放几何得图层
      let drawGeometrys = new window.esri.Graphic(geometry, fillSymbol);

      layer.add(drawGeometrys);

      this.showSearch = true;
      setTimeout(() => {
        this.initChart();
      }, 300);
    },
    createPolygon() {
      let polygon = [
        [
          [
            [12472592.423341626, 2738328.36549962],
            [12472972.219825927, 2738433.4664135147],
            [12472824.123083621, 2738734.4372123955],
            [12472554.204827482, 2738672.332126912],
          ],
        ],
        [
          [
            [12472005.250395574, 2739115.378113467],
            [12472119.905938005, 2738847.848514462],
            [12472353.994337134, 2738929.062857017],
            [12472234.561480435, 2739196.5924560223],
          ],
        ],
        [
          [
            [12472920.601398094, 2739050.6221139072],
            [12473137.969197284, 2739179.609599142],
            [12473176.187711429, 2739110.3385422565],
            [12472968.374540772, 2738995.682999826],
          ],
        ],
        [
          [
            [12473287.698706958, 2739201.064052748],
            [12473626.888019983, 2739387.3793091984],
            [12473688.993105466, 2739239.2825668915],
            [12473364.135735245, 2739100.7404531213],
          ],
        ],
      ];
      polygon.map((it) => {
        let polygon = new window.esri.geometry.Polygon({
          rings: it,
          spatialReference: this.map.spatialReference,
        });
        let lineSymbol = new window.esri.symbol.SimpleLineSymbol(
          window.esri.symbol.SimpleLineSymbol.STYLE_SOLID,
          new window.esri.Color("#66ccff"),
          2
        );
        let color = new window.esri.Color("#66ccff");
        color.a = 0.6;
        let fillSymbol = new window.esri.symbol.SimpleFillSymbol(
          window.esri.symbol.SimpleFillSymbol.STYLE_SOLID,
          lineSymbol,
          color
        );
        let graphic = new window.esri.Graphic(polygon, fillSymbol);
        areaLayer.add(graphic);
      });
    },
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.options = serchArr.filter((item) => {
            return item.label.indexOf(query) > -1;
          });
          this.loading = false;
        });
      } else {
        this.options = [];
      }
    },
    handleSelect(val) {
      searchLayer.clear();

      if (val === "") {
        return;
      }
      let rings = [
        [
          [12469450.044676041, 2741788.4103029626],
          [12470787.69267103, 2742610.108357027],
          [12471666.718496308, 2740613.19099308],
        ],
      ];

      let polygon = new window.esri.geometry.Polygon({
        rings,
        spatialReference: this.map.spatialReference,
      });
      let lineSymbol = new window.esri.symbol.SimpleLineSymbol(
        window.esri.symbol.SimpleLineSymbol.STYLE_SOLID,
        new window.esri.Color("#66ccff"),
        2
      );
      let color = new window.esri.Color("#66ccff");
      color.a = 0.6;
      let fillSymbol = new window.esri.symbol.SimpleFillSymbol(
        window.esri.symbol.SimpleFillSymbol.STYLE_SOLID,
        lineSymbol,
        color
      );
      let graphic = new window.esri.Graphic(polygon, fillSymbol);

      searchLayer.add(graphic);
      this.map.centerAt(graphic.geometry.getCentroid());
    },
  },
  destroyed() {
    if (chart) chart.dispose();
    if (tdChart) tdChart.dispose();
    if (ntChart) ntChart.dispose();
  },
};
</script>

<style lang="stylus" scoped>
.menu_ghcx
  position absolute
  top 30px
  left 30px
  background rgba(14, 31, 68, .6)
  width 320px
  z-index 9

.search-box
  border solid 1px #00F9FC

  .el-select
    width 100%
    >>>.el-input__inner
      color #00F9FD
      border none
      background #0F4069
      width 100%

    >>>.el-input__suffix
      color #00F9FD
      font-size 22px

.unit_body
  padding 10px

  .cardDiv
    background #0F4069
    padding 5px 15px
    border-radius 3px
    color #00F9FD
    font-size 12px
    display flex
    align-items center
    cursor pointer

  .icon
    padding-right 3px

  .activeDiv
    color #ffc022

.buffer
  padding 10px 15px
  color #fff

  .el-input
    width 40px
    padding 0 5px

    >>>.el-input__inner
      height 28px
      line-height 28px
      padding 0 10px
      color #00F9FD
      border none
      border-radius 2px
      background #0F4069
      text-align center

  .topic
    cursor pointer
    margin 0px 5px
    padding 3px
    border 1px solid transparent

    img
      width 20px

  .active
    border-color #ffc022

.right-top
  position absolute
  top 10px
  right 20px
  height 30%

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
      width 33%
    p:nth-child(2)
      width 34%
    p:nth-child(3)
      width 33%

  .seamless-warp
    width 100%
    height calc(100% - .15rem)
    overflow hidden

.right-bottom
  position absolute
  bottom 10px
  right 20px
  height 30%
  width 30%

.content
  height calc(100% - 43px)
</style>
