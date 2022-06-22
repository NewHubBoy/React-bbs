import axios from 'axios';

import { message } from 'antd';

const service = axios.create({
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // } else {
    //   return message.error('miss token');
    // }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data.code === '200') {
      return data;
    } else {
      return message.error(data.msg);
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
