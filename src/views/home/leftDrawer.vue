<template>
  <v-drawer :direction="'left'" :width="'25%'">
    <div style="margin-bottom: 8px; height: calc(33% - 8px)">
      <v-card>
        <v-title>渔港信息</v-title>
        <div class="admin">
          <el-row>
            <el-col :span="12">
              <img src="~images/store/point.png" />
              渔港等级：
              <span>二级</span>
            </el-col>

            <el-col :span="12">
              <img src="~images/store/point.png" />
              渔港类型：
              <span>综合性港口</span>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <img src="~images/store/point.png" />
              所在地：
              <span>广东省湛江市霞山区渔人码头</span>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <img src="~images/store/point.png" />
              负责港长：
              <span>刘宏杰</span>
            </el-col>
            <el-col :span="12">
              <img src="~images/store/point.png" />
              联系方式：
              <span>13702843239</span>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <img src="~images/store/point.png" />
              驻港机构：
              <span>霞山渔政大队</span>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <img src="~images/store/point.png" />
              机构负责人：
              <span>刘镇</span>
            </el-col>
            <el-col :span="12">
              <img src="~images/store/point.png" />
              联系方式：
              <span>0750-5311601</span>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <img src="~images/store/point.png" />
              水域面积(万平方米)：
              <span>11.12</span>
            </el-col>
            <el-col :span="12">
              <img src="~images/store/point.png" />
              年卸货量(万吨)：
              <span>2.5</span>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <img src="~images/store/point.png" />
              在港渔船(艘)：
              <span>105</span>
            </el-col>
            <el-col :span="12">
              <img src="~images/store/point.png" />
              码头长度(米)：
              <span>215</span>
            </el-col>
          </el-row>
        </div>
      </v-card>
    </div>
    <div style="height: calc(34% - 8px); margin-bottom: 8px">
      <v-card>
        <v-title>进出港记录</v-title>
        <div class="panelContent">
          <div class="head">
            <p>船号</p>
            <p>状态</p>
            <p>时间</p>
            <p>操作</p>
          </div>
          <vue-seamless-scroll
            :data="jcgRecord"
            class="seamless-warp"
            :class-option="defaultOption"
          >
            <div v-for="(item, index) in jcgRecord" :key="index" class="body">
              <p>{{ item.code }}</p>
              <p>{{ item.statu }}</p>
              <p>{{ item.date }}</p>
              <p>
                <el-button size="mini" class="detail" type="primary">
                  详情>>>
                </el-button>
              </p>
            </div>
          </vue-seamless-scroll>
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
</template>

<script>
export default {
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
      imgList: [
        require("images/map/gdhc.png"),
        require("images/map/gpqf.png"),
        require("images/map/my.png"),
        require("images/map/ssy.png"),
        require("images/map/stj.png"),
      ],
      data: {
        id: "79b33dbdfca44698bcd7c7b4bd95eef0",
        name: "优良仓库1号",
        code: "11",
        fzr: "负责人",
        fzrphone: "15865548464",
        djtime: 1630944000000,
        zdarea: 11.2,
        fqnum: null,
        isky: null,
        orgId: "",
        orgName: "",
        model: "",
        clkg: 2563.0,
        clsta: null,
        clbag: 1254,
        line: 1,
        stack: null,
        status: null,
        info: "",
        order: 1,
        by1: "",
        by2: "",
        systemuser: "294",
        systemusertime: 1632281553000,
        systemupdateuser: "288",
        systemupdateusertime: 1640918383000,
        logo: null,
        wd: "19.2",
        sd: "25.5",
      },
      jcgRecord: [
        { code: "粤渔8421", statu: "出港", date: "2022-03-11 05:20:23" },
        { code: "粤渔2521", statu: "出港", date: "2022-03-12 05:22:54" },
        { code: "粤渔1254", statu: "出港", date: "2022-03-13 04:50:11" },
        { code: "粤渔3621", statu: "进港", date: "2022-03-14 22:10:08" },
        { code: "粤渔2456", statu: "出港", date: "2022-03-16 05:10:26" },
      ],
      yjList: [
        {
          content: "粤渔1546提前回港，请注意！",
          date: "2022-02-16 08:56:07",
          id: "ff80808179087e2b01795b121b5d3866",
        },
      ],
    };
  },

  methods: {},
  destroyed() {},
};
</script>

<style lang="stylus" scoped>
.panelContent
  height calc(100% - 43px)
  color #fff

.admin
  height calc(100% - 43px)
  padding 0 10px
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  >>>.el-col
    display flex
    align-items center
    font-size .08rem
    color #27f7ec

    img
      margin-right .05rem

    span
      color #fff

.head
  height .15rem
  width 100%
  line-height .15rem
  color #fff
  background rgb(0, 179, 179)
  text-align center
  display flex

  p
    text-align center

.body
  display flex
  width 100%

  p
    text-align center

.head, .body
  p
    color #fff
    line-height 3

  p:nth-child(1)
    width 20%

  p:nth-child(2)
    width 20%

  p:nth-child(3)
    width 40%

  p:nth-child(4)
    width 20%

.seamless-warp
  height 100%
  overflow hidden

  .body:nth-child(odd)
    background rgba(0, 179, 179, .2)

  .detail
    padding 5px

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
</style>
