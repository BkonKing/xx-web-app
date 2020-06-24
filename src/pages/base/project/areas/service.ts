import request from '@/utils/request';

export function getAreasList() {
  return request('/project/areas/getAreasList');
}

export function addAreas(params: any) {
  return request('/project/areas/addAreas', {
    method: 'POST',
    data: params,
  });
}

export function updateAreas(params: any) {
  return request('/project/areas/updateAreas', {
    method: 'POST',
    data: params,
  });
}

export function deleteAreas(params: any) {
  return request('/project/areas/deleteAreas', {
    method: 'POST',
    data: params,
  });
}
