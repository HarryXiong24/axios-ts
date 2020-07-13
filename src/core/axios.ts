import dispatchRequest from './dispatchRequest'
import { AxiosRequestConfig } from '../types/AxiosRequest'
import { AxiosPromise } from '../types/AxiosResponse'
import { Method } from '../types/method'

/**
 * 创建一个 core 目录，用来存放发送请求核心流程的代码。
 * 我们在 core 目录下创建 Axios.ts 文件。
 * 创建一个 Axios 类，来实现接口定义的公共方法。
 */
export default class Axios {
  // 支持axios传1-2个参数
  request(url: any, config?: any): AxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    }
    return dispatchRequest(config)
  }

  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('get', url, config)
  }

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('delete', url, config)
  }

  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('head', url, config)
  }

  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('options', url, config)
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('post', url, data, config)
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('put', url, data, config)
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('patch', url, data, config)
  }

  // 方法重载
  // Object.assign(target, ...sources)
  // 参数: target目标对象; sources源对象。
  // 返回值: 目标对象。
  // 下面两个的作用方法的作用是, 把移出外面当参数的url，data，method等值，拷贝到config中
  _requestMethodWithoutData(method: Method, url: string, config?: AxiosRequestConfig) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url
      })
    )
  }

  // 方法重载
  _requestMethodWithData(method: Method, url: string, data?: any, config?: AxiosRequestConfig) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
        data
      })
    )
  }
}
