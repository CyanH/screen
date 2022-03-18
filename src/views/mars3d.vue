<template>
  <div class="container">
    <map-View />
  </div>
</template>

<script>
import mapView from "./mars3d/map/mapView.vue";

export default {
  components: {
    mapView,
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
