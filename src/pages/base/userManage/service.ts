import request from '@/utils/request';

interface tableParams {
  pageNum?: number;
  pageSize?: number;
}

export async function getUserList(params:tableParams) {
  return request('/user/user/getUserList', {
    params
  })
}
