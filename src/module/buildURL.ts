import { isDate, isPlainObject } from './util'

/**
 * @name: encode
 * @param val: string
 * @return: string
 * @description: 对传入的参数进行编码
 */
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

/**
 * @name: buildURL
 * @param {type}
 * @return: string
 * @description: 此函数功能是把参数拼接到URL之后
 */
export function buildURL(url: string, params?: any): string {
  if (!params) {
    // 如果没有参数，直接返回url
    return url
  }

  // 定义一组组的键-值数组
  const parts: string[] = []

  Object.keys(params).forEach(key => {
    let val = params[key]

    if (val === null || typeof val === 'undefined') {
      return
    }

    // 参数可能有数组的情况
    let values: string[]

    // 参数值为数组的话，返回示例/base/get?foo[]=bar&foo[]=baz'
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val] // 不是数组构造成数组，不加[]
    }

    // 遍历
    values.forEach(val => {
      // 时间类型，返回的url示例/base/get?date=2019-04-01T05:55:39.030Z
      // date后面拼接的是 date.toISOString() 的结果
      // 对象类型，返回的url示例/base/get?foo=%7B%22bar%22:%22baz%22%7D
      // foo后面拼接的其实是JSON字符串{"bar":"baz"} encode 后的结果。
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }

      // 以键-值形式存入
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  // 把字符串数组里的元素用&拼接
  let serializedParams = parts.join('&')

  if (serializedParams) {
    // 丢弃 url 中的哈希标记
    const markIndex = url.indexOf('#')

    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }

    // 这一步可以保留 url 中已存在的参数
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
