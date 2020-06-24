import request from '@/utils/request';

export async function getRoleList() {
  return request('/system/role/getRoleList');
}

export async function deleteRole(data: { id: number | number[] }) {
  return request('/system/role/deleteRole', {
    method: 'POST',
    data,
  });
}

export async function addRole(params: any) {
  return request('/system/role/addRole', {
    method: 'POST',
    data: params,
  });
}

export async function updateRole(params: any) {
  return request('/system/role/updateRole', {
    method: 'POST',
    data: params,
  });
}

export async function getRoleMenu(params: { roleId: number }) {
  return request('/system/role/getRoleMenu', {
    method: 'GET',
    params,
  });
}

export async function updateRoleMenu(params: any) {
  return request('/system/role/updateRoleMenu', {
    method: 'POST',
    data: params,
  });
}
