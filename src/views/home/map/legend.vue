<template>
  <div class="flex warn-table">
    <ul style="color: #fff">
      <li v-for="(item, index) in list" :key="index" class="flex">
        <img :src="item.img" class="imgg" />
        <span style="margin-left: 5px">{{ item.name }}({{ item.num }})</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "全部",
          code: "",
          img: require("images/map/qb.png"),
          num: 36,
        },
        {
          name: "产业基地",
          code: "tree",
          img: require("images/map/tree_cy.png"),
          num: 18,
        },
        {
          code: "tmxg",
          name: "谭脉西瓜",
          img: require("images/map/xg_dl.png"),
          num: 5,
        },
        {
          code: "stj",
          name: "沙糖桔",
          img: require("images/map/stj_mp.png"),
          num: 4,
        },
        {
          code: "sz",
          name: "生猪",
          img: require("images/map/zhu.png"),
          num: 1,
        },
        {
          code: "wlmy",
          name: "汶朗蜜柚",
          img: require("images/map/my_dl.png"),
          num: 1,
        },
        {
          code: "lmj",
          name: "栗米鸡",
          img: require("images/map/ji.png"),
          num: 1,
        },
        {
          code: "ssy",
          name: "桥头石山羊",
          img: require("images/map/ssy_dl.png"),
          num: 1,
        },
        {
          code: "cgz",
          name: "怀集茶杆竹",
          img: require("images/map/zz_dl.png"),
          num: 3,
        },
        {
          code: "gpqf",
          name: "岗坪切粉",
          img: require("images/map/f_dl.png"),
          num: 1,
        },
        {
          code: "xghc",
          name: "新岗红茶",
          img: require("images/map/hc_mp.png"),
          num: 1,
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styl/varibles.styl'

.warn-table
  position absolute
  bottom 65px
  right 28%
  padding 5px 10px
  z-index 9
  background-color rgba(25, 41, 90, 1)
  border 1px solid #125764

.num
  font-size 15px

.close, .imgg
  width 17px
  height 17px
  vertical-align middle

ul li
  margin 5px 0
</style>
