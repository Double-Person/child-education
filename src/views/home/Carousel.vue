<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(item, index) in warpList" :key="index" class="carousel-item">
      <div class="jc-center top-content">
        <div
          class="fl top-content-item"
          v-for="(itemTop, indexTop) in item.top"
          :key="indexTop"
          @click="toOtherPage(itemTop.url)"
        >
          <img class="icon" :src="itemTop.iconImg" alt="" srcset="" />
          <img class="title" :src="itemTop.titleImg" alt="" srcset="" />
        </div>
      </div>

      <div class="jc-center bottom-content">
        <div
          class="fl bottom-content-item"
          v-for="(itemBottom, indexBottom) in item.bottom"
          :key="indexBottom"
          @click="toOtherPage(itemBottom.path)"
        >
          <img class="icon" :src="itemBottom.iconImg" alt="" />
          <img class="title" :src="itemBottom.titleImg" alt="" />
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      warpList: [
        {
          top: [
            {
              iconImg: require("@/assets/img/index/1.png"),
              titleImg: require("@/assets/img/index/animationTitle.png"),
              url: "/child-list",
            },
            {
              iconImg: require("@/assets/img/index/3.png"),
              titleImg: require("@/assets/img/index/learningGarden.png"),
              url: "/child-list", /// *-------------------------
            },
            {
              iconImg: require("@/assets/img/index/5.png"),
              titleImg: require("@/assets/img/index/videoTitle.png"),
              url: "/child-list",
            },
          ],

          bottom: [
            {
              iconImg: require("@/assets/img/index/2.png"),
              titleImg: require("@/assets/img/index/childToys.png"),
              url: "/child-list",
            },
            {
              iconImg: require("@/assets/img/index/4.png"),
              titleImg: require("@/assets/img/index/scienceEducation.png"),
              url: "/child-list",
            },
          ],
        },
      ],

    };
  },

  methods: {
    toOtherPage(path) {
      if (!path) {
        this.$message({
          showClose: true,
          message: "该功能暂未开放",
          type: "error",
        });
        return false;
      }
      this.$router.push({ path });
    },
  }
};
</script>

<style lang="less" scoped>
.el-carousel {
  height: 100%;
  /deep/ .el-carousel__container {
    height: 100%;
}
}
.carousel-item{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top-content {
  margin-top: 80px;
  .top-content-item {
    flex: 1;
    text-align: center;
    flex-direction: column;
    &:nth-of-type(3) {
      .title {
        width: 23%;
        // height: 50px;
      }
    }
    img {
      width: 300px;
      margin: 0 auto;
    }
  }
}

.bottom-content {
  .bottom-content-item {
    width: 35%;
    text-align: center;
    flex-direction: column;
    img {
      width: 300px;
      margin: 0 auto;
    }
  }
}


</style>