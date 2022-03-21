<template>
  <div class="panel">
    <v-card>
      <v-title>渔港监控</v-title>
      <div class="videoBox">
        <iframe
          src="./html/stream_rtmp_view.html?rtmp=http://hls01open.ys7.com/openlive/3d111a157fd94e13a38b7ca24bb5f26f.hd.m3u8"
        />
        <div class="videoBoxModel" @click="dialogVisible = true" />
        <el-dialog
          title="智能监控"
          :visible.sync="dialogVisible"
          :append-to-body="true"
          class="videoFull"
        >
          <iframe
            style="width: 60vw; height: 60vh"
            src="./html/stream_rtmp_view.html?rtmp=http://hls01open.ys7.com/openlive/3d111a157fd94e13a38b7ca24bb5f26f.hd.m3u8"
          />
        </el-dialog>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styl/varibles.styl'

.panel
  height calc(33% - 8px)
  margin-bottom 8px
  font-size .06rem

.videoBox
  height calc(100% - 53px)
  padding 0 10px 10px
  position relative
  cursor pointer

  iframe
    width 100%
    height 100%

  .videoBoxModel
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    z-index 1
</style>
