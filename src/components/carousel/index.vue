<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>

     <div class="jc-center top-content" v-if="false">
        <div
          class="fl top-content-item"
          v-for="(item, index) in contentTop"
          :key="index"
          @click="toOtherPage(item.url)"
        >
          <img class="icon" :src="item.iconImg" alt="" srcset="" />
          <img class="title" :src="item.titleImg" alt="" srcset="" />
        </div>
      </div>

      <div class="jc-center bottom-content" v-if="false">
        <div
          class="fl bottom-content-item"
          v-for="(item, index) in contentBottom"
          :key="index"
          @click="toOtherPage(item.path)"
        >
          <img class="icon" :src="item.iconImg" alt="" srcset="" />
          <img class="title" :src="item.titleImg" alt="" srcset="" />
        </div>
      </div>

    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }



   .top-content {
      margin-top: 80px;
      .top-content-item {
        flex: 1;
        text-align: center;
        flex-direction: column;
        &:nth-of-type(3) {
          .title {
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
</style>