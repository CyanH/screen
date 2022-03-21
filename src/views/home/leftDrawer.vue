<template>
  <div>
    <v-drawer :direction="'left'" :width="'25%'">
      <div style="margin-bottom: 8px; height: calc(33% - 8px)">
        <v-card>
          <v-title>渔港信息</v-title>

          <div class="swipers">
            <img
              src="~images/store/prev.png"
              class="elprev elcBtn"
              @click="swprev('mySsSwiper')"
            />
            <img
              src="~images/store/next.png"
              class="elnext elcBtn"
              @click="swnext('mySsSwiper')"
            />
            <swiper :options="swiperOption" ref="mySsSwiper">
              <swiper-slide class="swiper-slides ss-swiper-slides">
                <div class="admin">
                  <div class="adminLeft">
                    <img src="~images/home/icon_yg.png" />
                  </div>
                  <div class="adminRight">
                    <p>
                      <img src="~images/store/point.png" />
                      渔港等级：
                      <span>二级</span>
                    </p>
                    <p>
                      <img src="~images/store/point.png" />
                      渔港类型：
                      <span>综合性港口</span>
                    </p>
                    <p>
                      <img src="~images/store/point.png" />
                      所在地：
                      <span>广东省湛江市霞山区渔人码头</span>
                    </p>
                    <p>
                      <img src="~images/store/point.png" />
                      负责港长：
                      <span>刘宏杰</span>
                    </p>
                    <p>
                      <img src="~images/store/point.png" />
                      联系方式：
                      <span>13702843239</span>
                    </p>
                    <p>
                      <img src="~images/store/point.png" />
                      驻港机构：
                      <span>霞山渔政大队</span>
                    </p>

                    <p>
                      <img src="~images/store/point.png" />
                      机构负责人：
                      <span>刘镇</span>
                    </p>
                    <p>
                      <img src="~images/store/point.png" />
                      联系方式：
                      <span>0750-5311601</span>
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide class="swiper-slides ss-swiper-slides">
                <div class="admin">
                  <div class="adminLeft">
                    <img src="~images/store/adminHeader.png" />
                  </div>
                  <div class="adminRight">
                    <p>
                      <img src="~images/store/point.png" />
                      值班人：
                      <span>胡小栗</span>
                    </p>
                    <p>
                      <img src="~images/store/point.png" />
                      值班时间：
                      <span>08:00~18:00</span>
                    </p>

                    <p>
                      <img src="~images/store/point.png" />
                      联系方式：
                      <span>13702843239</span>
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </v-card>
      </div>
      <div style="height: calc(34% - 8px); margin-bottom: 8px">
        <v-card>
          <el-button class="detailBtn" @click="handleClick" type="text">
            更多>>>
          </el-button>
          <v-title>进出港记录</v-title>

          <div class="el-timeline">
            <div
              class="van-items"
              v-for="(item, index) in jcgRecord"
              :key="index"
              @click="handleDetail(item)"
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
      </div>
      <div style="height: 33%">
        <v-card>
          <v-title>进出港预警记录</v-title>
          <div class="panelContent">
            <vue-seamless-scroll
              :data="yjList"
              class="yj-warp"
              :class-option="defaultOption"
            >
              <div v-for="(item, index) in yjList" :key="index" class="gqList">
                <div class="ico">
                  <img src="~images/store/gq_bg1.png" class="yjyuan" />
                  <img src="~images/store/gq_ico1.png" class="yjico" />
                </div>
                <div class="msg">{{ item.content }}</div>
              </div>
            </vue-seamless-scroll>
          </div>
        </v-card>
      </div>
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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: { Swiper, SwiperSlide },
  computed: {
    // 公告滚动自定义
    defaultOption() {
      return {
        step: 0.15, // 数值越大速度滚动越快
        limitMoveNum: 7, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 0, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  data() {
    return {
      swiperOption: {
        observer: true,
        observeParents: true,
        debugger: true,
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 5000,
      },
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
      yjList: [
        {
          content: "2022-02-16 08:56:07，粤渔1546未报备进港！",
          date: "2022-02-16 08:56:07",
          id: "ff80808179087e2b01795b121b5d3866",
        },
      ],
    };
  },

  methods: {
    swprev(ref) {
      this.$refs[ref].$swiper.slidePrev();
    },
    swnext(ref) {
      this.$refs[ref].$swiper.slideNext();
    },
    handleClick() {
      this.$store.dispatch("basic/setHomeComponent", "inOutDrawer");
    },
    handleDetail(item) {
      this.dialogTitle = item.code;
      this.dialogVisible = true;
    },
  },
  destroyed() {},
};
</script>

<style lang="stylus" scoped>
.panelContent
  font-size .08rem
  height calc(100% - 43px)
  color #fff

.swipers
  width 100%
  height calc(100% - 43px)
  position relative

  .elcBtn
    z-index 999
    position absolute
    cursor pointer

  .elprev
    top 50%
    transform translate(100%, -50%)
    right 100%

  .elnext
    top 50%
    transform translate(-100%, -50%)
    left 100%

  >>>.swiper-container
    height 100%

.admin
  height 100%
  display flex
  justify-content space-around

  .adminLeft
    height 100%
    display flex
    align-items center

    img
      width .6rem

  .adminRight
    width calc(100% - 1rem)
    height 100%
    display flex
    flex-direction column
    justify-content space-around

    p
      display flex
      align-items center
      font-size .08rem
      color #27f7ec

      img
        margin-right .05rem

      span
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

.yj-warp
  padding 5px 10px
  height calc(100% - 20px)
  overflow hidden

  .gqList
    display flex
    margin-bottom .05rem
    align-items center

    .ico
      width .16rem
      height .16rem
      position relative

      .yjyuan
        width 100%
        height 100%
        position absolute
        top 0
        left 0
        animation rotate 8s linear infinite

      .yjico
        width 100%
        height 100%

    .msg
      margin-left .05rem
      font-size 16px
      color #ff5e5e

@keyframes rotate
  0%
    transform rotate(0deg)

  100%
    transform rotate(360deg)

.detailBtn
  position absolute
  right 10px
</style>
