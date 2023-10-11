'use client';

import ImageWithFallback from '@/components/ImageWithFallback';
import { getRecipeById } from '@/lib/api/recipe';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

interface RecipeDetailProps {
  id: string;
  initialRecipe: Recipe;
}

export default function RecipeDetail({ id, initialRecipe }: RecipeDetailProps) {
  const { data: recipe } = useQuery(['recipe', id], () => getRecipeById(id), {
    initialData: initialRecipe,
  });

  return (
    <main className="flex flex-col scrollbar-hide">
      <div className="relative h-[25rem] w-full">
        <ImageWithFallback
          priority
          src={recipe?.thumbnail}
          height={800}
          width={800}
          alt=""
          className="h-[25rem] w-full object-cover"
        />
      </div>

      <div className="p-[1.25rem]">
        <h1 className="font-spoqa-sans text-[1.625rem] font-bold text-sub-1">{recipe?.name}</h1>
        <p className="mt-[.625rem] font-spoqa-sans text-[.875rem] text-sub-1">
          {recipe?.description}
        </p>
      </div>

      <div className="h-[.375rem] w-full bg-brown opacity-10" />

      <div className="p-[1.25rem]">
        <h2 className="font-spoqa-sans text-[1.1875rem] font-bold text-sub-1">재료를 체크하세요</h2>
        <div className="mt-[1rem] flex flex-col">
          {recipe?.ingredient_requirements.map((ingredient, index) => (
            <div
              key={index}
              className="flex h-[2.125rem] items-center justify-between border-b-[.0625rem] border-b-brown px-[.625rem] last:border-none"
            >
              <p className="font-spoqa-sans text-[.875rem] font-medium text-sub-1">
                {ingredient.name}
              </p>
              <p className="font-spoqa-sans text-[.875rem] font-medium text-sub-1">
                {ingredient.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[.375rem] w-full bg-brown opacity-10" />

      <div className="bg-bg p-[1.25rem]">
        <h2 className="font-spoqa-sans text-[1.1875rem] font-bold text-sub-1">이렇게 요리해요</h2>
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
                alt=""
              />
              <p className="font-spoqa-sans text-[.875rem] font-medium text-sub-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
