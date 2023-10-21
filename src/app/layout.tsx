import './globals.css';
import type { Metadata } from 'next';
import Providers from './provider';
import { DehydratedState } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Noto_Sans_KR } from 'next/font/google';

export const metadata: Metadata = {
  title: '리프리 | refri',
  description: '당신의 냉장고 리프리가 정리할게요.',
  icons: '/favicon.ico',
};

export interface AppProps {
  dehydratedState: DehydratedState;
}

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-fit bg-[#deded5]">
      <body
        className={`${notoSansKR.variable} mx-auto h-fit max-w-[80rem] bg-white scrollbar-hide`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
