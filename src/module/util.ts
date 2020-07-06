const toString = Object.prototype.toString

/**
 * 判断传入的参数是否是日期类型（is 语法相当于给 value 进行 as 类型转换）
 * @param value 参数
 */
export function isDate(value: any): value is Date {
  return toString.call(value) === '[object Date]'
}

/**
 * 判断传入的参数是否是对象类型（is 语法相当于给 value 进行 as 类型转换）
 * @param value 参数
 */
export function isObject(value: any): value is Object {
  return value !== null && typeof value === 'object'
}
