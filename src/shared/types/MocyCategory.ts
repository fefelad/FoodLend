export interface CategoriesType {
  id?: number;
  name?: string;
  img?: string;
  bgColor: string;
}

export interface ReceptType {
  id?: number;
  description?: string;
  img: string;
  helpatribut: string;
}

export interface InstaPost {
  id?: number;
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
  id?: number;
  description?: string;
  img: string;
  helpatribut: string;
}
