import axiosInstance from './client';

const getAccountMe = async () => await axiosInstance.get<User>('/auth/me');

const register = async (
  username: string,
  registerToken: string,
): Promise<{ user: User; session_token: string }> =>
  (
    await axiosInstance.post(
      '/auth/register',
      { username },
      {
        headers: {
          Authorization: `Bearer ${registerToken}`,
        },
      },
    )
  ).data;

export type OAuthResponse = {
  is_exist: boolean;
  sesstion_token: string | undefined;
  user: User | undefined;
  register_token: string | undefined;
};

const googleLogin = async (access_token: string): Promise<OAuthResponse> =>
  await axiosInstance.post('/auth/google', { access_token });

const kakaoLogin = async (access_token: string): Promise<OAuthResponse> =>
  await axiosInstance.post('/auth/kakao', { access_token });

const logout = async () => await axiosInstance.post('/auth/logout');

export { getAccountMe, register, googleLogin, kakaoLogin, logout };
