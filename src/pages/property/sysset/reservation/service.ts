import request from '@/utils/request';

export function getReservationCategoryList(params: tableParams) {
  return request('/sysset/reservation/getReservationCategoryList', {
    params
  })
}

export function addReservationCategory(params: any) {
  return request('/sysset/reservation/addReservationCategory', {
    method: 'POST',
    data: params
  })
}

export function updateReservationCategory(params: any) {
  return request('/sysset/reservation/updateReservationCategory', {
    method: 'POST',
    data: params
  })
}

export function deleteReservationCategory(params: any) {
  return request('/sysset/reservation/deleteReservationCategory', {
    method: 'POST',
    data: params
  })
}
