<template>
  <div class="custom-warp-div">
    <!-- 边框图片 -->
    <img
      class="custom-video-warp"
      src="~@/assets/img/play/video-warp.png"
      @click="plays"
    />
    <div class="video-div">
      <div id="dplayer"></div>
    </div>
  </div>
</template>

<script>
import DPlayer from "dplayer";
export default {
  props: {
    toogleStatus: {
      type: String,
      default: "pause",
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      status: "",
      dp: null,
      urlData: 'https://www.w3school.com.cn/i/movie.ogg'
    };
  },
  watch: {
    toogleStatus(val) {
      if(this.url == '') {
        alert('视屏加载错误')
        return false;
      }
      this.plays(val)
    }
    
  },
  created() {
    let { url } = this.$route.query.url;
  },
  mounted() {
    this.dp = new DPlayer({
      container: document.getElementById("dplayer"),
      video: {
        url: this.url,
      },
    });
    // 播放结束
    this.dp.on("ended",  () => {
      this.$emit("ended");
    });
  },

  methods: {
    plays(val) {
      if (val === "pause") this.dp.play();
      else this.dp.pause();
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .dplayer-mobile-play{
  display: none !important;
}
.custom-warp-div {
  position: relative;
  // 边框图片
  .custom-video-warp {
    width: 100%;
    height: 100%;
    vertical-align: top;
    position: relative;
    z-index: 2;
  }

  .video-div {
    overflow: hidden;
    background: pink;
    position: absolute;
    top: 19%;
    left: 3%;
    right: 2%;
    bottom: 2%;
    border-radius: 25% 24% 20% 18%;
  }
}
</style>
