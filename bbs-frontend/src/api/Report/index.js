import request from '../../utils/request';

export function getReportList(params) {
  return request({
    url: '/getReportList',
    method: 'get',
    params,
  });
}

export function getReportDetail(params) {
  return request({
    url: '/reportDetail',
    method: 'get',
    params,
  });
}
