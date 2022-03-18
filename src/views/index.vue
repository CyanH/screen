<template>
  <div class="container">
    <nav-bar />

    <left-drawer />
    <right-drawer />

    <map-View />
    <chose-map />
  </div>
</template>

<script>
import navBar from "./home/navBar";
import leftDrawer from "./home/leftDrawer";
import rightDrawer from "./home/rightDrawer";
import mapView from "./home/map/mapView.vue";
import choseMap from "@/views/common/choseMap";
export default {
  components: {
    navBar,
    leftDrawer,
    rightDrawer,
    mapView,
    choseMap,
  },
};
</script>

<style lang="stylus" scoped>
.container
  position fixed
  top 62px
  width 100%
  height calc(100% - 62px)

  .content
    position relative
    top 55px
    height calc(100% - 55px)
</style>
