import { getRecipeById } from '@/lib/api/recipe';
import type { Metadata, ResolvingMetadata } from 'next';
import RecipeDetail from './RecipeDetail';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.id;
  const recipe = await getRecipeById(id);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: '리프리 | ' + recipe.name,
    description: recipe.description,
    openGraph: {
      title: '리프리 | ' + recipe.name,
      description: recipe.description,
      images: [recipe.thumbnail, ...previousImages],
    },
  };
}

export default async function Page({ params }: Props) {
  const initialRecipe = await getRecipeById(params.id);

  return <RecipeDetail id={params.id} initialRecipe={initialRecipe} />;
}
