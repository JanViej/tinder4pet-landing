import request from 'utils/request';

export async function checkOutApi(data) {
  return request.post('/orders', data);
}
