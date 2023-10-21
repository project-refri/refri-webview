import './globals.css';
import type { Metadata } from 'next';
import Providers from './provider';
import { DehydratedState } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Noto_Sans_KR } from 'next/font/google';
import Script from 'next/script';

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
      <head>
        <meta
          name="google-site-verification"
          content="yvx2TJk89biz8L00cpnli1OUcNu9mH4qdl29e1-qM0U"
        />
      </head>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-VYZXM8MDLN" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-VYZXM8MDLN');
        `}
          </Script>
        </>
      )}

      <body
        className={`${notoSansKR.variable} mx-auto h-fit max-w-[80rem] bg-white scrollbar-hide`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
