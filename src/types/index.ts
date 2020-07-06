/*
 * @Description: 定义AxiosRequestConfig接口
 * @Version: 0.0.1
 * @Author: HarryXiong
 * @Date: 2020-07-06 16:14:45
 * @LastEditTime: 2020-07-06 20:07:27
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
}
