'use client';

import ImageWithFallback from '@/components/ImageWithFallback';
import { getRecipeById } from '@/lib/api/recipe';
import { BackIcon } from '@/svgs';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

interface RecipeDetailProps {
  id: string;
  initialRecipe: Recipe;
}

export default function RecipeDetail({ id, initialRecipe }: RecipeDetailProps) {
  const { data: recipe } = useQuery(['recipe', id], () => getRecipeById(id), {
    initialData: initialRecipe,
  });
  const [recipeStepViewOpen, setRecipeStepViewOpen] = useState(false);

  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'isFullScreen', payload: true }),
      );
    }
    return () => {
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({ type: 'isFullScreen', payload: false }),
        );
      }
    };
  }, []);

  return (
    <main className="flex flex-col scrollbar-hide">
      {recipeStepViewOpen ? (
        <RecipeStepView open={recipeStepViewOpen} setOpen={setRecipeStepViewOpen} recipe={recipe} />
      ) : (
        <>
          <ImageWithFallback
            priority
            src={recipe?.thumbnail}
            height={800}
            width={800}
            className="aspect-[800/600] w-full object-cover"
          />

          <div className="p-[1.25rem]">
            <h1 className="font-spoqa-sans text-[1.625rem] font-bold text-sub-1">{recipe?.name}</h1>
            <p className="mt-[.625rem] font-spoqa-sans text-[.875rem] text-sub-1">
              {recipe?.description}
            </p>
          </div>

          <div className="h-[.375rem] w-full bg-brown opacity-10" />

          <div className="p-[1.25rem]">
            <div className="flex items-center justify-between">
              <h2 className="font-spoqa-sans text-[1.1875rem] font-bold text-sub-1">
                재료를 체크하세요
              </h2>
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
            <div className="flex items-center justify-between">
              <h2 className="font-spoqa-sans text-[1.1875rem] font-bold text-sub-1">
                이렇게 요리해요
              </h2>
              <button
                className="cursor-pointer rounded-md border-[.0625rem] border-[#CDC1B2] px-2 text-sub-1"
                onClick={() => setRecipeStepViewOpen(true)}
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
                  <p className="font-spoqa-sans text-[.875rem] font-medium text-sub-1">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}

interface RecipeStepViewProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  recipe: Recipe;
}

const RecipeStepView = ({ open, setOpen, recipe }: RecipeStepViewProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#F5F5F5] scrollbar-hide">
      <div className="relative flex h-[3.75rem] items-center justify-center">
        <div
          className="absolute left-[1.25rem] flex h-[1.875rem] w-[1.875rem] items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <BackIcon className="h-[1.0625rem] w-[.5313rem]" />
        </div>
        <p className="w-[70%] truncate font-spoqa-sans text-[1.125rem] font-medium leading-[17px]">
          {recipe.name}
        </p>
        <div className="absolute bottom-0 flex w-full">
          {Array.from({ length: recipe.recipe_steps.length }).map((_, index) => (
            <div
              key={index}
              className={`h-[.125rem] flex-1 ${currentStep >= index && 'bg-brown'}`}
            />
          ))}
        </div>
      </div>
      <SwipeableViews
        style={{ flex: 1 }}
        containerStyle={{ height: '100%' }}
        index={currentStep}
        onChangeIndex={(index) => setCurrentStep(index)}
        enableMouseEvents
      >
        {recipe.recipe_steps.map((step, index) => (
          <div key={index} className="flex h-full w-full flex-col py-4">
            <ImageWithFallback
              priority
              src={step.images[0]}
              width={800}
              height={800}
              className="w-[87%] flex-1 self-end rounded-tl-[3.125rem] object-cover"
            />

            <div className="mt-[2.125rem] flex w-[87%] items-start gap-4 self-end pr-4">
              <p className="font-poppins text-[1.875rem] font-medium leading-[2rem] text-brown">
                {currentStep + 1}
              </p>
              <p className="font-spoqa-sans text-[1rem] font-medium leading-[1.625rem] text-sub-1">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </SwipeableViews>

      <div className="h-[8rem] w-full rounded-[.3125rem] rounded-tl-[1.25rem] border-[.0625rem] border-brown bg-[#F1F1E7] px-[3.125rem] pt-[1.25rem]">
        <p className="font-poppins text-[.8125rem] font-medium text-brown">How much?</p>
        <div className="grid h-full grid-cols-2 overflow-y-scroll scrollbar-hide">
          {recipe.recipe_steps[currentStep].ingredients.map((ingredient, index) => (
            <div key={index} className="mt-2 flex gap-2">
              <p className="font-spoqa-sans text-[.6875rem] font-medium text-brown">
                {ingredient.name}
              </p>
              <p className="font-spoqa-sans text-[.6875rem] font-medium text-brown">
                {ingredient.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
