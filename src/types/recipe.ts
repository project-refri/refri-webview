type Recipe = {
  id: string;
  name: string;
  description: string;
  owner: User | null;
  ingredient_requirements: {
    ingredient_id: string | null;
    name: string;
    amount: string;
  }[];
  recipe_steps: {
    description: string;
    images: string[];
    ingredients: {
      ingredient_id: string | null;
      name: string;
      amount: string;
    }[];
  }[];
  views: number;
  bookmarks: number;
  likes: number;
  thumbnail: string;
  recipe_raw_text: string;
  origin_url: string;
  created_at: string;
  updated_at: string;
};
