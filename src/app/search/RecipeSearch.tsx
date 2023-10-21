'use client';

import { SearchParams, searchRecipes } from '@/lib/api/recipe';
import { useInfiniteQuery } from '@tanstack/react-query';
import { twMerge } from 'tailwind-merge';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowDownIcon, BackIcon, SearchIcon, SortIcon } from '@/svgs';
import ImageWithFallback from '@/components/ImageWithFallback';
import useOnclickOutside from 'react-cool-onclickoutside';
import { match } from 'ts-pattern';
import qs from 'qs';

interface Props {
  searchQuery: string;
  sort?: SearchParams['sort'];
}

function RecipeSearch({ searchQuery, sort }: Props) {
  const searchParam = { searchQuery, page: 1, limit: 10, sort: sort || 'RELEVANCE' };
  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery(
    ['search', searchQuery, sort],
    ({ pageParam = searchParam }) => {
      return searchRecipes(pageParam);
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.has_next ? { ...searchParam, page: lastPage.page + 1 } : undefined;
      },
    },
  );
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const clickAwayRef = useOnclickOutside(() => setOpenFilter(false));
  const { ref: bottomRef, inView } = useInView();
  const router = useRouter();

  const handleSearch = ({
    searchQuery,
    sort,
  }: {
    searchQuery?: string | null;
    sort?: SearchParams['sort'] | null;
  }) => {
    if (!searchQuery && !sort) router.push('/search');
    else router.push(`/search?${qs.stringify({ searchQuery, sort })}`);
  };

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, data]);

  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'setSafeMode', payload: 'all' }),
      );
    }
  }, []);

  return (
    <main className="flex flex-col overflow-scroll pb-[5.375rem] pt-[6.5rem] scrollbar-hide">
      {/* 헤더 */}
      <div className="fixed top-0 z-50 flex h-[6.5rem] w-full max-w-[80rem] flex-col items-center justify-between bg-bg px-[1.25rem] pb-[.625rem] pt-[1rem]">
        <p
          className="cursor-pointer font-spoqa-sans text-[1rem] font-bold text-sub-1"
          onClick={() => handleSearch({ searchQuery: null, sort: null })}
        >
          레시피 찾기
        </p>
        <BackIcon
          className="absolute left-[1.25rem] w-[.625rem] cursor-pointer"
          onClick={() => router.back()}
        />
        <div className="flex w-full items-center gap-2">
          <input
            ref={inputRef}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch({ searchQuery: inputRef.current!.value, sort });
              }
            }}
            className="sticky top-0 h-[2.375rem] flex-1 rounded-[2.5rem] border-[.0938rem] border-sub-1 bg-transparent pl-4 font-spoqa-sans focus:border-[.125rem] focus:outline-none"
          />
          <SearchIcon
            className="h-[1.5rem] w-[1.5rem] shrink-0 cursor-pointer"
            onClick={() => handleSearch({ searchQuery: inputRef.current!.value, sort })}
          />
        </div>
      </div>

      {/* 결과 */}
      <div className="p-[1.25rem]">
        <div className="flex w-full items-center pb-[.625rem]">
          {searchQuery && (
            <p className="font-spoqa-sans text-[.75rem] text-sub-1">
              <span className="font-bold">&quot;{searchQuery}&quot;</span> 검색 결과
            </p>
          )}
          <div
            className="ignore-onclickoutside relative ml-auto flex h-[2.25rem] cursor-pointer items-center gap-[.5625rem] rounded-[2.125rem] border-[.0625rem] border-bg px-[.9375rem]"
            onClick={() => setOpenFilter(!openFilter)}
          >
            <SortIcon className="w-[.75rem]" />
            <p className="font-spoqa-sans text-[.6875rem] text-sub-1">
              {match(sort)
                .with('RELEVANCE', () => '관련 순')
                .with('CREATED_AT', () => '최신 순')
                .otherwise(() => '정렬하기')}
            </p>
            <ArrowDownIcon className="w-[.75rem]" />
            {openFilter ? (
              <div
                className="absolute right-0 top-[2.5rem] z-30 flex w-full flex-col rounded-[.3125rem] bg-white shadow-shadow-1"
                ref={clickAwayRef}
              >
                <div
                  className="cursor-pointer border-b-[.0625rem] border-sub-3 px-[1.5625rem] py-1 font-spoqa-sans text-[.75rem] text-sub-1 last:border-none"
                  onClick={() => {
                    handleSearch({ searchQuery, sort: 'RELEVANCE' });
                  }}
                >
                  관련 순
                </div>
                <div
                  className="cursor-pointer border-b-[.0625rem] border-sub-3 px-[1.5625rem] py-1 font-spoqa-sans text-[.75rem] text-sub-1 last:border-none"
                  onClick={() => {
                    handleSearch({ searchQuery, sort: 'CREATED_AT' });
                  }}
                >
                  최신 순
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-[.625rem] gap-y-[1.25rem] md:grid-cols-3 lg:grid-cols-4">
          {data?.pages.map((page) =>
            page.results.map((recipe) => (
              <div
                key={recipe.id}
                className="flex-1 cursor-pointer rounded-[.3125rem] rounded-tl-[1rem] border-[.0625rem] border-[#DDD2C5]"
                onClick={() => router.push(`/recipe/${recipe.id}`)}
              >
                <ImageWithFallback
                  priority
                  src={recipe?.thumbnail}
                  height={200}
                  width={200}
                  className="aspect-[170/130] w-full rounded-tl-[1rem] rounded-tr-[.3125rem] object-cover"
                />
                <p className="mx-[.9375rem] my-[.625rem] line-clamp-2 h-[2.25rem] font-spoqa-sans text-[.75rem] font-medium text-sub-1">
                  {recipe.name}
                </p>
              </div>
            )),
          )}
        </div>
      </div>
      <button
        ref={bottomRef}
        className={twMerge('', !hasNextPage && 'invisible')}
        onClick={() => fetchNextPage()}
      >
        {isFetching ? '로딩중' : '더 보기'}
      </button>
    </main>
  );
}

export default RecipeSearch;
