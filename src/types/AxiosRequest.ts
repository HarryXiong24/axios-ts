/*
 * @Description: 定义AxiosRequestConfig接口
 * @Version: 0.0.1
 * @Author: HarryXiong
 * @Date: 2020-07-06 16:14:45
 * @LastEditTime: 2020-07-10 16:03:27
 */

import { Method } from './method'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
}
