<template>
  <div class="warp">
    <div
      class="right-item"
      v-for="(item, index) in topRightList"
      :key="index"
      @click="codingTips"
    >
      <img class="icon-img" :src="item.iconImg" alt="" srcset="" />
      <img class="title-img" :src="item.titleImg" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topRightList: [
        {
          titleImg: require("@/assets/img/index/shopTitle.png"),
          iconImg: require("@/assets/img/index/shop.png"),
          url: "",
        },
        {
          titleImg: require("@/assets/img/index/giftBoxText.png"),
          iconImg: require("@/assets/img/index/giftBox.png"),
          url: "",
        },
        {
          titleImg: require("@/assets/img/index/layerText.png"),
          iconImg: require("@/assets/img/index/layer.png"),
          url: "",
        },
      ],
    };
  },
  methods: {
    // 顶部商城
    codingTips() {
      this.$message.closeAll();
      this.$message({
        showClose: true,
        message: "该功能暂未开放",
        type: "error",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.warp {
    display: flex;
    justify-content: space-between;
    width: 100%;
    // margin-top: 10px;

    .right-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .icon-img {
        width: 60px;
      }
      .title-img {
        width: 40px;
        margin: 10px 0 0 10px;
      }
    }
  }
</style>