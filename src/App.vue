<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.resize()
  },
  methods: {
    resize () {
      var width = window.innerWidth,
          height = window.innerHeight,
          $wrapper = document.getElementById("app"),
          style = "";
      if (width >= height) { // 横屏
        // style += "width:" + width + "px;";  // 注意旋转后的宽高切换
        style += "width:" + "100%;";  // 注意旋转后的宽高切换
        // style += "height:" + height + "px;";
        style += "height:" +"100%;";
        style += "-webkit-transform: rotate(0); transform: rotate(0);";
        style += "-webkit-transform-origin: " + width / 2 + "px " + width / 2 + "px;";
        style += "transform-origin: " + width / 2 + "px " + width / 2 + "px;";
      }
      else { // 竖屏
        style += "width:" + height + "px;";
        style += "height:" + width + "px;";
        style += "-webkit-transform: rotate(90deg); transform: rotate(90deg);";
        // 注意旋转中点的处理
        style += "-webkit-transform-origin: " + width / 2 + "px " + width / 2 + "px;";
        style += "transform-origin: " + width / 2 + "px " + width / 2 + "px;";
      }
      $wrapper.style.cssText = style;
    }
  }
}
</script>

<style lang="less">
@import '~@/assets/style/reset.css';
@import '~@/assets/style/common.less';
#app{
  overflow: hidden;
}
</style>
