<template>
  <div class="video-warp" @click="toVideoDetail()">
    <video :src="url"></video>
    <div class="content">
      <img :src="pic" alt="" class="pic">
      <!-- <div class="play">
        <div class="triangle"></div>
      </div> -->
    </div>

    <!-- 底部信息 -->
    <div class="footer">
      <img src="~@/assets/img/childList/videoFooer.png" alt="" />
      <div class="name">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
    },
    title: {
      type: String,
    },
  },

  methods: {
    toVideoDetail(){
      let {url, pic, title} = this;
      this.$router.push({path: '/video-play', query: {url, pic, title}})
    }
  }
};
</script>

<style lang="less" scoped>
.video-warp {
  position: relative;
  border: 2px solid #fff;
  border-radius: 25px;
  overflow: hidden;
  video {
    width: 100%;
    border: none;
    border-image-width: 0;
  }

  .content {
    background: rgb(78, 178, 230);
    position: absolute;
    border-radius: 25px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 50%;
    .pic {
      position: absolute;
      height: 88%;
      object-fit: cover;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
    }


    // .play {
    //   width: 80px;
    //   height: 80px;
    //   border-radius: 50%;
    //   background: #ffffff;
    //   // margin: 30% auto 0 auto;
    //   margin: 0 auto;
    //   transform: translateY(-100%);
    //   text-align: center;
    //   .triangle {
    //     width: 0;
    //     height: 0;
    //     border-width: 0 30px 30px;
    //     border-style: solid;
    //     border-color: transparent transparent rgb(78, 178, 230);
    //     margin-left: 40px;
    //     padding-top: 50px;
    //     transform: rotate(90deg);
    //     // border-radius: 30px;
    //   }
    // }
  }

  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 2;
    img {
      width: 100%;
      position: absolute;
      bottom: 0;
    }

    @media screen and (max-width: 800px) {
      .name {
        color: #fff;
        position: absolute;
        font-size: 25px;
        bottom: 10px;
        left: 20px;
      }
    }

    @media screen and (min-width: 800px) {
      .name {
        color: #fff;
        position: absolute;
        font-size: 25px;
        bottom: 15px;
        left: 20px;
      }
    }
  }
}
</style>
