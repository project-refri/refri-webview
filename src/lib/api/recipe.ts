import axiosInstance from './client';

const getRecipeById = async (id: string) => (await axiosInstance.get(`/recipe/${id}`)) as Recipe;

export { getRecipeById };
