import { http, HttpResponse } from "msw";
// категории
import breakfast from "../assets/Categories/Breakfast.png";
import vegan from "../assets/Categories/vegan.png";
import meat from "../assets/Categories/Meat.png";
import dessert from "../assets/Categories/desert.png";
import lunch from "../assets/Categories/lunch.png";
import chocolate from "../assets/Categories/chocolate.png";
import type {
  CategoriesType,
  ReceptType,
  InstaPost,
} from "../shared/types/MocyCategory";
// Рецепты
import burger from "../assets/simpleRecipes/burger.png";
import salmon from "../assets/simpleRecipes/salmon.png";
import pancake from "../assets/simpleRecipes/pancake.png";
import salad from "../assets/simpleRecipes/salad.png";
import meatbol from "../assets/simpleRecipes/metabols.png";
import bluebery from "../assets/simpleRecipes/bluebery.png";
import chicken from "../assets/simpleRecipes/chicken.png";
import pasta from "../assets/simpleRecipes/pasta.png";
// инста посты
import saladInsta from "../assets/InstaPost/saladInsta.png";
import pancakeInsta from "../assets/InstaPost/pancakeInsta.png";
import onionInsta from "../assets/InstaPost/onionInsta.png";
import meatInsta from "../assets/InstaPost/MeatInsta.png";

const categories: CategoriesType[] = [
  {
    id: 1,
    name: "Breakfast",
    img: breakfast,
    bgColor:
      "linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%);",
  },
  {
    id: 2,
    name: "Vegan",
    img: vegan,
    bgColor:
      "linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%);",
  },
  {
    id: 3,
    name: "Meat",
    img: meat,
    bgColor:
      "linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%);",
  },
  {
    id: 4,
    name: "Dessert",
    img: dessert,
    bgColor:
      "linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%);",
  },
  {
    id: 5,
    name: "Lunch",
    img: lunch,
    bgColor:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);",
  },
  {
    id: 6,
    name: "Chocolate",
    img: chocolate,
    bgColor:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);",
  },
];

const simpeRecipes: ReceptType[] = [
  {
    id: 1,
    description: "Big and Juicy Wagyu Beef Cheeseburger",
    img: burger,
    helpatribut: "Snack",
  },
  {
    id: 2,
    description: "Fresh Lime Roasted Salmon with Ginger Sauce",
    img: salmon,
    helpatribut: "Fish",
  },
  {
    id: 3,
    description: "Strawberry Oatmeal Pancake with Honey Syrup",
    img: pancake,
    helpatribut: "Breakfast",
  },
  {
    id: 4,
    description: "Fresh and Healthy Mixed Mayonnaise Salad",
    img: salad,
    helpatribut: "Healthy",
  },
  {
    id: 5,
    description: "Chicken Meatballs with Cream Cheese",
    img: meatbol,
    helpatribut: "Meat",
  },
  {
    id: 6,
    description: "Fruity Pancake with Orange & Blueberry",
    img: bluebery,
    helpatribut: "Sweet",
  },
  {
    id: 7,
    description: "The Best Easy One Pot Chicken and Rice",
    img: chicken,
    helpatribut: "Snack",
  },
  {
    id: 8,
    description: "The Creamiest Creamy Chicken and Bacon Pasta",
    img: pasta,
    helpatribut: "Noodles",
  },
];

const InstaPost: InstaPost[] = [
  {
    id: 1,
    title:
      "The vegetables dishes need to have certain vitamin for those people",
    img: saladInsta,
    plase: "Tokyo, Japan",
    data: "September 19",
  },
  {
    id: 2,
    title:
      "Sweet food can bring someon into happiness as long as they don’t eat to much",
    img: pancakeInsta,
    plase: "Tokyo, Japan",
    data: "September 19",
  },
  {
    id: 3,
    title:
      "What are you doing before start cooking? prepare the  tools or ingredients?",
    img: onionInsta,
    plase: "Tokyo, Japan",
    data: "September 19",
  },
  {
    id: 4,
    title:
      " Steak never be wrong, it’s suitable for you who want romantic dinner",
    img: meatInsta,
    plase: "Tokyo, Japan",
    data: "September 19",
  },
  {
    id: 5,
    title:
      "Garlic shrimp never be wrong. It’s for you who want a luxurious dinner in 15 minutes",
    img: meatInsta,
    plase: "Tokyo, Japan",
    data: "September 19",
  },
  {
    id: 6,
    title:
      "Grilled vegetables never be wrong. It’s for you who want a taste of summer on your plate",
    img: onionInsta,
    plase: "Tokyo, Japan",
    data: "September 19",
  },
  {
    id: 7,
    title:
      "The vegetables dishes need to have certain vitamin for those people",
    img: saladInsta,
    plase: "Tokyo, Japan",
    data: "September 19",
  },
];

export const handlers = [
  http.get("/api/caregories", () => {
    return HttpResponse.json(categories);
  }),

  http.get("api/simpeRecipes", () => {
    return HttpResponse.json(simpeRecipes);
  }),

  http.get("api/InstaPost", ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "4");

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = InstaPost.slice(startIndex, endIndex);

    return HttpResponse.json({
      posts: paginatedPosts,
      total: InstaPost.length,
      page,
      limit,
      hasMore: endIndex < InstaPost.length,
    });
  }),
];
