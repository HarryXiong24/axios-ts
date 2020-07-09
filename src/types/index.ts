/*
 * @Description: 定义AxiosRequestConfig接口
 * @Version: 0.0.1
 * @Author: HarryXiong
 * @Date: 2020-07-06 16:14:45
 * @LastEditTime: 2020-07-09 21:46:07
 */

export type Method =
  | 'GET'
  | 'get'
  | 'POST'
  | 'post'
  | 'DELETE'
  | 'delete'
  | 'OPTIONS'
  | 'options'
  | 'HEAD'
  | 'head'
  | 'PUT'
  | 'put'
  | 'PATCH'
  | 'patch'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
}
