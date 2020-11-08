<template>
  <div class="bg-img-warp video-play">
      <img src="~@/assets/img/play/video-warp.png" />
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {
        let { url } = this.$route.query.url
    }

}
</script>

<style lang="less" scoped>
.video-play{
    width: 100%;
    height: 100vh;
    background: url("~@/assets/img/play/beijing.png") no-repeat;
}
</style>
