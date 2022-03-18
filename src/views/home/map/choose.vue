<template>
  <div class="equip-card">
    <div class="selectBox">
      <div class="el-select">
        <div
          class="el-select-dropdown el-popper"
          style="
            min-width: 115px;
            transform-origin: center top;
            z-index: 2004;
            position: absolute;
            top: 0px;
            left: 0px;
          "
          x-placement="bottom-start"
        >
          <div class="el-scrollbar" style="">
            <div
              class="el-select-dropdown__wrap el-scrollbar__wrap"
              style="margin-bottom: -17px; margin-right: -17px"
            >
              <ul class="el-scrollbar__view el-select-dropdown__list">
                <li
                  class="el-select-dropdown__item"
                  :class="chosecube === index ? 'selected' : ''"
                  v-for="(item, index) in activities"
                  :key="index"
                  @click="typeChose(item, index)"
                >
                  <span>{{ item.content }}</span>
                </li>
              </ul>
            </div>
            <div class="el-scrollbar__bar is-horizontal">
              <div
                class="el-scrollbar__thumb"
                style="transform: translateX(0%)"
              ></div>
            </div>
            <div class="el-scrollbar__bar is-vertical">
              <div
                class="el-scrollbar__thumb"
                style="transform: translateY(0%)"
              ></div>
            </div>
          </div>
          <div x-arrow="" class="popper__arrow" style="left: 35px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosecube: 0,
      activities: [
        { content: "全部", name: "all" },
        {
          content: "基本农田",
          name: "HUAIJI:怀集大岗镇基本农田",
          xmin: 111.98596857457596,
          ymin: 23.81863782575314,
          xmax: 112.09388782160381,
          ymax: 23.925895930486575,
        },
        {
          content: "地力等级",
          name: "HUAIJI:怀集大岗镇地块分等",
          xmin: 111.97672272496831,
          ymin: 23.81871764866275,
          xmax: 112.0939473844599,
          ymax: 23.925994914032323,
        },
        {
          content: "确权地块",
          name: "HUAIJI:怀集大岗镇确权地块",
          xmin: 111.97730446749725,
          ymin: 23.817997931108533,
          xmax: 112.09537211594039,
          ymax: 23.92294078870362,
        },
        {
          content: "道路建设",
          road: {
            name: "HUAIJI:怀集县路",
            xmin: 111.8935231,
            ymin: 23.5401444,
            xmax: 112.5041573,
            ymax: 23.3826396,
          },
          railWay: {
            name: "HUAIJI:怀集县铁路",
            xmin: 111.87313931173854,
            ymin: 23.761546034981293,
            xmax: 112.32247275332298,
            ymax: 24.110335254686103,
          },
        },
        {
          content: "水系分布",
          name: "HUAIJI:怀集县水系",
          xmin: 111.905667,
          ymin: 23.7603813,
          xmax: 112.4831171,
          ymax: 23.3662265,
        },
      ],
    };
  },
  methods: {
    typeChose(item, index) {
      this.chosecube = index;
      this.$emit("choseLayer", item);
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styl/varibles.styl'

.equip-card
  position absolute
  top .3rem
  left 27%
  padding 5px 10px
  z-index 9

.selectBox
  >>>.el-input__inner
    height 26px
    font-size 12px
    line-height 20px
    padding 0 15px 0 0
    width 115px
    border none
    text-align center
    background-color transparent
    color $textColor

  >>>.el-popper
    background-color rgba(1, 1, 1, 0)
    margin-top 0

  >>>.el-input__icon
    line-height 20px

  >>>.el-input__suffix
    right 0

  >>>.el-select .el-input.is-focus .el-input__inner
    border-color $textColor

  >>>.el-select .el-input__inner:focus
    border-color $textColor

  >>>.el-select:hover .el-input__inner
    border-color #fff

  >>>.el-popper .popper__arrow, .el-popper .popper__arrow::after
    display none

  >>>.el-scrollbar .el-select-dropdown__item.selected
    color $textColor

  >>>.el-scrollbar .el-select-dropdown__item:hover
    color $textColor

  >>>.el-scrollbar .el-select-dropdown__item
    background url('~images/home/dtxz.png') center no-repeat
    background-size 100% 100%

  >>>.el-scrollbar .el-select-dropdown__item
    padding 0 15px
    color #fff
    font-style oblique
    font-size 12px
    line-height 30px
    height 30px
    letter-spacing 2px
    margin 6px 0

  >>>.el-scrollbar .el-select-dropdown__list
    padding 0

  >>>.el-select .el-select-dropdown
    border none
</style>
