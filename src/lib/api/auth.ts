import axiosInstance from './client';

const getAccountMe = async () => await axiosInstance.get<User>('/auth/me');

const register = async (username: string) =>
  await axiosInstance.post<User>('/auth/register', { username });

const googleLogin = async (accessToken: string) =>
  await axiosInstance.post<User>('/auth/google', { accessToken });

const kakaoLogin = async (accessToken: string) =>
  await axiosInstance.post<User>('/auth/kakao', { accessToken });

const logout = async () => await axiosInstance.post<User>('/auth/logout');

export { getAccountMe, register, googleLogin, kakaoLogin, logout };
