const toString = Object.prototype.toString

/**
 * @name: isDate
 * @param value: any
 * @return: Date (is 语法相当于给 value 进行 as 类型转换)
 * @description: 判断传入的参数是否是日期类型
 */
export function isDate(value: any): value is Date {
  return toString.call(value) === '[object Date]'
}

/**
 * @name: isDate
 * @param value: any
 * @return: Date (is 语法相当于给 value 进行 as 类型转换)
 * @description: 判断传入的参数是否是对象类型
 */
export function isObject(value: any): value is Object {
  return value !== null && typeof value === 'object'
}

/**
 * @name: isDate
 * @param value: any
 * @return: Date (is 语法相当于给 value 进行 as 类型转换)
 * @description: 判断传入的参数是否是普通对象类型
 */
export function isPlainObject(value: any): value is Object {
  return toString.call(value) === '[object Object]'
}
