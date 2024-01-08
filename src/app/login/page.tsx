'use client';

import { GoogleIcon, KakaoIcon, Logo } from '../../svgs';
import { useGoogleLogin } from '@react-oauth/google';
import KakaoLogin from 'react-kakao-login';
import * as AuthAPI from '../../lib/api/auth';
import toast from 'react-hot-toast';
import { useGlobalStore } from '../store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
  const [isAuth, setState] = useGlobalStore((state) => [state.isAuth, state.setState]);
  const router = useRouter();

  const handleLogin = async (response: AuthAPI.OAuthResponse) => {
    if (response.is_exist) {
      setState('isAuth', true);
      setState('sessionToken', response.session_token);
      setState('user', response.user);
    } else {
      setState('registerToken', response.register_token);
      router.push('/register');
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        const response = await AuthAPI.googleLogin(res.access_token);
        handleLogin(response);
      } catch (e) {
        toast.error('에러가 발생했습니다.');
      }
    },
  });

  const handleKakaoLogin = async (access_token: string) => {
    try {
      const response = await AuthAPI.kakaoLogin(access_token);
      handleLogin(response);
    } catch (e) {
      toast.error('에러가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (isAuth) {
      router.push('/');
    }
  }, [isAuth]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-[15.125rem] bg-sub-1">
      <Logo className="h-[3.75rem] w-[14.625rem]" />
      <div className="flex w-full flex-col gap-4 px-[2.125rem]">
        <KakaoLogin
          className="kakao-login"
          useLoginForm={true}
          render={(props) => (
            <button
              className="flex h-14 items-center rounded-[.25rem] bg-[#FEE600] px-5"
              {...props}
            >
              <KakaoIcon className="h-[1.125rem] w-[1.25rem]" />
              <div className="flex-1 font-notoSans text-[1.125rem] font-medium text-[#3C1E1E]">
                카카오톡 계정으로 로그인
              </div>
            </button>
          )}
          token={process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!}
          onSuccess={(result) => handleKakaoLogin(result.response.access_token)}
          onFail={(result) => console.log(result)}
        />
        <button
          className="flex h-14 items-center rounded-[.25rem] bg-white px-5"
          onClick={() => handleGoogleLogin()}
        >
          <GoogleIcon className="h-[1.375rem] w-[1.375rem]" />
          <div className="flex-1 font-notoSans text-[1.125rem] font-medium text-[#424242]">
            구글 계정으로 로그인
          </div>
        </button>
      </div>
    </div>
  );
}
