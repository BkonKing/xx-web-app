import request from '@/utils/request';

export async function getWxpay(params?: any) {
  return request('/basicset/setting/getWxpay', {
    params,
  });
}

export async function setWxpay(params: any) {
  return request('/basicset/setting/setWxpay', {
    method: 'POST',
    data: params
  });
}
