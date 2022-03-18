<template>
  <div class="drawer">
    <div
      class="side animated"
      :class="[direction, animate]"
      :style="{ width: width }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "450px",
    },
    direction: {
      type: String,
      default: "right",
    },
  },
  computed: {
    animate() {
      return this.direction === "left" ? "fadeInLeftBig" : "fadeInRightBig";
    },
  },
};
</script>

<style lang="stylus" scoped>
.side
  position absolute
  bottom 5px
  top 5px
  z-index 9

.right
  right .05rem

.left
  left .05rem
</style>
