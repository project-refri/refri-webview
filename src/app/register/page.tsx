'use client';

import { useEffect, useRef, useState } from 'react';
import { useGlobalStore } from '../store';
import * as AuthApi from '../../lib/api/auth';
import { useRouter } from 'next/navigation';
import { Logo, ResetIcon } from '@/svgs';
import toast from 'react-hot-toast';
import getRandomName from '@/lib/getRandomName';

const RegisterPage = () => {
  const [registerToken, setState] = useGlobalStore((state) => [
    state.registerToken,
    state.setState,
  ]);
  const router = useRouter();
  const [username, setUsername] = useState(getRandomName());
  const inputRef = useRef<HTMLInputElement>(null);

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
      // router.push('/login');
    }
  };

  useEffect(() => {
    if (!registerToken) {
      router.push('/login');
    }
  }, [registerToken]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center px-8">
      <Logo color="#242325" className="mb-24 w-[10rem]" />
      <h1 className="text-[1.4rem] font-medium">처음 오셨군요!</h1>
      <p className="flex items-center ">
        <Logo color="#FD7109" className="mr-[0.25rem] inline w-[4rem]" />
        <span className="text-[1.4rem] font-medium">에서 사용할 이름을 알려주세요</span>
      </p>
      <div className="mt-[4rem] flex h-[2.5rem] w-[20.125rem] gap-[15px] ">
        <input
          type="text"
          ref={inputRef}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="grow border-b-2 border-black pl-[0.8125rem] text-[1.4rem] text-sub-2 outline-none"
        />
        <ResetIcon
          color="#242325"
          className="w-[2rem] cursor-pointer"
          onClick={() => {
            setUsername('');
            inputRef.current?.focus();
          }}
        />
      </div>
      <button
        onClick={handleRegister}
        disabled={!username}
        className="mt-8 h-[3rem] w-[20.125rem] rounded-md bg-point text-[1.2rem] text-white"
      >
        회원 가입
      </button>
    </div>
  );
};

export default RegisterPage;
