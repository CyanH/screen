<template>
  <div class="panel">
    <v-card>
      <v-title>渔港监控</v-title>
      <div class="content">
        <div class="charts flex" ref="xmjs">
          <img src="~images/home/jzt.png" />
        </div>
        <div class="progess">
          <div
            class="progessRow flex"
            v-for="(item, index) in list"
            :key="index"
          >
            <div class="name">{{ item.name }}</div>
            <el-progress
              :percentage="item.value"
              :stroke-width="10"
              color="#00B8EE"
            ></el-progress>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "开工率", value: "94.12" },
        { name: "完工率", value: "47.06" },
        { name: "总进度", value: "95.74" },
      ],
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

.content
  height calc(100% - 43px)
  padding 0 10px

.charts
  height 70%
  width 100%
  justify-content center

.charts img
  height 100%

.progess
  height calc(30% - 10px)
  margin-bottom 10px
  display flex
  justify-content center
  align-items center
  flex-wrap wrap

.progessRow
  padding 0px
  width 100%

  >>>.el-progress-bar
    padding-right 70px

  >>>.el-progress__text
    margin-left 0
    color #fff

  >>>.el-progress-bar__outer
    border-radius 0
    background-color #13316f

  >>>.el-progress-bar__inner
    border-radius 0

.el-progress
  width 85%
  display flex
  align-items: center

.name
  margin-right 10px
</style>
