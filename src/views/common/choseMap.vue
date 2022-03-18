<template>
  <div class="change-map">
    <img
      src="~images/map/ygMap.png"
      class="map-btn"
      @click="$router.push('/index')"
    />
    <img
      src="~images/map/pmMap.png"
      class="yg-map"
      @click="$router.push('/sensing')"
    />
    <img
      src="~images/map/glMap.png"
      class="glmap-btn"
      @click="$router.push('/mars3d')"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.change-map
  position absolute
  bottom 5px
  right 28%
  width 65px
  height 45px
  z-index 9

  img
    cursor pointer
    position absolute
    right 0
    width 65px
    border 1px solid #0ff

  .map-btn
      right 150px

  .yg-map
      right 75px
</style>
