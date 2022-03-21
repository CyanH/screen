<template>
  <div>
    <v-drawer :direction="'right'" :width="'25%'">
      <el-button
        class="closeBtn"
        @click="handleClose"
        icon="el-icon-circle-close"
      ></el-button>
      <v-card>
        <v-title>进出港记录</v-title>
        <div class="el-timeline">
          <div
            class="van-items"
            v-for="(item, index) in jcgRecord"
            :key="index"
            @click="handleClick(item)"
          >
            <div class="van-steps__items">
              <div class="van-header">
                <p class="date">{{ item.date }}</p>
              </div>

              <div class="msg">{{ item.code }}{{ item.statu }}</div>
            </div>
          </div>
        </div>
      </v-card>
    </v-drawer>

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      class="videoFull"
      width="50%"
    >
      <div class="admin flex">
        <img class="shipImg" src="~images/home/ship.png" />

        <div class="adminRight">
          <p>
            <img src="~images/store/point.png" />
            出发港口：
            <span>桂山岛码头</span>
          </p>
          <p>
            <img src="~images/store/point.png" />
            进入港口：
            <span>霞山区渔人码头</span>
          </p>
          <p>
            <img src="~images/store/point.png" />
            船长姓名：
            <span>章北海</span>
          </p>
          <p>
            <img src="~images/store/point.png" />
            联系方式：
            <span>13702843239</span>
          </p>
          <p>
            <img src="~images/store/point.png" />
            渔获总量：
            <span>2吨</span>
          </p>
          <p>
            <img src="~images/store/point.png" />
            进港时间：
            <span>2022-03-21 13:51</span>
          </p>
        </div>
      </div>
      <div class="title">船员列表</div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="post" label="职位" width="180" />
        <el-table-column prop="phone" label="联系方式"> </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      dialogTitle: "",
      jcgRecord: [
        { code: "粤渔8421", statu: "出港", date: "2022-03-11 05:20:23" },
        { code: "粤渔2521", statu: "出港", date: "2022-03-12 05:22:54" },
        { code: "粤渔1254", statu: "出港", date: "2022-03-13 04:50:11" },
        { code: "粤渔3621", statu: "进港", date: "2022-03-14 22:10:08" },
        { code: "粤渔2456", statu: "出港", date: "2022-03-16 05:10:26" },
      ],
      tableData: [
        {
          name: "章北海",
          post: "船长",
          address: "18124532187",
        },
        {
          name: "罗辑",
          post: "大副",
          address: "15712548563",
        },
        {
          name: "叶文洁",
          post: "领航员",
          address: "18214259875",
        },
        {
          name: "史强",
          post: "二副",
          address: "15784159247",
        },
      ],
    };
  },

  methods: {
    handleClick(item) {
      this.dialogTitle = item.code;
      this.dialogVisible = true;
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

.el-timeline
  height calc(100% - 53px)
  overflow-y auto
  padding 0 10px 10px

  .van-header
    position absolute
    cursor pointer

  .van-steps__items
    display flex

  .van-items
    padding 0 0 0 170px
    position relative
    margin-bottom 10px
    color #fff

  .date
    padding 3px 5px
    font-size .08rem
    text-align center
    position relative
    left -170px
    top 3px
    width 93%
    border 1px solid
    border-radius 5px
    color #fff
    border-color rgba(59, 250, 214, .5)

  .msg
    margin-right 10px
    border 1px solid rgba(59, 250, 214, .5)
    padding 5px
    width 90%
    overflow hidden
    white-space nowrap
    text-overflow ellipsis

    &:before
      content ''
      display block
      width 2px
      height 6px
      border solid 10px rgba(255, 255, 255, 0)
      border-bottom solid 10px #1f2b3e
      position absolute
      top 3px
      z-index 1002
      left 147px
      transform rotate(-90deg)

    &:after
      content ''
      display block
      width 2px
      height 6px
      border solid 10px rgba(82, 209, 195, 0)
      border-bottom solid 10px rgba(59, 250, 214, 1)
      position absolute
      top 3px
      z-index 1001
      left 146px
      transform rotate(-90deg)

  &::-webkit-scrollbar
    width 7px
    background-color transparent

  /* 定义滚动条轨道 内阴影+圆角 */
  &::-webkit-scrollbar-track
    -webkit-box-shadow inset 0 0 6px transparent
    background-color transparent

  /* 定义滑块 内阴影+圆角 */
  &::-webkit-scrollbar-thumb
    border-radius 10px
    -webkit-box-shadow inset 0 0 6px transparent
    background-color #3BFAD6

  /* 定义最上方和最下方的按钮 */
  &::-webkit-scrollbar-button
    height 0


.videoFull
  >>>.el-dialog__header
    padding 15px 20px 10px
  >>>.el-dialog__body
    padding 20px

  .title
    color #fff
    padding 8px 0 12px 10px
    border-top 1px solid #11c0a7
    border-bottom 1px solid #11c0a7
    margin 0.15rem 0 0.05rem

.admin
  position relative

  .shipImg
    width 1.5rem

  .adminRight
    position absolute
    left 1.6rem
    display flex
    flex-direction column
    justify-content space-around
    height 100%

    p
      display flex
      align-items center
      font-size .08rem
      color #27f7ec

      img
        margin-right .05rem

      span
        color #fff

.el-table
  background transparent
  color #fff
  >>>th
    background transparent
    color #fff
  >>>tr
    background transparent
</style>
