'use client';
import Image from 'next/image';
import BottomNavigation from '../components/BottomNavigation';
import { mockHotRecipe, mockRecentRecipe } from '@/mocks/mockRecipe';
import { CommentIcon, HeartIcon, Logo } from '../svgs';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <main className="flex flex-col overflow-scroll pb-[5.375rem] pt-[3.75rem] scrollbar-hide">
      <div className="fixed top-0 z-50 h-[3.75rem] w-full bg-bg px-[1.25rem] pt-[1rem]">
        <Logo className="h-[1.25rem] w-[5rem]" color="#242325" />
      </div>

      <Carousel infiniteLoop showArrows={false} showStatus={false} dynamicHeight showThumbs={false}>
        <div className="h-[14.6875rem]  bg-[url(/img/home_banner_1.png)] bg-cover">
          <div
            style={{
              background:
                'linear-gradient(90deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 101.46%)',
            }}
            className="absolute left-0 top-0 z-0 h-full w-full opacity-50"
          />
          <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-center gap-2 px-[2.5rem] text-left">
            <h1 className="font-spoqa-sans text-[1.5rem] font-bold text-[#EFEFE3]">
              우리집에서 <br /> 마치 <span className="text-[#FFAE68]">연남동</span> <br />{' '}
              비건식당처럼
            </h1>
            <p className="font-spoqa-sans text-[.75rem] font-medium text-[#EFEFE3]">
              트렌디한 플레이팅으로 <br />
              완성하는 건강한 미식 레시피
            </p>
          </div>
        </div>
        <div className="h-[14.6875rem]  bg-[url(/img/home_banner_1.png)] bg-cover">
          <div
            style={{
              background:
                'linear-gradient(90deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 101.46%)',
            }}
            className="absolute left-0 top-0 z-0 h-full w-full opacity-50"
          />
          <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-center gap-2 px-[2.5rem] text-left">
            <h1 className="font-spoqa-sans text-[1.5rem] font-bold text-[#EFEFE3]">
              우리집에서 <br /> 마치 <span className="text-[#FFAE68]">연남동</span> <br />{' '}
              비건식당처럼
            </h1>
            <p className="font-spoqa-sans text-[.75rem] font-medium text-[#EFEFE3]">
              트렌디한 플레이팅으로 <br />
              완성하는 건강한 미식 레시피
            </p>
          </div>
        </div>
      </Carousel>

      <div className="px-[1.25rem] py-[1.5625rem]">
        <div className="flex items-center justify-between">
          <h1 className="font-spoqa-sans text-[1.1875rem] font-bold text-sub-1">
            이번달 인기 레시피 TOP6
          </h1>
          <p className="cursor-pointer font-spoqa-sans text-[.75rem] font-medium text-brown">
            전체보기
          </p>
        </div>
        <div className="mt-4 flex h-[16.0625rem] w-fit flex-col flex-wrap gap-[1rem] overflow-scroll scrollbar-hide">
          {mockHotRecipe.map((recipe, index) => (
            <div
              key={index}
              className="flex h-[4.6875rem] w-[16.5625rem] gap-[.8438rem] rounded-tl-[1rem]"
            >
              <Image
                src={recipe.image}
                width={80}
                height={75}
                className="h-[4.6875rem] w-[5rem] rounded-[.25rem] rounded-tl-[1rem] object-cover"
                alt=""
              />
              <div className="flex flex-1 flex-col">
                <div className="flex flex-1">
                  <p className="w-[1.75rem] font-poppins text-[1.1875rem] font-medium leading-[1.5rem] text-brown">
                    {index + 1}
                  </p>
                  <div className="flex flex-col justify-between">
                    <h2 className="font-spoqa-sans text-[.875rem] font-medium leading-[1.3125rem] text-sub-1">
                      {recipe.name}
                    </h2>
                    <p className="font-spoqa-sans text-[.625rem] leading-[1.5rem] text-brown">
                      {recipe.views} views
                    </p>
                  </div>
                </div>
                <div className="h-[.0625rem] w-full bg-brown" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[.375rem] w-full bg-bg" />
      <div className="px-[1.25rem] py-[1.5625rem]">
        <div className="flex items-center justify-between">
          <h1 className="font-spoqa-sans text-[1.1875rem] font-bold text-sub-1">
            최근 업로드된 레시피
          </h1>
          <p className="cursor-pointer font-spoqa-sans text-[.75rem] font-medium text-brown">
            전체보기
          </p>
        </div>
        <div className="mt-4 flex w-full flex-col gap-[1rem]">
          {mockRecentRecipe.map((recipe, index) => (
            <div key={index} className="flex flex-col gap-[.7344rem] rounded-tl-[1rem]">
              <Image
                src={recipe.image}
                width={350}
                height={130}
                className="aspect-[350/130] w-full rounded-[.3125rem] rounded-tl-[1rem] object-cover"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-spoqa-sans text-[.75rem] font-medium text-sub-1">
                    {recipe.name}
                  </h2>
                  <p className="font-spoqa-sans text-[.625rem] text-brown opacity-50">
                    {recipe.views} views
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="font-spoqa-sans text-[.625rem] text-brown">{recipe.author.name}</p>
                  <HeartIcon className="ml-4 h-[.6119rem] w-[.6875rem]" />
                  <p className="ml-1 font-poppins text-[.75rem] font-light text-brown">
                    {recipe.like}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation />
    </main>
  );
}
