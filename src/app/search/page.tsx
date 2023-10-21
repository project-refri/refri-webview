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
    limit: 10,
    sort: searchParams.sort,
  });

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: '리프리 "' + searchParams.searchQuery + '" 검색 결과',
    openGraph: {
      title: '리프리 "' + searchParams.searchQuery + '" 검색 결과',
      images: recipes.count
        ? [recipes.results[0].thumbnail, ...previousImages]
        : [...previousImages],
    },
  };
}

export default async function Page({ searchParams }: Props) {
  return <RecipeSearch searchQuery={searchParams.searchQuery} sort={searchParams.sort} />;
}
