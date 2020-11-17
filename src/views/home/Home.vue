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
import Carousel from "./Carousel";
export default {
  name: "Home",
  components: {
    TopHeaderRight,
    Carousel,
  },
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 800px) {
  .home {
    width: 100%;
    height: 100vh;
    background: url("~@/assets/img/index/bg.png") no-repeat;
    overflow-y: hidden;
    .top {
      padding: 20px 50px 0 50px;
      .left {
        width: 65%;

        img {
          width: 300px;
        }
      }
      .right {
        flex: 1;
      }
    }
    .content {
      height: 78%;
      // background: pink;
      margin: 0px auto -20px auto;
    }
  }
}
@media screen and (max-width: 800px) {
  .home {
    width: 100%;
    height: 100%;
    background: url("~@/assets/img/index/bg.png") no-repeat;
    overflow-y: hidden;
    .top {
      padding: 20px 50px 0 50px;
      height: 150px;
      .left {
        width: 65%;

        img {
          width: 300px;
        }
      }
      .right {
        flex: 1;
      }
    }
    .content {
      height: 700px;
      // background: pink;
      margin: 0px auto 0px auto;
    }
  }
}
</style>
