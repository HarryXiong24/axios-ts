import axios from '../../src'

// 使用 axios 模块发送网络请求
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
