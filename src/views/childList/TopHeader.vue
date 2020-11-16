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
      <top-header-right />
    </div>
  </div>
</template>

<script>
import TopHeaderRight from "@/components/TopHeaderRight"
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    TopHeaderRight
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
  margin-bottom: 30px;

  .left {
    // flex: 4;
    width: 65%;
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
   
  }
}
</style>