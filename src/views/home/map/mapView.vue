<template>
  <div class="full-screen">
    <JKMap class="jMap" :load="mapLoad" :mapParams="mapParams"> </JKMap>
  </div>
</template>

<script>
const mapParams = require("./util/map.config.js");

import layer from "@/util/layer";
let map = null,
  polygonLayer = null;

export default {
  data() {
    return {
      mapParams,
    };
  },
  methods: {
    mapLoad(_map) {
      map = _map;
      window.map = map;

      let extent = new window.esri.geometry.Extent({
        xmax: 12292522.001870941,
        xmin: 12290228.891022578,
        ymax: 2415232.3727524565,
        ymin: 2414016.546271398,
        spatialReference: { wkid: 102100 },
      });
      map.setExtent(extent);
      map.on("click", (e) => {
        console.log(e.mapPoint);
      });
      this.loadLayer();
    },

    loadLayer() {
      polygonLayer = new layer(map, "polygonLayer");
      let item = {
        ring: [
          [
            [12291017.012001863, 2414129.0560941743],
            [12291075.534101652, 2414240.1286509163],
            [12291132.26470859, 2414273.5698507954],
            [12291177.64919414, 2414531.544821293],
            [12291286.468968527, 2414586.8381620795],
            [12291290.955613017, 2414624.241800865],
            [12291302.898898687, 2414620.658815164],
            [12291331.5627843, 2414761.5895860842],
            [12291331.5627843, 2414774.7272003223],
            [12291353.46223865, 2414772.214109524],
            [12291354.059402935, 2414817.0014307913],
            [12291328.381338742, 2414816.404266508],
            [12291328.62989768, 2414890.956214571],
            [12291265.927647905, 2414891.5533788544],
            [12291224.961047338, 2414871.0883610123],
            [12291192.5819462, 2414839.3704089196],
            [12291151.620841632, 2414838.756923307],
            [12291151.02367735, 2414775.45750925],
            [12291142.157098321, 2414762.444605684],
            [12291109.910227008, 2414762.444605684],
            [12291101.94520491, 2414616.6963762175],
            [12290996.187878206, 2414626.314932072],
            [12290944.890998393, 2414596.3927906076],
            [12290915.032784216, 2414417.8406698233],
            [12290798.250942683, 2414225.0440590084],
            [12290947.205675568, 2414130.8953074734],
            [12290978.332198288, 2414143.1450994485],
          ],
        ],
        color: "#66ccff",
      };

      polygonLayer.createPolygon(item);
    },
  },
  destroyed() {
    map.removeLayer(polygonLayer);
    polygonLayer = null;
    map = null;
  },
};
</script>

<style lang="stylus" scoped>
.full-screen
  position absolute
  top 0
  bottom 0
  left 0
  right 0
</style>
