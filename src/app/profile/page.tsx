'use client';

import { useEffect } from 'react';
import { useGlobalStore } from '../store';
import { useRouter } from 'next/navigation';
import { Logo, SearchIcon } from '@/svgs';
import BottomNavigation from '@/components/BottomNavigation';

const ProfilePage = () => {
  const [isAuth, user, setState] = useGlobalStore((state) => [
    state.isAuth,
    state.user,
    state.setState,
  ]);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push('/login');
    }
  }, [isAuth]);
  return (
    <main className="flex flex-col overflow-scroll pb-[5.375rem] pt-[3.75rem] scrollbar-hide">
      <div className="fixed top-0 z-50 flex h-[3.75rem] w-full max-w-[80rem] justify-between bg-bg px-[1.25rem] pt-[1rem]">
        <Logo className="h-[1.25rem]" color="#242325" />
      </div>

      <div className="h-[calc(100vh-9.125rem)]">
        <p className="flex h-[5rem] items-center justify-center text-center font-notoSans text-[1.2rem]">
          {user?.username}
        </p>
        <div className="flex gap-4">
          <button className="flex-1">로그아웃</button>
          <button className="flex-1">회원 탈퇴</button>
        </div>
      </div>
      <BottomNavigation />
    </main>
  );
};

export default ProfilePage;
