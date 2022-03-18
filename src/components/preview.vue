<template>
  <div class="imgCase flex" v-show="imgSta">
    <span class="preview_close" @click="closeClick">
      <i class="el-icon-circle-close"></i>
    </span>
    <div style="width: 5%" class="prev">
      <span class="prev_icon" @click="prevClick">
        <i class="el-icon-arrow-left"> </i
      ></span>
    </div>
    <div class="imgBox">
      <img
        class="previewImg"
        :src="imgUrl"
        ref="bigImage"
        @mousewheel="rollImg(this)"
        @mousedown="move"
        :style="{ transform: 'scale(' + scale + ')' }"
      />
    </div>
    <div style="width: 5%" class="next">
      <span class="next_icon" @click="nextClick">
        <i class="el-icon-arrow-right"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSta: false,
      imgUrl: "",
      imgList: [],
      imgIndex: 0,
      scale: 1,
    };
  },
  mounted() {
    this.$bus.$on("previewImg", (imgList, index) => {
      this.imgSta = true;
      this.imgList = imgList;
      this.imgIndex = index;
      console.log(this.imgSta);
      if (this.imgList[this.imgIndex].path) {
        this.imgUrl = this.imgList[this.imgIndex].path;
      } else if (this.imgList[this.imgIndex].logo) {
        // this.imgUrl =this.imgList[this.imgIndex].logo;
        this.imgUrl = this.imgList[this.imgIndex].logo;
      } else if (this.imgList[this.imgIndex].src) {
        // this.imgUrl =this.imgList[this.imgIndex].logo;
        this.imgUrl = this.imgList[this.imgIndex].src;
      } else if (this.imgList[this.imgIndex].pic) {
        // this.imgUrl =this.imgList[this.imgIndex].logo;
        this.imgUrl = this.imgList[this.imgIndex].pic;
      }
    });
  },
  methods: {
    prevClick() {
      if (this.imgIndex <= 0) {
        this.imgIndex = this.imgList.length - 1;
      } else {
        this.imgIndex = this.imgIndex - 1;
      }
      if (this.imgList[this.imgIndex].path) {
        this.imgUrl = this.imgList[this.imgIndex].path;
      } else if (this.imgList[this.imgIndex].logo) {
        // this.imgUrl =this.imgList[this.imgIndex].logo;
        this.imgUrl = this.imgList[this.imgIndex].logo;
      } else if (this.imgList[this.imgIndex].src) {
        // this.imgUrl =this.imgList[this.imgIndex].logo;
        this.imgUrl = this.imgList[this.imgIndex].src;
      } else if (this.imgList[this.imgIndex].pic) {
        // this.imgUrl =this.imgList[this.imgIndex].logo;
        this.imgUrl = this.imgList[this.imgIndex].pic;
      }
    },
    nextClick() {
      if (this.imgIndex >= this.imgList.length - 1) {
        this.imgIndex = 0;
      } else {
        this.imgIndex = this.imgIndex + 1;
      }
      if (this.imgList[this.imgIndex].path) {
        this.imgUrl = this.imgList[this.imgIndex].path;
      } else if (this.imgList[this.imgIndex].logo) {
        // this.imgUrl =this.imgList[this.imgIndex].logo;
        this.imgUrl = this.imgList[this.imgIndex].logo;
      } else if (this.imgList[this.imgIndex].src) {
        // this.imgUrl =this.imgList[this.imgIndex].logo;
        this.imgUrl = this.imgList[this.imgIndex].src;
      } else if (this.imgList[this.imgIndex].pic) {
        // this.imgUrl =this.imgList[this.imgIndex].logo;
        this.imgUrl = this.imgList[this.imgIndex].pic;
      }
    },
    closeClick() {
      this.imgSta = false;
    },
    // 鼠标滚轮控制图片大小
    rollImg() {
      /* 最小范围 和 最大范围 的图片缩放尺度 */
      if (event.wheelDelta < 0) {
        this.scale += event.wheelDelta / 2000;
      } else {
        this.scale += event.wheelDelta / 2000;
      }
      return false;
    },
    move(e) {
      let odiv = e.target; //获取目标元素
      e.preventDefault();
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = (e) => {
        let left = e.clientX - disX;
        let top = e.clientY - disY;
        odiv.style.left = left + "px";
        odiv.style.top = top + "px";
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
  },
};
</script>
<style lang="stylus">
.container
  width 100%
  // height 100vh
  position relative
  overflow hidden
  // font-family: 'electronicFont';
  // font-size .01rem

.rotation
  width 100%
  height 100%
  position absolute

.imgCase
  width 100%
  height 100%
  z-index 100
  background rgba(21, 41, 66, 0.8)
  position absolute
  top 0
  bottom 0
  right 0
  left 0
  .imgBox
    width 90%
    height 100%
    display: flex;
    justify-content: center;
    align-items: center;
    img
      position relative
      max-width 100%
      max-height 100%
  .preview_close
    position absolute
    cursor pointer
    top 10px
    right 15px
    color #fff
    font-size 35px
    border-radius 50%
    z-index 1
  .prev,.next
    text-align center
    z-index 1
  .prev_icon,.next_icon
    cursor pointer
    background-color #606266
    width 44px
    height 44px
    border-radius 50%
    padding 10px
    font-size 24px
    color #fff
    border-color #fff
</style>
