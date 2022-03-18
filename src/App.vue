<template>
  <div id="app">
    <header-bar />
    <router-view />
    <preview />
  </div>
</template>

<script>
import headerBar from "./views/common/header";

export default {
  components: {
    headerBar,
  },
};
</script>

<style lang="stylus">
@import '~@/assets/styl/index.styl'

#app
  font-family 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background url('~images/common/img_bg.png') no-repeat center
  background-size 100% 100%
</style>
