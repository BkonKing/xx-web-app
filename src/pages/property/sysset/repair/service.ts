import request from '@/utils/request';

interface tableParams {
  pageNum: number;
  pageSize: number;
  [propname: string]: any;
}

export function getRepairCategoryList(params: tableParams) {
  return request('/sysset/repair/getRepairCategoryList', {
    params,
  });
}

export function addRepairCategory(params: any) {
  return request('/sysset/repair/addRepairCategory', {
    method: 'POST',
    data: params,
  });
}

export function updateRepairCategory(params: any) {
  return request('/sysset/repair/updateRepairCategory', {
    method: 'POST',
    data: params,
  });
}

export function deleteRepairCategory(params: any) {
  return request('/sysset/repair/deleteRepairCategory', {
    method: 'POST',
    data: params,
  });
}
