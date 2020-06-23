import request from '@/utils/request';

export function getHouseCategoryList(params: tableParams) {
  return request('/sysset/house/getHouseCategoryList', {
    params
  })
}

export function addHouseCategory(params: any) {
  return request('/sysset/house/addHouseCategory', {
    method: 'POST',
    data: params
  })
}

export function updateHouseCategory(params: any) {
  return request('/sysset/house/updateHouseCategory', {
    method: 'POST',
    data: params
  })
}

export function deleteHouseCategory(params: any) {
  return request('/sysset/house/deleteHouseCategory', {
    method: 'POST',
    data: params
  })
}
