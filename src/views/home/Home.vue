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
.home {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/img/index/bg.png") no-repeat;

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

  @media screen and (min-width: 800px) {
    .content {
      height: 78%;
      // background: pink;
      margin: 20px auto 60px auto;
    }
  }
  @media screen and (max-width: 800px) {
    .content {
      height: 750px;
      // background: skyblue;
      margin: 100px auto 60px auto;
    }
  }
}
</style>
