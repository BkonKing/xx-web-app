import request from '@/utils/request';

interface tableParams {
  pageNum: number;
  pageSize: number;
  [propname: string]: any;
}

export function getHouseList(params: tableParams) {
  return request('/property/house/getHouseList', {
    params,
  });
}

export function addHouse(params: any) {
  return request('/property/house/addHouse', {
    method: 'POST',
    data: params,
  });
}

export function updateHouse(params: any) {
  return request('/property/house/updateHouse', {
    method: 'POST',
    data: params,
  });
}

export function deleteHouse(params: any) {
  return request('/property/house/deleteHouse', {
    method: 'POST',
    data: params,
  });
}
