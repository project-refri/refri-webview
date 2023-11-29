import { SearchParams, searchRecipes } from '@/lib/api/recipe';
import type { Metadata, ResolvingMetadata } from 'next';
import RecipeSearch from './RecipeSearch';

interface Props {
  searchParams: {
    searchQuery: string;
    sort: SearchParams['sort'];
  };
}

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const recipes = await searchRecipes({
    searchQuery: searchParams.searchQuery,
    page: 1,
    limit: 1,
    sort: searchParams.sort,
  });

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: searchParams.searchQuery
      ? '리프리 "' + searchParams.searchQuery + '" 검색 결과'
      : '리프리 | 레시피 검색하기',
    openGraph: {
      title: searchParams.searchQuery
        ? '리프리 "' + searchParams.searchQuery + '" 검색 결과'
        : '리프리 | 레시피 검색하기',
      images: recipes.count
        ? [recipes.results[0].thumbnail, ...previousImages]
        : [...previousImages],
    },
  };
}

export default async function Page({ searchParams }: Props) {
  return <RecipeSearch searchQuery={searchParams.searchQuery} sort={searchParams.sort} />;
}
