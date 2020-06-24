import request from '@/utils/request';

export async function getExpressList(params: tableParams) {
  return request('/basicset/express/getExpressList', {
    params,
  });
}

export async function addExpress(params: any) {
  return request('/basicset/express/addExpress', {
    method: 'POST',
    data: params,
  });
}

export async function updateExpress(params: any) {
  return request('/basicset/express/updateExpress', {
    method: 'POST',
    data: params,
  });
}

export async function deleteExpress(params: any) {
  return request('/basicset/express/deleteExpress', {
    method: 'POST',
    data: params,
  });
}
