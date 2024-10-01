import axios from 'axios';
import { cookies } from 'next/headers';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const cookiesStore = cookies();
    const accessToken = cookiesStore.get('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    const config = error.config;
    if (error.response.status === 401 && !config.sent) {
      config.sent = true;
      const res = await axiosInstance.get('/refresh-token');
      const accessToken = res.data.accessToken;
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return axiosInstance(config);
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
