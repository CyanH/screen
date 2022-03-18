<template>
  <div class="flex topNav">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="flex"
      @click="select(index)"
      :class="choose == index ? 'basicSelect' : 'basic'"
    >
      <div class="circle">
        <img :src="item.src" style="width: 30px; height: 30px" />
        <div class="circle-row"></div>
      </div>
      <div>
        <span>{{ item.name }}</span> <span class="ys">({{ item.unit }})</span>
        <div class="valueNum flex">
          <span class="num">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choose: null,
      list: [
        {
          name: "今日进港",
          value: "23",
          unit: "艘",

          src: require("images/home/myzcl.png"),
        },
        {
          name: "今日出港",
          value: "18",
          unit: "艘",

          src: require("images/home/nycz.png"),
        },
        {
          name: "异常船舶",
          value: "1",
          unit: "艘",

          src: require("images/home/area_gd.png"),
        },
        {
          name: "渔获总量",
          value: "7.72",
          unit: "吨",

          src: require("images/home/plant_zz.png"),
        },
        {
          name: "人流统计",
          value: "27.64",
          unit: "万人",

          src: require("images/home/food_lsz.png"),
        },
      ],
    };
  },
  methods: {
    select(value) {
      this.choose = value;
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styl/varibles.styl';

.ys {
  color: $textColor;
  font-size: 0.08rem;
}

.topNav {
  top:10px
  z-index: 9;
  color: #fff;
  position: absolute;
  justify-content: space-between;
  right: 26%;
  left: 26%;
  padding 0 10px
  background: rgba(25, 41, 90, 0.5);
}

.basic {
  padding: 5px 0;
  cursor: pointer;
}

.valueNum {
  color: $textColor;
  font-size: 0.17rem;
}

@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

.circle {
  padding: 2px;
  position: relative;
  margin-right: 2px;

  img {
    width: 0.11rem;
    height: 0.11rem;
    vertical-align: middle;
  }
}

.circle-row {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url('~images/home/ico_lyzh.png') no-repeat center;
  background-size: 93%;
  animation: rotation 8s linear infinite;
  -moz-animation: rotation 8s linear infinite;
  -webkit-animation: rotation 8s linear infinite;
  -o-animation: rotation 8s linear infinite;
}

.basicSelect {
  padding: 5px 0;
  cursor: pointer;
  background: url('~images/home/select_icon.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
