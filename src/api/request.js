import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui';


// 创建 axios 实例
const service = axios.create({
  baseURL: '/api',//'http://housekeeper.hkzhtech.com',// process.env.VUE_APP_BASE_API //   VUE_APP_SAFETY_API
  timeout: 9000 // 请求超时时间
})

const err = error => {
  if (error.response) {
    let data = error.response.data
    console.log('------异常响应------', error.response)
    if(error.response.data.code !== 1) {
      Message.closeAll()
      Message({
        message: error.response.data.msg || '请求失败请稍后后再试',
        type: 'error',
        duration: 3 * 1000
      })
    }
    switch (error.response.status) {
      case 403:
        // notification.error({ message: '系统提示', description: '拒绝访问', duration: 4 })
        break
      case 500:
        if (token && data.message == 'Token失效，请重新登录') {
      
        }
        break
      case 404:
       // notification.error({ message: '系统提示', description: '很抱歉，资源未找到!', duration: 4 })
        break
      case 504:
      //  notification.error({ message: '系统提示', description: '网络超时' })
        break
      case 401:
       // notification.error({ message: '系统提示', description: '未授权，请重新登录', duration: 4 })
      
        break
      default:
        // notification.error({
        //   message: '系统提示',
        //   description: data.message,
        //   duration: 4
        // })
        break
    }
  }
  return Promise.reject(error)
}

service.interceptors.request.use(
  config => {
      // config.baseURL = process.env.VUE_APP_BASE_API
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(response => {

      if (!(response.data.code === 200) || response.data.code === 0) {
        // notification.destroy()
        // notification.error({
        //   message: '系统提示',
        //   description: response.data.message || '系统异常，请联系管理员',
        //   duration: 4
        // })
      }
    
  return response.data
}, err)


export { service as axios }
