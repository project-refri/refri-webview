'use client';
import Image from 'next/image';
import { mockHotRecipe, mockRecentRecipe } from '@/mocks/mockRecipe';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { HeartIcon, Logo, RecipeLogoIcon } from '@/svgs';
import BottomNavigation from '@/components/BottomNavigation';

export default function Recipe() {
  return (
    <main className="flex flex-col overflow-scroll pb-[5.375rem] pt-[3.75rem] scrollbar-hide">
      <div className="fixed top-0 z-50 h-[3.75rem] w-full max-w-[80rem] bg-bg px-[1.25rem] pt-[1rem]">
        <RecipeLogoIcon className="h-[1.25rem] w-[5rem]" color="#242325" />
      </div>

      <div className="px-[1.25rem] py-[1.5625rem]">
        <div className="flex items-center justify-between">
          <h1 className="font-spoqa-sans text-[1.1875rem] font-bold text-sub-1">
            이번달 인기 레시피
          </h1>
          <p className="cursor-pointer font-spoqa-sans text-[.75rem] font-medium text-brown">
            전체보기
          </p>
        </div>
        <div className="mt-4 flex h-[16.0625rem] gap-[1rem] overflow-scroll scrollbar-hide">
          {mockHotRecipe.map((recipe, index) => (
            <div
              key={index}
              className="relative flex w-[8.75rem] shrink-0 flex-col justify-end gap-[.375rem] rounded-[.3125rem] rounded-tl-[2.1875rem] bg-cover bg-center px-[.9375rem] pb-[.9375rem]"
              style={{ backgroundImage: `url(${recipe.image})` }}
            >
              <div
                className="absolute left-0 top-0 h-full w-full rounded-[.3125rem] rounded-tl-[2.1875rem]"
                style={{
                  background: 'linear-gradient(360deg, rgba(0,0,0,0.4) 0%, rgba(0,212,255,0) 60%)',
                }}
              ></div>
              <h2 className="z-10 font-spoqa-sans text-[.875rem] font-medium leading-[1.3125rem] text-white">
                {recipe.name}
              </h2>
              <p className="z-10 font-spoqa-sans text-[.625rem] leading-[1.5rem] text-white">
                {recipe.author.name}
              </p>
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
        <div className="mt-4 grid w-full gap-[1rem] md:grid-cols-2">
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
