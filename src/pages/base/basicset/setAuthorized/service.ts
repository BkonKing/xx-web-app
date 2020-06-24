import request from '@/utils/request';

export async function getAuthorized(params?: any) {
  return request('/basicset/setting/getAuthorized', {
    params,
  });
}

export async function setAuthorized(params: any) {
  return request('/basicset/setting/setAuthorized', {
    method: 'POST',
    data: params,
  });
}
