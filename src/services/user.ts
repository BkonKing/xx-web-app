import request from '@/utils/request';

export interface LoginParamsType {
  account: string;
  password: string;
}

export async function login(params: LoginParamsType) {
  return request('/system/slognin/login', {
    method: 'POST',
    data: params,
  });
}

export async function getToken(params: { headers: any }) {
  return request('/authorization/token/getToken', {
    method: 'POST',
    ...params,
  });
}

export async function outlogin() {
  return request('/system/slognin/outlogin', {
    method: 'POST',
  });
}

export async function queryMenu(): Promise<any> {
  return request('/system/index/left');
}

export async function queryNotices(): Promise<any> {
  return request('/notices');
}

export async function query(): Promise<any> {
  return request('/users');
}

export async function queryCurrent(): Promise<any> {
  return request('/currentUser');
}
