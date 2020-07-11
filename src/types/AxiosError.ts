import { AxiosRequestConfig } from './AxiosRequest'
import { AxiosResponse } from './AxiosResponse'

export interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}
