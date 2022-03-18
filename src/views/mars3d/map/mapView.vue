<template>
  <div id="mars3dContainer" class="container"></div>
</template>

<script>
let map = null;
export default {
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
      window.map = map;
      let tilesetLayer = new this.$mars3d.layer.TilesetLayer({
        name: "三维模型",
        type: "3dtiles",
        url: "http://47.113.197.181/HUAIJI/3D/tileset.json",
        maximumScreenSpaceError: 16,
        maximumMemoryUsage: 2048,
        position: { alt: 60 },
        show: true,
      });
      map.addLayer(tilesetLayer);

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
        position: [110.413503, 21.188647, 10],

        style: {
          image: "img/ship.png",
          scale: 1,
          clampToGround: true,

          label: {
            text: "粤渔A6379",
            color: "#66ccff",
            pixelOffsetY: -50,
          },
        },
        attr: { remark: "示例3" },
      });
      graphicLayer.addGraphic(shipGraphic);

      // 移动模型
      setTimeout(() => {
        shipGraphic.addDynamicPosition([110.413503, 21.188647, 10]);
        shipGraphic.addDynamicPosition([110.419005, 21.18744, 10], 100);
      }, 2000);

      shipGraphic.on(this.$mars3d.EventType.click, function (event) {
        console.log("监听layer，单击了矢量对象", event);
      });
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
</style>
