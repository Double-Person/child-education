<template>
  <div class="custom-warp-div">
    <img class="custom-video-warp" src="~@/assets/img/play/video-warp.png" />
    <div class="video-div">
      <video
        class="video"
        controls
        src="https://www.w3school.com.cn/i/movie.ogg"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    let { url } = this.$route.query.url;
  },
};
</script>

<style lang="less" scoped>
.custom-warp-div {
  width: 100%;

  margin: 0 auto;
  position: relative;

  // pc
  @media screen and (min-width: 801px) {
    .custom-video-warp {
      width: 100%;
      position: relative;
      z-index: 2;
    }
    .video-div {
      background: pink;
      position: absolute;
      left: 1.5%;
      right: 2%;
      top: 22%;
      bottom: 3%;
      border-radius: 23% 22% 16% 16%;

      overflow: hidden;
    }
  }

  // 横屏
  @media screen and (max-width: 800px) and (min-width: 500px) {
    .custom-video-warp {
      width: 100%;
      position: relative;
      z-index: 2;
    }
    .video-div {
      background: pink;
      position: absolute;
      left: 1.5%;
      right: 1.5%;
      top: 18%;
      bottom: 11%;
      border-radius: 23% 33% 22% 21%;

      overflow: hidden;
    }
  }

  // 竖屏
  @media screen and (max-width: 499px) and (min-width: 200px) {
    .custom-video-warp {
      width: 100%;
      position: relative;
      //   top: 40%;
      margin-top: -71%;
      z-index: 2;
    }
    .video-div {
    //   background: pink;
      position: absolute;
      left: 1.5%;
      right: 1.5%;
      top: 11%;
      bottom: 52%;
      border-radius: 31% 26% 18% 18%;
      z-index: 1;

      overflow: hidden;
    }
  }

  .video {
    width: 100%;
    border: none;
    // object-fit: fill;
  }
}
</style>
