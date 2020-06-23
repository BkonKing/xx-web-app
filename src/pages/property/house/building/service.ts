import request from '@/utils/request';

export function getBuildingList(params: tableParams) {
  return request('/property/house/getBuildingList', {
    params
  })
}

export function addBuilding(params: any) {
  return request('/property/house/addBuilding', {
    method: 'POST',
    data: params
  })
}

export function updateBuilding(params: any) {
  return request('/property/house/updateBuilding', {
    method: 'POST',
    data: params
  })
}

export function deleteBuilding(params: any) {
  return request('/property/house/deleteBuilding', {
    method: 'POST',
    data: params
  })
}
