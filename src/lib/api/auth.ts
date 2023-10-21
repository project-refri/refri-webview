import axiosInstance from './client';

const getAccountMe = async () => await axiosInstance.get<User>('/auth/me');

const register = async (username: string) =>
  await axiosInstance.post<User>('/auth/register', { username });

const googleLogin = async (access_token: string) =>
  await axiosInstance.post<User>('/auth/google', { access_token });

const kakaoLogin = async (access_token: string) =>
  await axiosInstance.post<User>('/auth/kakao', { access_token });

const logout = async () => await axiosInstance.post<User>('/auth/logout');

export { getAccountMe, register, googleLogin, kakaoLogin, logout };
