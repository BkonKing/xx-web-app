import request from '@/utils/request';

export function getRegionsList(params: tableParams) {
  return request('/project/regions/getRegionsList', {
    params
  })
}

export function addRegions(params: any) {
  return request('/project/regions/addRegions', {
    method: 'POST',
    data: params
  })
}

export function updateRegions(params: any) {
  return request('/project/regions/updateRegions', {
    method: 'POST',
    data: params
  })
}

export function deleteRegions(params: any) {
  return request('/project/regions/deleteRegions', {
    method: 'POST',
    data: params
  })
}

export function getRegionsMenu(params: any) {
  return request('/project/regions/getRegionsMenu', {
    method: 'GET',
    params
  })
}

export function updateRegionsMenu(params: any) {
  return request('/project/regions/updateRegionsMenu', {
    method: 'POST',
    data: params
  })
}
