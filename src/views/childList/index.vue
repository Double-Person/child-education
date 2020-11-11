<template>
  <div class="bg-img-warp fl warp">
    <!-- 左侧 -->
    <div class="left-course-list">
      <!-- 课程列表总标题 云朵图片 -->
      <img
        class="block total-name"
        src="~@/assets/img/childList/courseList.png"
      />

      <img class="timbo" src="~@/assets/img/childList/teng.png" />

      <!-- 列表 -->
      <div
        class="course-list"
        v-for="(item, index) in courseList"
        :key="index"
        @click="handType(item, index)"
      >
        <img class="block line-img" src="~@/assets/img/childList/11.png" />
        <div class="block type-warp">
          <img
            class="img-warp"
            :src="activeIndex === index ? img.activeImg : img.defaultImg"
          />
          <div class="text">{{ item.label }}</div>
        </div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="left-video-list">
      <!-- 顶部信息 -->
      <top-header :title="activeName" />

      <div class="jc-between fl-warp video-list">
        <div class="video-item" v-for="(item, index) in videoList" :key="index">
          <video-play-list :url="item.url" :title="activeName" />
        </div>
        <img
          class="img-footer"
          src="~@/assets/img/childList/footerMask.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "./TopHeader";
import VideoPlayList from "@/components/VideoPlayList.vue";

export default {
  name: "ChildList",
  components: {
    TopHeader,
    VideoPlayList,
  },
  data() {
    return {
      img: {
        defaultImg: require("@/assets/img/childList/1.png"),
        activeImg: require("@/assets/img/childList/2.png"),
      },
      activeIndex: 0,
      activeName: "",
      courseList: [
        { label: "量与数", value: 0 },
        { label: "加减计算", value: 1 },
        { label: "几何与空间", value: 2 },
        { label: "综合思维", value: 3 },
      ],

      videoList: [
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 0 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 1 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 2 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 3 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 4 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 5 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 6 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 7 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 8 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 8 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 8 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 8 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 8 },
        { url: "https://www.w3school.com.cn/i/movie.ogg", id: 8 },
      ],
    };
  },

  created() {
    this.activeName = this.courseList[0].label;
  },

  methods: {
    handType(info, index) {
      this.activeIndex = index;
      this.activeName = info.label;
    },
  },
};
</script>

<style lang="less" scoped>
@leftNameImgWidth: 230px; // 名称图片
@leftLineImgWidth: 100px; //  链接名称线条图片

.block {
  display: block;
  margin: 0 auto;
}

.warp {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/img/childList/beijing.png") no-repeat;

  .left-course-list {
    width: 23%;
    text-align: center;
    padding-top: 100px;
    // position: relative;

    .total-name {
      width: @leftNameImgWidth;
    }

    .timbo {
      position: absolute;
      width: 120px;
      z-index: 2;
      left: 1.5%;
      top: 33%;
    }

    .course-list {
      position: relative;
      &:nth-of-type(1) {
        margin-top: -40px;
      }
      .line-img {
        width: @leftLineImgWidth;
        margin-top: -20px;
        position: relative;
        z-index: 2;
      }
      .type-warp {
        width: @leftNameImgWidth;
        margin-top: -20px;
        position: relative;
        cursor: pointer;
        .img-warp {
          width: 100%;
          height: 100%;
        }
        .text {
          width: 100%;
          font-size: 18px;
          color: #fff;
          text-align: center;
          position: absolute;
          top: 50%;
          transform: translateY(-60%);
        }
      }
    }
  }

  .left-video-list {
    width: 76%;
    position: relative;

    .video-list {
      overflow-y: auto;

      height: calc(100% - 130px);
      &:after {
        width: 30%;
        content: "";
      }
      .video-item {
        width: 30%;
        margin-bottom: 5.3%;
      }
    }

    .img-footer {
      width: 100%;
      position: absolute;
      bottom: 6px;
      z-index: 2;
    }
  }
}
</style>