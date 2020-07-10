import { AxiosRequestConfig } from './types/AxiosRequest'
import { AxiosPromise, AxiosResponse } from './types/AxiosResponse'
import parseHeaders from './module/praseHeaders'

/**
 * @name: xhr
 * @param config: AxiosRequestConfig
 * @return:
 * @description: 调用原生xhr库实现Ajax功能
 */
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise(resolve => {
    const { data = null, url, method = 'get', headers, responseType } = config

    // 创建XMLHttpRequest对象
    const request = new XMLHttpRequest()

    // 给XMLHttpRequest对象的responseType赋值
    // 设置响应返回的数据格式
    if (responseType) {
      request.responseType = responseType
    }

    // 使用open连接服务器
    request.open(method.toUpperCase(), url, true)

    // 设置请求头，setRequestHeader()方法要求键-值类型，下面为构造
    Object.keys(headers).forEach(name => {
      // 通过processHeaders模块统一处理过了，所以删除重复的
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    // 发送数据
    request.send(data)

    // 处理返回的response
    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }

      // 获取响应头, 并用parseHeaders解析
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      // 获取响应体
      const responseData =
        responseType && responseType !== 'text' ? request.response : request.responseText

      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      resolve(response)
    }
  })
}
