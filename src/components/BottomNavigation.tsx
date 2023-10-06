'use client';
import { usePathname } from 'next/navigation';
import { HomeIcon, ProfileIcon, RecipeIcon } from '../svgs';
import Link from 'next/link';

export default function BottomNavigation() {
  const pathname = usePathname();

  const navigationItems = [
    {
      path: '/',
      name: '홈',
      Icon: HomeIcon,
    },
    {
      path: '/recipe',
      name: '레시피',
      Icon: RecipeIcon,
    },
    {
      path: '/profile',
      name: '프로필',
      Icon: ProfileIcon,
    },
  ];

  return (
    <div className="fixed bottom-0 z-50 flex h-[5.375rem] w-full max-w-[80rem] bg-[rgba(255,255,255,0.95)] shadow-sm">
      {navigationItems.map(({ path, name, Icon }) => (
        <Link
          key={path}
          href={path}
          className={`flex flex-1 flex-col items-center justify-center gap-[.375rem] ${
            pathname === path ? 'text-sub-1' : 'text-sub-2'
          }`}
        >
          <Icon className="h-[1.5625rem] w-[1.5625rem]" selected={pathname === path} />
          <p>{name}</p>
        </Link>
      ))}
    </div>
  );
}
