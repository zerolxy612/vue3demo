import axios from 'axios'
import { ElMessage } from 'element-plus'

const NETWORK_ERROR = '服务器繁忙!'
// 设置全局的axios的配置
const service = axios.create({
  baseURL: '/api',
  timeout: 3000
})
// 配置请求的拦截
service.interceptors.request.use(function (config) {
  const headers = config.headers
  // 后期会补充tokens
  return config
}, function (error) {
  return Promise.reject(error)
})

// 定义响应拦截
service.interceptors.response.use(function (response) {
  const { msg, code, data } = response.data
  if (code === 200) {
    return data
  } else if (code === 402) {
    ElMessage.error(msg)
    return Promise.reject(msg)
  } else {
    ElMessage.error(NETWORK_ERROR)
    return Promise.reject(NETWORK_ERROR)
  }
}, function (error) {
  ElMessage.error(NETWORK_ERROR)
  return Promise.reject(error)
})

// request({method:'post',url:"/user/list",data:{id:1}})
// request({method:'Get',url:"/user/list" ,data:{id:1]})
function request (options) {
  // 定义提交的方式 ,默认为get
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return service(options)
}

// 封装get.post,put  request.get(url,data,options)  request.post(url,data,options)
['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({ method: item, url, data, ...options })
  }
})

export default request
