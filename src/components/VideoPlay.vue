<template>
  <div class="bg-img-warp video-play">
    <!-- 播放暂停按钮 -->
    <img class="btn-img play-btn" :src="toogleStatus == 'play' ? imgBtn.pause :imgBtn.play" alt="" srcset="" @click="toogleBtn"/>
    <!-- 视屏 -->
    <div class="custom-warp">
      <warp-video 
      url="https://www.w3school.com.cn/i/movie.ogg"
      :toogleStatus = "toogleStatus"
       @ended="ended" />
    </div>
    <!-- 上一个视屏 -->
    <img
      class="btn-img left-btn"
      src="~@/assets/img/play/left.png"
      alt=""
      srcset=""
    />
    <!-- 下一个视屏 -->
    <img
      class="btn-img right-btn"
      src="~@/assets/img/play/right.png"
      alt=""
      srcset=""
    />
  </div>
</template>

<script>
import WarpVideo from "./WarpVideo";

export default {
  components: {
    WarpVideo,
  },
  data() {
    return {
      imgBtn: {
        play: require("@/assets/img/play/play.png"),
        pause: require("@/assets/img/play/suspended.png"),
      },
      toogleStatus: 'play'
    };
  },
  created() {
    let { url } = this.$route.query.url;
  },

  methods: {
    toogleBtn() {
     
      this.toogleStatus = this.toogleStatus == 'pause' ? 'play' : 'pause'
    },
    ended() {
      console.log('--播放结束--')
      this.toogleStatus = 'play'
      this.$forceUpdate()
    },

  }
};
</script>

<style lang="less" scoped>
.video-play {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/img/play/beijing.png") no-repeat;
  // line-height: 100vh;
  position: relative;

  .btn-img {
    position: absolute;
    width: 120px;
  }

  .play-btn {
    top: 2%;
    right: 2%;
  }
  .left-btn {
    left: 5%;
    bottom: 3%;
  }

  .right-btn {
    right: 5%;
    bottom: 3%;
  }

  @media screen and (max-width: 800px) {
    .custom-warp {
      width: 65%;
      height: 400px;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 801px) {
    .custom-warp {
      width: 65%;
      margin: 0 auto;
    }
  }
}
</style>
