<template>
  <div class="panel">
    <v-card>
      <v-title>电子围栏</v-title>
      <div class="content">
        <img class="img" src="~images/home/jzt.png" />
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styl/varibles.styl'
.panel
  height calc(33% - 8px)
  margin-bottom: 8px
  font-size 0.06rem
  overflow hidden

.content
  height calc(100% - 43px)
  padding 0 10px

  .img
    height 100%
    margin auto
</style>
