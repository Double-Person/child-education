<template>
  <div class="bg-img-warp home">
    <div class="jc-between align-center top">
      <div class="left">
        <img src="~@/assets/img/index/logo.png" alt="" srcset="" />
      </div>
      <div class="jc-between right">
        <top-header-right />
      </div>
    </div>

    <div class="content">
      <carousel />
     
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeaderRight from "@/components/TopHeaderRight";
import carousel from "@/components/carousel/index.vue"
export default {
  name: "Home",
  components: {
    TopHeaderRight,
    carousel
  },
  data() {
    return {
      

      contentTop: [
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

      contentBottom: [
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

.home {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/img/index/bg.png") no-repeat;

  .top {
    padding: 20px 50px 0 50px;
    .left {
      flex: 6;

      img {
        width: 300px;
      }
    }
    .right {
      flex: 1;

      // .right-item {
      //   text-align: center;
      //   margin-left: 30px;
      //   img {
      //     display: block;
      //     margin: 0 auto;
      //   }
      //   .icon {
      //     width: 100px;
      //     height: 100px;
      //   }
      //   .title {
      //     width: 50px;
      //     margin-top: 20px;
      //   }
      // }
    }
  }

  .content {
   
  }
}
</style>
