import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '리프리 | refri',
  description: '당신의 냉장고 리프리가 정리할게요.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
