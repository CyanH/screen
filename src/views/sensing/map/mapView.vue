<template>
  <div class="full-screen">
    <JKMap class="jMap" :load="mapLoad" :mapParams="mapParams"> </JKMap>
  </div>
</template>

<script>
const mapParams = require("./util/map.config.js");
let map = null;

export default {
  components: {},
  data() {
    return {
      mapParams,
    };
  },
  methods: {
    mapLoad(obj) {
      map = obj;
      let extent = new window.esri.geometry.Extent({
        xmax: 12488413.936565068,
        xmin: 12461622.758151151,
        ymax: 2746651.5010385183,
        ymin: 2732625.306348207,
        spatialReference: { wkid: 102100 },
      });
      map.setExtent(extent);
      this.$store.dispatch("map/setMap", map);
      map.on("click", (e) => {
        console.log(e);
      });
    },
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
