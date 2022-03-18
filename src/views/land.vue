<template>
  <div class="container">
    <map-View />
    <home-drawer />
  </div>
</template>

<script>
import mapView from "./land/map/mapView.vue";
import homeDrawer from "./land/home/index.vue";

export default {
  components: {
    mapView,
    homeDrawer,
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
