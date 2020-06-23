import { validatenull } from './validate'

interface storeParams {
  name: string,
  content: any,
  type?: number
}
/**
 * 存储localStorage
 * @param params
 */
export const setStore = (params: storeParams) => {
  const {
    name,
    content,
    type
  } = params
  const obj = {
    dataType: typeof (content),
    content,
    type,
    datetime: new Date().getTime()
  }
  if (type) window.sessionStorage.setItem(name, JSON.stringify(obj))
  else window.localStorage.setItem(name, JSON.stringify(obj))
}
/**
 * 获取localStorage
 */
export const getStore = (params: { name: string }):any => {
  const { name } = params
  let obj: any
  let content: any
  obj = window.localStorage.getItem(name)
  if (validatenull(obj)) obj = window.sessionStorage.getItem(name)
  if (validatenull(obj)) return undefined
  obj = JSON.parse(obj)
  if (obj.dataType === 'string' || obj.dataType === 'object') {
    // eslint-disable-next-line prefer-destructuring
    content = obj.content
  } else if (obj.dataType === 'number') {
    content = Number(obj.content)
  } else if (obj.dataType === 'boolean') {
    content = Boolean(obj.content)
  }
  return content
}
/**
 * 删除localStorage
 */
export const removeStore = (params: { name: string }) => {
  const { name } = params
  window.localStorage.removeItem(name)
  window.sessionStorage.removeItem(name)
}

