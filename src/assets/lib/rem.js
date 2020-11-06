function setRem() {
    // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //得到html的Dom元素
    let htmlDom = document.getElementsByTagName('html')[0];
    //设置根元素字体大小
    //   htmlDom.style.fontSize = 100 * (htmlWidth / 750) + 'px';

    let width = document.documentElement.clientWidth,
        height = document.documentElement.clientHeight;
    let proportion = 0;
    console.log('window.innerWidth', window.innerWidth)
    console.log('width', width)
    console.log('height', height)
    if (width > 1000) {
        proportion = 50
    } else if (width > 400 && width < 800) {
        proportion = 40
    } else if (width <= 400) {
        proportion = 30
    }


    htmlDom.style.fontSize = (window.innerWidth / proportion) + 'px';

}

// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}