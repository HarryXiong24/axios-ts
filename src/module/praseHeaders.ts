export default function parseHeaders(headers: string): any {
  let parseResult: any = {}
  if (!headers) {
    return null
  }

  headers.split('\r\n').forEach(res => {
    res.trim()
    let [key, value] = res.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (value) {
      value = value.trim()
    }
    parseResult[key] = value
  })

  return parseResult
}
