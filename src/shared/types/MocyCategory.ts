export interface CategoriesType {
  id: number;
  name?: string;
  img?: string;
  bgColor: string;
}

export interface ReceptType {
  id: number;
  description?: string;
  img: string;
  helpatribut: string;
}

export interface InstaPost {
  id: number;
  title?: string;
  img?: string;
  plase?: string;
  data?: string;
}

export interface InsPostResponse {
  posts: InstaPost[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface FastPost {
  id: number;
  description?: string;
  img: string;
  helpatribut: string;
}

export interface NutritionInfo {
  calories: number;
  totalFat: number;
  protein: number;
  carbohydrates: number;
  cholesterol: number;
}

export interface Recipe {
  id: number;
  description: string;
  img: string;
  helpatribut: string;
  nutrition: NutritionInfo;
}

export interface RecipesData {
  recipes: Recipe[];
}

export interface Blog {
  id: number;
  recipeImage: string;
  title: string;
  description: string;
  author: {
    avatar: string;
    firstName: string;
    lastName: string;
  };
  publishDate: string;
  category: string;
  cookingTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
}


