import { GoogleIcon, KakaoIcon, Logo } from '../../svgs';

export default function Login() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-[15.125rem] bg-sub-1">
      <Logo className="h-[3.75rem] w-[14.625rem]" />
      <div className="flex w-full flex-col gap-4 px-[2.125rem]">
        <button className="flex h-14 items-center rounded-[.25rem] bg-[#FEE600] px-5">
          <KakaoIcon className="h-[1.125rem] w-[1.25rem]" />
          <div className="flex-1 font-spoqa-sans text-[1.125rem] font-medium text-[#3C1E1E]">
            카카오톡 계정으로 로그인
          </div>
        </button>
        <button className="flex h-14 items-center rounded-[.25rem] bg-white px-5">
          <GoogleIcon className="h-[1.375rem] w-[1.375rem]" />
          <div className="flex-1 font-spoqa-sans text-[1.125rem] font-medium text-[#686868]">
            구글 계정으로 로그인
          </div>
        </button>
      </div>
    </div>
  );
}
