<template>
  <div class="home">
    <div class="jc-between align-center top">
      <div class="left">
        <img src="~@/assets/img/index/logo.png" alt="" srcset="" />
      </div>
      <div class="jc-between right">
        <div class="right-item" v-for="(item, index) in topList" :key="index">
          <img class="icon" :src="item.iconImg" alt="" srcset="" />
          <img class="title" :src="item.titleImg" alt="" srcset="" />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="jc-center top-content">
        <div
          class="fl top-content-item"
          v-for="(item, index) in contentTop"
          :key="index"
        >
          <img class="icon" :src="item.iconImg" alt="" srcset="" />
          <img class="title" :src="item.titleImg" alt="" srcset="" />
        </div>
      </div>

      <div class="jc-center bottom-content">
        <div
          class="fl bottom-content-item"
          v-for="(item, index) in contentBottom"
          :key="index"
        >
          <img class="icon" :src="item.iconImg" alt="" srcset="" />
          <img class="title" :src="item.titleImg" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      topList: [
        {
          titleImg: require("@/assets/img/index/shopTitle.png"),
          iconImg: require("@/assets/img/index/shop.png"),
        },
        {
          titleImg: require("@/assets/img/index/giftBoxText.png"),
          iconImg: require("@/assets/img/index/giftBox.png"),
        },
        {
          titleImg: require("@/assets/img/index/layerText.png"),
          iconImg: require("@/assets/img/index/layer.png"),
        },
      ],

      contentTop: [
        {
          iconImg: require("@/assets/img/index/1.png"),
          titleImg: require("@/assets/img/index/animationTitle.png"),
        },
        {
          iconImg: require("@/assets/img/index/3.png"),
          titleImg: require("@/assets/img/index/learningGarden.png"),
        },
        {
          iconImg: require("@/assets/img/index/5.png"),
          titleImg: require("@/assets/img/index/videoTitle.png"),
        },
      ],

      contentBottom: [
        {
          iconImg: require("@/assets/img/index/2.png"),
          titleImg: require("@/assets/img/index/childToys.png"),
        },
        {
          iconImg: require("@/assets/img/index/4.png"),
          titleImg: require("@/assets/img/index/scienceEducation.png"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/img/index/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  .top {
    padding: 20px 50px 0 50px;
    .left {
      width: 300px;
      img {
        width: 100%;
      }
    }
    .right {
      .right-item {
        text-align: center;
        margin-left: 30px;
        img {
          display: block;
          margin: 0 auto;
        }
        .icon {
          width: 100px;
          height: 100px;
        }
        .title {
          width: 50px;
          margin-top: 20px;
        }
      }
    }
  }

  .content {
    .top-content {
      margin-top: 80px;
      .top-content-item {
        flex: 1;
        text-align: center;
        flex-direction: column;
        &:nth-of-type(3) {
          .title{
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
  }
}
</style>
