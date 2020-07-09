import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildURL } from './module/buildURL'
import { transformRequest } from './module/transformData'
import processHeaders from './module/processHeaders'

function axios(config: AxiosRequestConfig) {
  xhr(config)
}

// 处理url的函数
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

// 处理data的函数
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

// 处理headers的函数
function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

// 汇总，最后处理config的函数
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
  config.headers = transformHeaders(config)
}

export default axios
