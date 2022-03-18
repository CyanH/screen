<template>
  <div class="card">
    <div class="card_box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.card
  height 100%
  position relative

  .card_box
    height 100%
    background url('~images/common/card.png')
    background-repeat no-repeat
    background-size 100% 100%
    position relative
</style>
