<template>
  <div class="container">
    <div id="mars3dContainer" class="map"></div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      append-to-body
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
let map = null;
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    init() {
      this.$mars3d.Resource.fetchJson({ url: "./json/config.json" }).then(
        (json) => {
          this.initMap(json.map3d);
        }
      );
    },
    initMap(options) {
      let mapOptions = this.$mars3d.Util.merge(options, {
        scene: {
          center: {
            lat: 21.182237,
            lng: 110.414782,
            alt: 849,
            heading: 9,
            pitch: -55,
          },
        },
      });
      map = new this.$mars3d.Map("mars3dContainer", mapOptions);
      map.openFlyAnimation();
      window.map = map;

      setTimeout(() => {
        this.createLayer();
      }, 3000);
    },
    createLayer() {
      let graphicLayer = new this.$mars3d.layer.GraphicLayer();
      map.addLayer(graphicLayer);
      const graphic = new this.$mars3d.graphic.WallEntity({
        positions: [
          [110.414892, 21.192789, 1],
          [110.419124, 21.192008, 1],
          [110.41807, 21.186124, 1],
          [110.412137, 21.186468, 1],
        ],
        style: {
          closure: false,
          diffHeight: 25,
          // 动画线材质
          material: this.$mars3d.MaterialUtil.createMaterialProperty(
            this.$mars3d.MaterialType.LineFlow,
            {
              image: "img/fence.png",
              color: "#66ccff",
              speed: 10,
              axisY: true,
            }
          ),
        },
        attr: { remark: "示例13" },
      });
      graphicLayer.addGraphic(graphic);

      const shipGraphic = new this.$mars3d.graphic.BillboardEntity({
        name: "贴地图标",
        position: [110.413503, 21.188647, 0],

        style: {
          image: "img/ship.png",
          scale: 1,
          clampToGround: true,
        },
        attr: { remark: "示例3" },
      });
      graphicLayer.addGraphic(shipGraphic);

      const divGraphic = new this.$mars3d.graphic.DivGraphic({
        // eslint-disable-next-line no-undef
        position: Cesium.Cartesian3.fromDegrees(110.413503, 21.188647, 0),
        style: {
          html: `<div class="marsTiltPanel marsTiltPanel-theme-blue">
          <div class="marsTiltPanel-wrap">
              <div class="area">
                  <div class="arrow-lt"></div>
                  <div class="b-t"></div>
                  <div class="b-r"></div>
                  <div class="b-b"></div>
                  <div class="b-l"></div>
                  <div class="arrow-rb"></div>
                  <div class="label-wrap">
                      <div class="title">粤渔3264</div>
                      <div class="label-content">
                          <div class="data-li">
                              <div class="data-label">实时船速：</div>
                              <div class="data-value"><span class="label-num">2</span><span class="label-unit">m/s</span>
                              </div>
                          </div>
                          <div class="data-li">
                              <div class="data-label">出港申请：</div>
                              <div class="data-value"><span class="label-num">已申请</span>
                              </div>
                          </div>
                          <div class="data-li">
                              <div class="data-label">拟入港时间：</div>
                              <div class="data-value">2022-03-21 21:00</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="b-t-l"></div>
              <div class="b-b-r"></div>
          </div>
          <div class="arrow" ></div>
      </div>`,
        },
        attr: { remark: "示例11" },
      });
      graphicLayer.addGraphic(divGraphic);

      // 移动模型
      setTimeout(() => {
        shipGraphic.addDynamicPosition([110.413503, 21.188647, 0]);
        shipGraphic.addDynamicPosition([110.418485, 21.187442, 0], 50);
        divGraphic.addDynamicPosition([110.413503, 21.188647, 0]);
        divGraphic.addDynamicPosition([110.418485, 21.187442, 0], 50);
        // setTimeout(() => {
        //   this.dialogVisible = true;
        // }, 50000);
      }, 500);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="stylus" scoped>
.container
  position absolute
  top 0
  width 100%
  height 100%

  .map
    width 100%
    height 100%
</style>

<style lang="stylus">
.marsTiltPanel-wrap {
  position: relative;
  padding: 30px;
  overflow: hidden;
}

.marsTiltPanel .b-t {
  position: absolute;
  top: 0;
  left: 44px;
  right: 0;
  height: 1px;
  z-index: 10;
}

.marsTiltPanel .area {
  position: relative;
  min-width: 180px;
}

.marsTiltPanel .b-r {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 44px;
  width: 1px;
  z-index: 10;
}

.marsTiltPanel .b-b {
  position: absolute;
  left: 0;
  right: 44px;
  bottom: 0;
  height: 1px;
  z-index: 10;
}

.marsTiltPanel .b-l {
  position: absolute;
  top: 44px;
  left: 0;
  bottom: 0;
  width: 1px;
  z-index: 10;
}

.marsTiltPanel .b-t-l {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 62px;
  transform: rotate(45deg) translate(52px, -22px);
  z-index: 10;
}

.marsTiltPanel .b-b-r {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 1px;
  height: 62px;
  transform: rotate(45deg) translate(-52px, 22px);
  z-index: 10;
}

.marsTiltPanel .label-wrap {
  padding-left: 12px;
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
}

.marsTiltPanel .title {
  margin-top: 15px;
  padding: 0 12px 0 35px;
  height: 30px;
  line-height: 30px;
  position: relative;
}

.marsTiltPanel .title::before {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  z-index: 10;
  height: 2px;
}

.marsTiltPanel .label-content {
  padding: 15px 0;
}

.marsTiltPanel .data-li {
  padding: 4px 45px 4px 0;
}

.marsTiltPanel .data-label,
.data-value {
  display: inline-block;
}

.marsTiltPanel .data-value {
  font-size: 14px;
}

.marsTiltPanel .label-num {
  margin-right: 3px;
  color: #f09e28;
  font-weight: 600;
}

.marsTiltPanel .label-tag {
  display: inline-block;
  position: relative;
  margin-right: 6px;
  padding: 0 6px;
  font-weight: 600;
  cursor: pointer;
  background-color: #909399;
  border-radius: 4px;
}

.marsTiltPanel .label-tag::after {
  content: attr(alt);
  display: inline-block;
  position: absolute;
  bottom: -22px;
  right: -35px;
  z-index: -1;
  padding: 2px 4px;
  color: #fff;
  font-size: 14px;
  background-color: #333;
  border-radius: 3px;
  opacity: 0;
  transition: all 0.3s ease-in;
}

.marsTiltPanel .label-tag:hover::after {
  opacity: 1;
  z-index: 11;
}

.marsTiltPanel .data-value-status-0 {
  background-color: #f0285c;
}

.marsTiltPanel .data-value-status-1 {
  background-color: #35b15b;
}

.marsTiltPanel .data-value-status-2 {
  background-color: #f09e28;
}

.marsTiltPanel .arrow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 45px;
  height: 2px;
  transform: rotate(-45deg) translate(5px, -15px);
}

.marsTiltPanel-theme-blue .b-t,
.marsTiltPanel-theme-blue .b-r,
.marsTiltPanel-theme-blue .b-b,
.marsTiltPanel-theme-blue .b-l,
.marsTiltPanel-theme-blue .b-t-l,
.marsTiltPanel-theme-blue .b-b-r {
  background-color: #29baf1;
  box-shadow: 0 0 10px 2px #29baf1;
}

.marsTiltPanel-theme-blue .area {
  background-image: linear-gradient(135deg, transparent 30px, #28bbf06c 30px, #28bbf06c 50%, transparent 50%),
    linear-gradient(-45deg, transparent 30px, #28bbf06c 30px, #28bbf06c 50.1%, transparent 50%);
}

.marsTiltPanel-theme-blue .title {
  background-image: linear-gradient(135deg, transparent 25px, #29baf1 25px);
}

.marsTiltPanel-theme-blue .arrow,
.marsTiltPanel-theme-blue .title::before {
  background-color: #28bbf0;
}
</style>
