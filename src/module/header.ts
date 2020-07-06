import { isObject } from './util'

/**
 * @name: normalizeHeaderName
 * @param headers: any, normalizeHeaderName: string 传入规定的写法
 * @return: void
 * @description: 用来兼容Content-Type和content-type两种写法，方便用户使用
 */
function normalizeHeaderName(headers: any, normalizeHeaderName: string): void {
  // headers为空，什么都不做
  if (!headers) {
    return
  }

  /**
   * Object.keys()
   * 返回一个对象中可枚举属性名组成的数组
   * 数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致
   */
  Object.keys(headers).forEach(name => {
    if (
      name !== normalizeHeaderName &&
      name.toLocaleUpperCase === normalizeHeaderName.toLocaleUpperCase
    ) {
      headers[normalizeHeaderName] = headers[name]
      delete headers[name]
    }
  })
}

export default function processHeaders(headers: any, data: any) {
  normalizeHeaderName(headers, 'Content-Type')

  if (isObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json; charset=utf-8'
    }
  }
}
