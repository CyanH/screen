<template>
  <v-drawer :direction="'right'" :width="'25%'">
    <el-button
      class="closeBtn"
      @click="handleClose"
      icon="el-icon-circle-close"
    ></el-button>
    <div style="height: calc(40% - 8px); margin-bottom: 8px">
      <v-card>
        <v-title>智能监控</v-title>

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
    <div style="height: 56%">
      <v-card>
        <v-title>视频图集</v-title>

        <div class="noData" v-show="rylist.length === 0">暂无图集</div>

        <div class="videoImg" v-show="rylist.length > 0">
          <div class="flex-between">
            <div class="swiperBox" v-for="(item, index) in rylist" :key="index">
              <img
                @click="previewClick(index)"
                :src="item.path"
                style="cursor: pointer"
              />
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </v-drawer>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,

      rylist: [
        {
          id: "3f39bce2a7b6433b8c8ff8cfecc26a20",
          wlwId: null,
          wlwCode: "SX01A-2126679",
          wlwName: null,
          path: "http://121.32.129.19:8120/picture/iot/upload/device2/SX01A-2126679/2022-02-15/1644901231860.jpg",
          compressPath:
            "/picture/iot/upload/device2/SX01A-2126679/2022-02-15/compress_1644901231860.jpg",
          date: 1644901234000,
          createTime: 1644897618000,
        },
        {
          id: "041832ffeac94891b16f710bfe544bd8",
          wlwId: null,
          wlwCode: "SX01A-2126512",
          wlwName: null,
          path: "http://121.32.129.19:8120/picture/iot/upload/device2/SX01A-2126512/2022-02-15/1644900583782.jpg",
          compressPath:
            "/picture/iot/upload/device2/SX01A-2126512/2022-02-15/compress_1644900583782.jpg",
          date: 1644900587000,
          createTime: 1644897629000,
        },
        {
          id: "9d1a0e01acf54a34a1e8615520dcc006",
          wlwId: null,
          wlwCode: "SX01A-2126551",
          wlwName: null,
          path: "http://121.32.129.19:8120/picture/iot/upload/device2/SX01A-2126551/2022-02-15/1644899951701.jpg",
          compressPath:
            "/picture/iot/upload/device2/SX01A-2126551/2022-02-15/compress_1644899951701.jpg",
          date: 1644899955000,
          createTime: 1644897614000,
        },
        {
          id: "e3fa2c24322b4e81b2928e5c1bfad08c",
          wlwId: null,
          wlwCode: "SX01A-2126573",
          wlwName: null,
          path: "http://121.32.129.19:8120/picture/iot/upload/device2/SX01A-2126573/2022-02-15/1644899952701.jpg",
          compressPath:
            "/picture/iot/upload/device2/SX01A-2126573/2022-02-15/compress_1644899952701.jpg",
          date: 1644899955000,
          createTime: 1644897623000,
        },
        {
          id: "1a01cc7a20ca410382d4fe469da8fc22",
          wlwId: null,
          wlwCode: "SX01A-2126730",
          wlwName: null,
          path: "http://121.32.129.19:8120/picture/iot/upload/device2/SX01A-2126730/2022-02-15/1644899938700.jpg",
          compressPath:
            "/picture/iot/upload/device2/SX01A-2126730/2022-02-15/compress_1644899938700.jpg",
          date: 1644899943000,
          createTime: 1644897626000,
        },
        {
          id: "6ef0f32a94564b55aea52f798501d05e",
          wlwId: null,
          wlwCode: "SX01A-2126729",
          wlwName: null,
          path: "http://121.32.129.19:8120/picture/iot/upload/device2/SX01A-2126729/2022-02-15/1644898012068.jpg",
          compressPath:
            "/picture/iot/upload/device2/SX01A-2126729/2022-02-15/compress_1644898012068.jpg",
          date: 1644898014000,
          createTime: 1644897621000,
        },
      ],
    };
  },

  methods: {
    previewClick(index) {
      this.$bus.$emit("previewImg", this.rylist, index);
    },

    handleClose() {
      this.$store.dispatch("basic/setHomeComponent", "rightDrawer");
    },
  },
};
</script>
<style lang="stylus" scoped>
.closeBtn
  padding 0
  background transparent
  border 0
  color #fff
  font-size 24px
  z-index 9
  position absolute
  top 10px
  right 15px
  cursor pointer

  &:hover
    background transparent
    color #fff

.videoImg
  height calc(100% - 43px)
  padding 0 10px
  position relative

  .flex-between
    flex-wrap wrap


.swiperBox
  position relative
  width 48%
  margin-bottom 15px

  img
    max-width 100%
    max-height 100%

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


.noData
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
</style>
