import './globals.css';
import type { Metadata } from 'next';
import Providers from './provider';

export const metadata: Metadata = {
  title: '리프리 | refri',
  description: '당신의 냉장고 리프리가 정리할게요.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-fit bg-[#deded5]">
      <body className="mx-auto h-fit max-w-[80rem] bg-white scrollbar-hide">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
