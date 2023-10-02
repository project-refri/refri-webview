import { GoogleIcon, KakaoIcon, LogoWhite } from '../../../public/svgs';

export default function Login() {
  return (
    <div className="bg-sub-1 flex h-full flex-col items-center justify-center gap-[15.125rem]">
      <LogoWhite />
      <div className="flex w-full flex-col gap-4 px-[2.125rem]">
        <button className="flex h-14 items-center rounded-[.25rem] bg-[#FEE600] px-5">
          <KakaoIcon />
          <div className="flex-1">카카오톡 계정으로 로그인</div>
        </button>
        <button className="flex h-14 items-center rounded-[.25rem] bg-white px-5">
          <GoogleIcon />
          <div className="flex-1">구글 계정으로 로그인</div>
        </button>
      </div>
    </div>
  );
}
