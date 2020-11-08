<template>
  <div class="warp-header">
    <!-- 选中类型 -->
    <div class="left">
      <img class="snail" src="~@/assets/img/childList/woniu.png" alt="" />
      <div class="left-warp">
        <img
          class="title-warp"
          src="~@/assets/img/childList/courseType.png"
          alt=""
        />
        <div class="title">{{ title }}</div>
      </div>
    </div>
    <!-- 右侧商店 -->
    <div class="right">
      <div
        class="right-item"
        v-for="(item, index) in topRightList"
        :key="index"
      >
        <img class="icon-img" :src="item.iconImg" alt="" srcset="" />
        <img class="title-img" :src="item.titleImg" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
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
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 800px) {
  .title {
    top: 8px;
  }
}

@media screen and (min-width: 801px) {
  .title {
    top: 10px;
  }
}

.title {
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  font-weight: 600;

  color: transparent;
  -webkit-text-fill-color: #fff; /*文字的填充色*/
  -webkit-text-stroke: 1px rgb(255, 221, 175);
}

.warp-header {
  display: flex;

  .left {
    flex: 2;
    text-align: center;

    .snail {
      width: 50px;
      margin-left: -125px;
    }
    .left-warp {
      position: relative;

      .title-warp {
        width: 280px;
        margin-top: -36px;
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: space-around;
    // margin-top: 10px;

    .right-item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      .icon-img{
        width: 60px;
      }
      .title-img{
        width: 40px;
        margin: 10px 0 0 10px ;
      }
    }
  }
}
</style>