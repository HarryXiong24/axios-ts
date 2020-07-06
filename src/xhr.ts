import { AxiosRequestConfig } from './types/index'

export default function xhr(config: AxiosRequestConfig) {
  const { url, data = null, method = 'GET' } = config

  const request: XMLHttpRequest = new XMLHttpRequest()

  request.open(method.toLocaleUpperCase(), url, true)

  request.send(data)
}
