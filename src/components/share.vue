<template>
  <div class="bg-img-warp share">
    <img class="logo" src="~@/assets/img/index/animationTitle.png" alt="" />
    <div class="content">
      <img class="warp" src="~@/assets/img/share/warp.png" alt="" />
      <div class="content-text">
        邀请好友观看注册可免费获得视频课程
        <img class="btn" src="~@/assets/img/share/btn.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.share {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/img/share/bg.png") no-repeat;

  .logo {
    width: 260px;
    position: fixed;
    left: 3%;
    top: 3%;
  }

  .content {
    width: 60%;
    margin: 0 auto;
    position: relative;
    // padding-top: 1%;
    .warp {
      width: 100%;
      height: 90vh;
    }

    .content-text {
      color: rgb(116, 91, 36);
      padding: 30px;
      font-size: 32px;
      font-weight: 600;

      position: absolute;
      top: 52%;
      left: 8%;
      right: 9%;
      bottom: 9%;
      text-align: center;
      .btn {
        width: 220px;
        position: absolute;
        bottom: 2%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>