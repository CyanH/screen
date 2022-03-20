<template>
  <div class="container">
    <div
      id="mars3dContainer"
      class="map"
    ></div>
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
      this.$mars3d.Resource.fetchJson({ url: "./json/homeconfig.json" }).then(
        (json) => {
          this.initMap(json.map3d);
        }
      );
    },
    initMap(options) {
      map = new this.$mars3d.Map("mars3dContainer", options);
      map.openFlyAnimation();
      window.map = map;

      setTimeout(() => {
        this.createLayer();
      }, 3000);
    },
    createLayer() {
      let graphicLayer = new this.$mars3d.layer.GraphicLayer();
      map.addLayer(graphicLayer);

      const graphic = new this.$mars3d.graphic.PolygonEntity({
        positions: [
          [110.41488, 21.192863, 0],
          [110.41433, 21.192863, 0],
          [110.413659, 21.19244, 0],
          [110.413313, 21.192425, 0],
          [110.413295, 21.191888, 0],
          [110.413205, 21.191789, 0],
          [110.413205, 21.191789, 0],
          [110.412917, 21.191791, 0],
          [110.412917, 21.191226, 0],
          [110.412866, 21.191231, 0],
          [110.412847, 21.190563, 0],
          [110.411893, 21.190563, 0],
          [110.411414, 21.190444, 0],
          [110.411162, 21.188913, 0],
          [110.410887, 21.18832, 0],
          [110.410567, 21.187909, 0],
          [110.410356, 21.187833, 0],
          [110.410123, 21.187319, 0],
          [110.410528, 21.186989, 0],
          [110.411403, 21.18653, 0],
          [110.411449, 21.18653, 0],
          [110.411403, 21.186505, 0],
          [110.411729, 21.186608, 0],
          [110.41208, 21.186479, 0],
          [110.412618, 21.187433, 0],
          [110.41315, 21.187739, 0],
          [110.413527, 21.18987, 0],
          [110.414497, 21.190321, 0],
          [110.41455, 21.190601, 0],
          [110.414657, 21.190614, 0],
          [110.414913, 21.191805, 0],
        ],
        style: {
          fill: false,
          clampToGround: true,
          outline: true,
          outlineWidth: 3,
          outlineColor: "#ff5e5e",
        },
        attr: { remark: "示例14" },
      });
      graphicLayer.addGraphic(graphic);

      const videoImage = require("images/equip/ico_sxt.png");
      const videoGraphic = new this.$mars3d.graphic.BillboardEntity({
        name: "摄像头",
        position: [110.414472, 21.191387, 10],

        style: {
          image: videoImage,
          scale: 0.8,
          clampToGround: true,

          label: {
            text: "码头摄像头",
            color: "#0ff",
            outline: true,
            pixelOffsetY: -40,
          },
        },
        attr: { remark: "示例3" },
      });
      graphicLayer.addGraphic(videoGraphic);

      const szImage = require("images/equip/ico_sq.png");
      const szGraphic = new this.$mars3d.graphic.BillboardEntity({
        name: "水质检测器",
        position: [110.415831, 21.191805, 10],

        style: {
          image: szImage,
          scale: 0.8,
          clampToGround: true,

          label: {
            text: "水质检测器",
            color: "#0ff",
            outline: true,
            pixelOffsetY: -40,
          },
        },
        attr: { remark: "示例3" },
      });
      graphicLayer.addGraphic(szGraphic);

      videoGraphic.on(this.$mars3d.EventType.click, function (event) {
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

  .map
    width 100%
    height 100%
</style>
