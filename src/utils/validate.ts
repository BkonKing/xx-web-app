/**
 * 判断是否为空
 */
export function validatenull(val: any) {
  if (val instanceof Array) {
    if (val.length === 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true;
  } else {
    if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '')
      return true;
    return false;
  }
  return false;
}

/**
 * 判断电话或手机
 */
export function isPhone(phone: string) {
  const tel = /^(0\d{2,3}-?\d{7,8})$|^(\d{7,8})$/;
  const extension = /^((0\d{2,3}-?\d{7,8})|(\d{7,8}))+(-\d{1,5})$/;
  const isMob = /^((\+?86)|(\(\+86\)))?(1[3456789][0123456789]{9})$/;
  if (tel.test(phone) || extension.test(phone) || isMob.test(phone)) {
    return true;
  }
  return false;
}

/**
 * 判断经度，范围-180 ~ 180
 */
export function longitudeValid(value: string) {
  const reg = /^[-+]?(0(\.\d{1,10})?|([1-9](\d)?)(\.\d{1,10})?|1[0-7]\d{1}(\.\d{1,10})?|180(\.0{1,10})?)$/;
  if (reg.test(value)) {
    return true;
  }
  return false;
}

/**
 * 判断纬度，范围-90 ~ 90
 */
export function latitudeValid(value: string) {
  const reg = /^[-+]?((0|([1-8]\d?))(\.\d{1,10})?|90(\.0{1,10})?)$/;
  if (reg.test(value)) {
    return true;
  }
  return false;
}
