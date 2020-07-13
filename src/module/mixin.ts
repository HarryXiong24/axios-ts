/**
 * @name: extend
 * @param {type}
 * @return: to as T & U
 * @description: 最终目的是把 from 里的属性都扩展到 to 中，包括原型上的属性。
 */
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
