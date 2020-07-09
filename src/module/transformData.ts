import { isPlainObject } from './util'
/**
 * @name: transformRequest
 * @param {type}
 * @return:
 * @description: 把data对象转换成JSON
 */
export function transformRequest(data: any): any {
  /**
   * 使用 isPlainObject 函数判断，而不用之前的 isObject 函数
   * 因为 isObject 的判断方式，对于 FormData、ArrayBuffer 这些类型，isObject 判断也为 true
   * 但是这些类型的数据我们是不需要做处理的
   * 而 isPlainObject 的判断方式，只有我们定义的普通 JSON 对象才能满足
   */
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  } else {
    return data
  }
}
