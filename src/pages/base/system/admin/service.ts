import request from '@/utils/request';

interface adminParam {
  account: string,
  password?: string,
  realname?: string,
  mobile?: string,
  gender?: string,
  role_id?: string,
}

type updateAdmin = adminParam & {id: string}

export function getAdminList(params: tableParams) {
  return request('/system/admin/getAdminList', {
    params
  })
}

export function addAdmin(params: adminParam) {
  return request('/system/admin/addAdmin', {
    method: 'POST',
    data: params
  })
}

export function updateAdmin(params: updateAdmin) {
  return request('/system/admin/updateAdmin', {
    method: 'POST',
    data: params
  })
}

export function deleteAdmin(params: {id: number}) {
  return request('/system/admin/deleteAdmin', {
    method: 'POST',
    data: params
  })
}

