import axios from "axios";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000, // request timeout
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const res = response.data;
      return res;
    } else {
      return Promise.reject(response.statusText);
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
