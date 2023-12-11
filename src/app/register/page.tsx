'use client';

import { useEffect, useState } from 'react';
import { useGlobalStore } from '../store';
import * as AuthApi from '../../lib/api/auth';
import { useRouter } from 'next/navigation';
import { Logo } from '@/svgs';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const [registerToken, setState] = useGlobalStore((state) => [
    state.registerToken,
    state.setState,
  ]);
  const router = useRouter();

  const [username, setUsername] = useState('');

  const handleRegister = async () => {
    if (!registerToken) return;
    try {
      const response = await AuthApi.register(username, registerToken);
      setState('isAuth', true);
      setState('sessionToken', response.session_token);
      setState('user', response.user);
      router.push('/login');
    } catch {
      toast.error('회원가입에 실패했습니다. 다시 로그인해주세요');
      router.push('/login');
    }
  };

  useEffect(() => {
    if (!registerToken) {
      router.push('/login');
    }
  }, [registerToken]);

  return (
    <div className="flex h-screen w-full flex-col justify-center px-8">
      <Logo
        color="#242325"
        className="absolute left-[50%] top-[1.625rem] w-[10rem] translate-x-[-50%]"
      />
      <h1 className="text-[1.4rem] font-medium">
        <span className="text-point">이름</span>을 입력해주세요
      </h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoFocus
        className="mt-[4rem] h-[2.5rem] w-full border-b-2 border-black text-[1.2rem]"
      />
      <button
        onClick={handleRegister}
        disabled={!username}
        className="mt-8 h-[3rem] w-full rounded-md bg-point text-[1.2rem] text-white"
      >
        회원 가입
      </button>
    </div>
  );
};

export default RegisterPage;
