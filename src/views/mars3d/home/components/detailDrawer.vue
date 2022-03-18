<template>
  <v-drawer :direction="'right'" :width="'50%'">
    <div style="margin-bottom: 10px">
      <div class="card">
        <div class="flex-between topDiv">
          <div class="title">地块一</div>

          <el-button
            icon="el-icon-circle-close"
            class="closeBtn"
            @click="handleClose"
          ></el-button>
        </div>

        <div class="content">
          <div class="flex-between row-bottom">
            <div class="flex-between row">
              <div>地块序号</div>
              <div class="numvalue">497</div>
            </div>
            <div class="flex-between row">
              <div>地块编码</div>
              <div class="numvalue">190107011000432</div>
            </div>
            <div class="flex-between row">
              <div>所属生产队</div>
              <div class="numvalue">10队</div>
            </div>
          </div>
          <div class="flex-between row-bottom">
            <div class="flex-between row">
              <div>地籍面积</div>
              <div class="numvalue">36.47亩</div>
            </div>
            <div class="flex-between row">
              <div>土地等级</div>
              <div class="numvalue">4等</div>
            </div>
            <div class="flex-between row">
              <div>土地基本现状</div>
              <div class="numvalue">对外合作经营</div>
            </div>
          </div>
          <div class="flex-between">
            <div class="flex-between row">
              <div>种植作物</div>
              <div class="numvalue">水稻</div>
            </div>
            <div class="flex-between row">
              <div>状态</div>
              <div class="numvalue">正常</div>
            </div>
            <div class="row" style="border-right: none"></div>
          </div>
        </div>
      </div>
    </div>

    <div style="position: relative; height: 23%; margin-bottom: 10px">
      <div class="card middle">
        <div style="transform: translateY(28%)">
          <div class="info">
            <span class="circle"></span
            ><span style="letter-spacing: 3px">合同名称：</span
            ><span class="numvalue">[2014]广东省肇庆市怀集县大刘承包合同</span>
          </div>
          <div class="flex">
            <div class="info left">
              <span class="circle"></span
              ><span style="letter-spacing: 3px">合同编号：</span
              ><span class="numvalue">hjfzg2014001</span>
            </div>
            <div class="info right">
              <span class="circle"></span
              ><span style="letter-spacing: 3px">合同类型：</span
              ><span class="numvalue">对外合作经营</span>
            </div>
          </div>
          <div class="flex">
            <div class="info left">
              <span class="circle"></span
              ><span style="letter-spacing: 3px">签订日期：</span
              ><span class="numvalue">2020年07月10日</span>
            </div>
            <div class="info right">
              <span class="circle"></span
              ><span style="letter-spacing: 3px">生效日期：</span
              ><span class="numvalue"> 2014年01月01日至 2020年12月31日 </span>
            </div>
          </div>
          <div class="flex">
            <div class="info left">
              <span class="circle"></span
              ><span style="letter-spacing: 3px">合同金额：</span
              ><span class="numvalue">875861.62元</span>
            </div>
            <div class="info right">
              <span class="circle"></span
              ><span style="letter-spacing: 3px">承包方：</span
              ><span class="numvalue">刘均</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 50%">
      <div class="card flex" style="align-items: normal">
        <div style="flex: 1">
          <div class="title">生产环境</div>
          <div class="box">
            <product-env></product-env>
          </div>
        </div>
        <div style="flex: 1">
          <div class="title">预警信息</div>
          <div class="box">
            <warn-info></warn-info>
          </div>
        </div>
      </div>
    </div>
  </v-drawer>
</template>

<script>
import productEnv from "./productEnv.vue";
import warnInfo from "./warnInfo.vue";
export default {
  components: {
    productEnv,
    warnInfo,
  },
  methods: {
    handleClose() {
      this.$bus.$emit("landClick", true);
    },
  },
};
</script>

<style lang="stylus" scoped>
.card
  padding 10px
  background-color rgba(5, 58, 86, .6)
  height calc(100% - 20px)

  .title
    color #0ff
    font-size 20px
    padding-bottom 10px
    border-bottom 2px solid #0ff
    font-weight bold
    display inline-block
    position relative

  .closeBtn
    padding 0
    font-size 24px
    color #fff
    background transparent
    border 0

  .content
    margin-top 10px
    align-items flex-end
    border 1px solid #0ff
    color #0ff
    width 100%

    .row-bottom
      border-bottom 1px solid #0ff

    .row
      height .25rem
      padding 0 5px
      width 50%
      font-size .08rem

      &:not(:last-child)
        border-right 1px solid #0ff

    .numvalue
      color #fff
      font-size .1rem
      margin-right .05rem

.middle
  .info
    color #0ff
    margin-top 7px
    padding-right .15rem
    font-size .08rem
    flex 1

    .circle
      width 7px
      height 7px
      background #0ff
      display inline-block
      border-radius 50%
      margin-right 5px

    .numvalue
      color #fff
      font-size .1rem

.box
    height:calc(100% - 50px)
    padding-top 10px
</style>
