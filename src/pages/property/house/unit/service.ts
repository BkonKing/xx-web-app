import request from '@/utils/request';

interface tableParams {
  pageNum: number;
  pageSize: number;
  [propname: string]: any
}

export function getUnitList(params: tableParams) {
  return request('/property/house/getUnitList', {
    params
  })
}

export function addUnit(params: any) {
  return request('/property/house/addUnit', {
    method: 'POST',
    data: params
  })
}

export function updateUnit(params: any) {
  return request('/property/house/updateUnit', {
    method: 'POST',
    data: params
  })
}

export function deleteUnit(params: any) {
  return request('/property/house/deleteUnit', {
    method: 'POST',
    data: params
  })
}
