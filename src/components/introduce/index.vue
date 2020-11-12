<template>
  <div class="bg-img-warp introduce">
    <img class="logo" src="~@/assets/img/index/animationTitle.png" alt="" />
    <div class="content">
      <img class="title" src="~@/assets/img/introduce/title.png" alt="" />
      <img class="warp" src="~@/assets/img/introduce/warp.png" alt="" />
      <div class="content-text">柒星云视频是一家专注少儿教育的公司</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.introduce {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/img/introduce/bg.png") no-repeat;

  .logo {
    width: 260px;
    position: fixed;
    left: 3%;
    top: 3%;
  }
  .content {
    width: 75%;
    margin: 0 auto;
    position: relative;
    padding-top: 1%;
    .title {
      width: 200px;
      position: absolute;
      top: 8%;
      left: 50%;
      transform: translateX(-50%);
    }

    .warp {
      width: 100%;
      height: 90vh;
    }
    .content-text {
      position: absolute;
      top: 35%;
      left: 14%;
      right: 14%;
      bottom: 10%;
      color: rgb(116, 91, 36);
      padding: 10px;
      font-size: 32px;
      font-weight: 600;
      overflow: hidden;
    }
  }
}
</style>