import request from '@/utils/request';
import { menuItem } from './data';

export async function getMenuList() {
  return request('/system/menu/getMenuList');
}

export async function deleteMenu(data: { id: number | number[]}) {
  return request('/system/menu/deleteMenu', {
    method: 'POST',
    data
  });
}

export async function addMenu(params: menuItem) {
  return request('/system/menu/addMenu', {
    method: 'POST',
    data: {
      ...params
    },
  });
}

export async function updateMenu(params: menuItem) {
  return request('/system/menu/updateMenu', {
    method: 'POST',
    data: {
      ...params
    },
  });
}
