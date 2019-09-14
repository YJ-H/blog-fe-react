import axios from 'axios'
const http = axios.create({
  baseURL: '',
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' }
})
http.interceptors.request.use(res => {
  res.headers.common['loginedtoken'] = localStorage.getItem('loginedtoken') || ''
  return res
})

export default http
