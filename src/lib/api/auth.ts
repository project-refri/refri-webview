import axiosInstance from './client';

const getAccountMe = async () => await axiosInstance.get<User>('/api/auth/me');
