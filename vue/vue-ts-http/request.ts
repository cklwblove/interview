import axios from 'axios'
import { Loading, Message } from 'element-ui'

const http: any = axios.create({
  baseURL: '/api',
  timeout: 5000,
  maxContentLength: 4000,
  headers: {
    token: Store.state.permission.token
  }
})
let loadinginstace: any
// 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const requestArr: any[] = []
const cancelRequest = (config: any) => {
  for (const key in requestArr) {
    if (requestArr[key].url === `${config.url}&${config.method}`) {
      requestArr[key].cancel('取消请求') // 执行取消操作
      requestArr.splice(key, 1) // 把这条记录从数组中移除
    }
  }
}

// 取消请求
const CancelToken = axios.CancelToken
http.interceptors.request.use(
  (config: any) => {
    cancelRequest(config) // 在一个ajax发送前执行一下取消操作
    config.cancelToken = new CancelToken(c => {
      //用请求地址&请求方式拼接的字符串做为唯一标识
      requestArr.push({url: `${config.url}&${config.method}`, cancel: c})
    })
    if (config.isLoading) {
      loadinginstace = Loading.service({fullscreen: true})
    }

    return config
  },
  error => {
    Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response: any) => {
    if (response.config.isLoading) {
      loadinginstace.close()
    }
    cancelRequest(response.config)
    if (response.status !== 200) {
      console.log('请求错误！')
    } else {
      return response.data
    }
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default http
