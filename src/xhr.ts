import { AxiosRequestConfig } from './types/index'

/**
 * @name: xhr
 * @param config: AxiosRequestConfig
 * @return:
 * @description: 调用原生xhr库实现Ajax功能
 */
export default function xhr(config: AxiosRequestConfig) {
  const { url, data = null, method = 'GET' } = config

  const request: XMLHttpRequest = new XMLHttpRequest()

  request.open(method.toLocaleUpperCase(), url, true)

  request.send(data)
}
