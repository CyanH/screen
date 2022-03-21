<template>
  <div class="container">
    <nav-bar />

    <left-drawer />
    <components :is="homeDrawer"></components>

    <map-View />
    <chose-map />
  </div>
</template>

<script>
import navBar from "./home/navBar";
import leftDrawer from "./home/leftDrawer";
import rightDrawer from "./home/rightDrawer";
import videoDrawer from "./home/videoDrawer";
import szDrawer from "./home/szDrawer";
import inOutDrawer from "./home/inOutDrawer";
import mapView from "./home/map/mapView.vue";
import choseMap from "@/views/common/choseMap";
import { mapGetters } from "vuex";
export default {
  components: {
    navBar,
    leftDrawer,
    rightDrawer,
    videoDrawer,
    szDrawer,
    inOutDrawer,
    mapView,
    choseMap,
  },
  computed: {
    ...mapGetters(["homeDrawer"]),
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
