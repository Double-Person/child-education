import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/child-list',
    name: 'ChildList',
    component: () => import('../views/childList/index.vue')
  },
  {  // 视屏播放
    path: '/video-play',
    name: 'VideoPlay',
    component: () => import('../components/VideoPlay.vue')
  },
  {  // 公司介绍
    path: '/introduce',
    name: 'Introduce',
    component: () => import('../components/introduce/index.vue')
  },
  {  // 分享
    path: '/share',
    name: 'Share',
    component: () => import('../components/share.vue')
  }
  
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
