import axiosInstance from './client';
import qs from 'qs';

const getRecipeById = async (id: string) => (await axiosInstance.get(`/recipe/${id}`)) as Recipe;

const getTopViewedRecipes = async () => (await axiosInstance.get('/recipe/top-viewed')) as Recipe[];

export type SearchParams = {
  searchQuery: string;
  page: number | string;
  limit: number | string;
  sort?: 'RELEVANCE' | 'CREATED_AT' | 'UPDATED_AT';
};

const searchRecipes = async ({ searchQuery, page, limit, sort }: SearchParams) =>
  (await axiosInstance.get(
    `/recipe/search?${qs.stringify({ searchQuery, page, limit, sort })}`,
  )) as SearchResult;

export { getRecipeById, searchRecipes, getTopViewedRecipes };
