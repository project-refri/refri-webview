import axios from 'axios';
import { match } from 'ts-pattern';
import { toast } from 'react-hot-toast';
import { ROUTE } from '../constans';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 응답 인터셉터 처리
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.success === false)
      return Promise.reject('에러가 발생했습니다. 다시 시도해주세요.');
    else return response.data.data;
  },
  // 에러가 발생하면 각 에러에 대한 처리
  (error) => {
    match(error.response.status)
      .with(401, () => {
        location.replace(ROUTE.LOGIN);
      })
      .with(400, 403, 404, () => {
        toast.error('에러가 발생했습니다. 다시 시도해주세요.');
      });

    return Promise.reject({ code: error.response.status, message: error.response.data.message });
  },
);

export const setAccessToken = (token: string) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default axiosInstance;
