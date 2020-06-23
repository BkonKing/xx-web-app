import request from '@/utils/request';

export async function getJpush(params?: any) {
  return request('/basicset/setting/getJpush', {
    params,
  });
}

export async function setJpush(params: any) {
  return request('/basicset/setting/setJpush', {
    method: 'POST',
    data: params
  });
}
