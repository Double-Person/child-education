import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
