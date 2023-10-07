'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { mockRecipe1 } from '@/mocks/mockRecipe';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function RecipeDetail() {
  const pathname = usePathname().split('/').pop();

  return (
    <main className="flex flex-col scrollbar-hide">
      <div className="relative h-[25rem] w-full">
        <Image
          src={mockRecipe1.thumbnail}
          height={400}
          width={400}
          alt=""
          className="h-[25rem] w-full object-cover"
        />
      </div>

      <div className="p-[1.25rem]">
        <h1 className="font-spoqa-sans text-[1.625rem] font-bold text-sub-1">{mockRecipe1.name}</h1>
        <p className="mt-[.625rem] font-spoqa-sans text-[.875rem] text-sub-1">
          {mockRecipe1.description}
        </p>
      </div>

      <div className="h-[.375rem] w-full bg-bg" />

      <div className="p-[1.25rem]">
        <h2 className="font-spoqa-sans text-[1.1875rem] font-bold text-sub-1">재료를 체크하세요</h2>
        <div className="mt-[1rem] flex flex-col">
          {mockRecipe1.ingredient_requirements.map((ingredient, index) => (
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

      <div className="h-[.375rem] w-full bg-bg" />

      <div className="bg-bg p-[1.25rem]">
        <h2 className="font-spoqa-sans text-[1.1875rem] font-bold text-sub-1">이렇게 요리해요</h2>
        <div className="flex flex-col">
          {mockRecipe1.recipe_steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-[1.5rem] border-b-[.0625rem] border-b-brown py-[.75rem] last:border-none"
            >
              <Image
                src={step.images[0]}
                width={70}
                height={54}
                className="aspect-[70/54] w-[20%] object-cover"
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
