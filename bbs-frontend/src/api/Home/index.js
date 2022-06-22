import request from '../../utils/request';

export function GetTable(params) {
  return request({
    url: '/getTable/new',
    method: 'get',
    params,
  });
}
