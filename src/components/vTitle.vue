<template>
  <div style="padding: 5px 0 5px 10px">
    <div class="flex">
      <div class="vTitle">
        <slot></slot>
      </div>
      <img class="titleI" src="~images/common/title-line.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.vTitle
  background-image -webkit-linear-gradient(top, #fff, #A1C7E8, #7BBEF6)
  -webkit-background-clip text
  -webkit-text-fill-color transparent
  font-size 0.09rem
  line-height 0.15rem
  font-weight 600
.titleI
  width 1.6rem
</style>
