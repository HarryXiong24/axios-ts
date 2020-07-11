import { AxiosRequestConfig } from './types/AxiosRequest'
import xhr from './xhr'
import { buildURL } from './module/buildURL'
import { transformRequest } from './module/transformData'
import processHeaders from './module/processHeaders'
import { AxiosPromise, AxiosResponse } from './types/AxiosResponse'
import { processData } from './module/processData'

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    res = transformResponseData(res)
    return res
  })
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

// 处理返回的data数据
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = processData(res.data)
  return res
}

export default axios
