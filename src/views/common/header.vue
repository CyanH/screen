<template>
  <div class="header">
    <div class="flex" style="margin-top: 5px">
      <div class="leftBar flex-between">
        <div class="flex">
          <img src="~images/header/ico_rl.png" />
          <span class="num">{{ nowTime }}</span>
          <span class="date">{{ nowDate }}</span>
          <span class="week">{{ DateToday }}</span>
        </div>
      </div>
      <div class="titleName" @click="$router.push('/index')">
        <span class="title">建通渔港管理指挥平台</span>
      </div>
    </div>
  </div>
</template>

<script>
let weekData = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];
export default {
  name: "header",
  data() {
    return {
      nowTime: this.$formatDate(new Date(), "hh:mm:ss"),
      nowDate: this.$formatDate(new Date(), "yyyy年MM月dd日"),
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.nowTime = this.$formatDate(new Date(), "hh:mm:ss");
    }, 1000);
    let mydate = new Date().getDay();
    this.DateToday = weekData[mydate];
  },
};
</script>

<style lang="stylus" scoped>
.header
  position fixed
  width 100%
  z-index 9
  height 62px
  background url('~images/header/logo_bg.png')
  background-size 100%
  background-repeat no-repeat
  background-position-y bottom
  text-align center

  .leftBar
    padding-left 10px
    color #fff
    width 33%

    .num
      font-size 18px
      padding-left 5px

    .date,.week
      padding-left 5px

  .titleName
    width 33%

    .title
      font-size 24px
      font-weight bold
      color #00FFFF
      font-style oblique
      margin-left 10px
      cursor pointer

  .rightBar
    padding-right 5px

    .btn
      color #fff
      width 100px
      bottom 2.5px
      height 30px
      line-height 30px
      background url('~images/header/btn.png') no-repeat center
      background-size 100% 100%
      cursor pointer
      font-size 0.06rem
</style>
