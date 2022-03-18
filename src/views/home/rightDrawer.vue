<template>
  <div style="color: #fff" class="rightBar">
    <v-drawer :direction="'right'" :width="'25%'">
      <div class="animated fadeInRightBig" style="height: 100%; width: 100%">
        <right-xm />
        <right-yz />
        <right-zb />
      </div>
    </v-drawer>
  </div>
</template>

<script>
import rightXm from "./rightDrawer/rightXm";
import rightYz from "./rightDrawer/rightYz";
import rightZb from "./rightDrawer/rightZb";
export default {
  components: { rightXm, rightYz, rightZb },
};
</script>
