<template>
  <div class="container">
    <map-View />
    <home-page />
  </div>
</template>

<script>
import mapView from "./sensing/map/mapView.vue";
import homePage from "./sensing/home/index.vue";

export default {
  components: {
    mapView,
    homePage,
  },
};
</script>

<style lang="stylus" scoped>
.container
  position fixed
  top 62px
  width 100%
  height calc(100% - 62px)
</style>
