'use client';

import ImageWithFallback from '@/components/ImageWithFallback';
import { getRecipeById } from '@/lib/api/recipe';
import { BackIcon } from '@/svgs';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import RecipeStepView from './step/RecipeStepView';

interface RecipeDetailProps {
  id: string;
}

export default function RecipeDetail({ id }: RecipeDetailProps) {
  const { data: recipe } = useQuery(['recipe', id], () => getRecipeById(id));
  const router = useRouter();

  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'setSafeMode', payload: 'none' }),
      );
    }
  }, []);

  return (
    <main className="flex flex-col scrollbar-hide">
      <div
        className="absolute left-[1rem] top-[2rem] flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-full bg-white"
        onClick={() => router.back()}
      >
        <BackIcon className="h-[1.0625rem] w-[.5313rem]" />
      </div>

      <ImageWithFallback
        priority
        src={recipe?.thumbnail}
        height={800}
        width={800}
        className="aspect-[800/600] w-full object-cover"
      />

      <div className="p-[1.25rem]">
        <h1 className="font-notoSans text-[1.625rem] font-bold text-sub-1">{recipe?.name}</h1>
        <p className="mt-[.625rem] font-notoSans text-[.875rem] text-sub-1">
          {recipe?.description}
        </p>
      </div>

      <div className="h-[.375rem] w-full bg-brown opacity-10" />

      <div className="p-[1.25rem]">
        <div className="flex items-center justify-between">
          <h2 className="font-notoSans text-[1.1875rem] font-bold text-sub-1">재료를 체크하세요</h2>
          <button className="cursor-pointer rounded-md border-[.0625rem] border-[#CDC1B2] px-2 text-sub-1">
            계량 안내
          </button>
        </div>
        <div className="mt-[1rem] flex flex-col">
          {recipe?.ingredient_requirements.map((ingredient, index) => (
            <div
              key={index}
              className="flex h-[2.125rem] items-center justify-between border-b-[.0625rem] border-b-brown px-[.625rem] last:border-none"
            >
              <p className="font-notoSans text-[.875rem] font-medium text-sub-1">
                {ingredient.name}
              </p>
              <p className="font-notoSans text-[.875rem] font-medium text-sub-1">
                {ingredient.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[.375rem] w-full bg-brown opacity-10" />

      <div className="bg-bg p-[1.25rem]">
        <div className="flex items-center justify-between">
          <h2 className="font-notoSans text-[1.1875rem] font-bold text-sub-1">이렇게 요리해요</h2>
          <button
            className="cursor-pointer rounded-md border-[.0625rem] border-[#CDC1B2] px-2 text-sub-1"
            onClick={() => router.push(`${id}/step`)}
          >
            조리과정 크게 보기
          </button>
        </div>
        <div className="flex flex-col">
          {recipe?.recipe_steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-[1.5rem] border-b-[.0625rem] border-b-brown py-[.75rem] last:border-none"
            >
              <ImageWithFallback
                src={step.images[0]}
                width={560}
                height={432}
                className="aspect-[70/54] w-[20%] shrink-0 object-cover"
              />
              <p className="font-notoSans text-[.875rem] font-medium text-sub-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
