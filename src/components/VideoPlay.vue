<template>
  <div class="bg-img-warp video-play">
    <img
      class="btn-img play-btn"
      src="~@/assets/img/play/play.png"
      alt=""
      srcset=""
    />
    <div class="custom-warp">
      <warp-video />
    </div>
    <img
      class="btn-img left-btn"
      src="~@/assets/img/play/left.png"
      alt=""
      srcset=""
    />
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
    return {};
  },
  created() {
    let { url } = this.$route.query.url;
  },
};
</script>

<style lang="less" scoped>
.video-play {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/img/play/beijing.png") no-repeat;
  line-height: 100vh;
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
      margin: 0 auto;
      position: relative;
    }
  }

  @media screen and (min-width: 801px) {
    .custom-warp {
      width: 65%;
      margin: 0 auto;
      position: relative;
    }
  }
}
</style>
