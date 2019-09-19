import axios from 'axios'
const http = axios.create({
  baseURL: '',
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' }
})
// 发起请求拦截
http.interceptors.request.use(res => {
  console.log(res, '======')
  res.headers.common['loginedtoken'] = localStorage.getItem('loginedtoken') || ''
  return res
})
// 请求返回拦截
http.interceptors.response.use(res => {
  if (res.data.code === 1005) {
    location.replace('/login')
  }
  return res
})

export default http
