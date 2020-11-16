<template>
  <div class="custom-warp-div">
    <div class="title">{{ title }}</div>
    <!-- 边框图片 -->
    <img
      class="custom-video-warp"
      src="~@/assets/img/play/video-warp.png"
      @click="plays"
    />
    <div class="video-div">
      <div id="dplayer" ></div>
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
      required: true,
    },
    pic: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      status: "",
      dp: null,
    };
  },
  watch: {
    toogleStatus(val) {
      if (this.url == "") {
        this.$message({
          showClose: true,
          message: "视频获取失败请稍后再试",
          type: "error",
        });
        return false;
      }
      this.plays(val);
    },
  },
  created() {
    // let { url } = this.$route.query.url;
  },
  mounted() {
    this.dp = new DPlayer({
      container: document.getElementById("dplayer"),
      video: {
        url: this.url,
        // pic: this.pic
      },
    });
    // 播放结束
    this.dp.on("ended", () => {
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
/deep/ .dplayer-mobile-play {
  display: none !important;
}
.custom-warp-div {
  position: relative;
  .title {
    position: absolute;
    z-index: 5;

    -webkit-text-fill-color: rgb(242, 65, 125); /*文字的填充色*/

    left: 50%;
    transform: translateX(-50%);
    font-weight: bold;
  }

  @media screen and (max-width: 800px) {
    .title {
      font-size: 35px;
      -webkit-text-stroke: 1px #fff;
      top: 5%;
    }
  }

  @media screen and (min-width: 801px) {
    .title {
      font-size: 45px;
      -webkit-text-stroke: 2px #fff;
      top: 7%;
    }
  }

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
