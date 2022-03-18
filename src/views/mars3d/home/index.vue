<template>
  <div style="z-index: 999">
    <div v-if="show">
      <right-top />
      <right-bottom />
    </div>
    <detail-drawer v-else></detail-drawer>
  </div>
</template>

<script>
import rightTop from "./components/rightTop.vue";
import rightBottom from "./components/rightBottom.vue";
import detailDrawer from "./components/detailDrawer.vue";
export default {
  components: {
    rightTop,
    rightBottom,
    detailDrawer,
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.$bus.$on("landClick", (state) => {
      this.show = state;
    });
  },
  destroyed() {
    this.$bus.$off("landClick");
  },
};
</script>
