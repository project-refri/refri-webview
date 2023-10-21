'use client';

import ImageWithFallback from '@/components/ImageWithFallback';
import { getRecipeById } from '@/lib/api/recipe';
import { BackIcon } from '@/svgs';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

interface RecipeStepViewProps {
  id: string;
  initialRecipe: Recipe;
}

const RecipeStepView = ({ id, initialRecipe }: RecipeStepViewProps) => {
  const { data: recipe } = useQuery(['recipe', id], () => getRecipeById(id), {
    initialData: initialRecipe,
  });
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'setSafeMode', payload: 'top' }),
      );
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'setTopBackground', payload: '#F5F5F5' }),
      );
    }
    return () => {
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({ type: 'setTopBackground', payload: '#FFFFFF' }),
        );
      }
    };
  }, []);

  return (
    <main className="flex flex-col scrollbar-hide">
      <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#F5F5F5] scrollbar-hide">
        <div className="relative flex h-[3.75rem] items-center justify-center">
          <div
            className="absolute left-[1.25rem] flex h-[1.875rem] w-[1.875rem] items-center justify-center"
            onClick={() => router.back()}
          >
            <BackIcon className="h-[1.0625rem] w-[.5313rem]" />
          </div>
          <p className="w-[70%] truncate font-notoSans text-[1.125rem] font-medium leading-[17px]">
            {recipe.name}
          </p>
          <div
            className="absolute bottom-0 left-0 flex h-[.125rem] bg-brown transition-[0.5s]"
            style={{
              width: `calc(100% * (${currentStep} + 1) / ${recipe.recipe_steps.length}`,
            }}
          ></div>
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
                <p className="font-notoSans text-[1.875rem] font-medium leading-[2rem] text-brown">
                  {currentStep + 1}
                </p>
                <p className="font-notoSans text-[1rem] font-medium leading-[1.625rem] text-sub-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </SwipeableViews>

        <div className="h-[8rem] w-full rounded-[.3125rem] rounded-tl-[1.25rem] border-[.0625rem] border-brown bg-[#F1F1E7] px-[3.125rem] pt-[1.25rem]">
          <p className="font-notoSans text-[.8125rem] font-medium text-brown">How much?</p>
          <div className="mt-2 grid grid-cols-2 gap-1 overflow-y-scroll scrollbar-hide">
            {recipe.recipe_steps[currentStep].ingredients.map((ingredient, index) => (
              <div key={index} className="flex gap-2">
                <p className="shrink-0 font-notoSans text-[.6875rem] font-medium text-brown">
                  {ingredient.name}
                </p>
                <p className="font-notoSans text-[.6875rem] font-medium text-brown">
                  {ingredient.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecipeStepView;
