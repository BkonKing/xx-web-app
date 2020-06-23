/**
 * 判断是否为空
 */
export function validatenull(val: any) {
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') return true
    return false
  }
  return false
}

/**
 * 判断电话或手机
 */
export function isPhone(phone: string) {
  var tel = /^(0\d{2,3}-?\d{7,8})$|^(\d{7,8})$/
  var extension = /^((0\d{2,3}-?\d{7,8})|(\d{7,8}))+(-\d{1,5})$/
  var isMob = /^((\+?86)|(\(\+86\)))?(1[3456789][0123456789]{9})$/
  if (tel.test(phone) || extension.test(phone) || isMob.test(phone)) {
    return true
  }
  return false
}
