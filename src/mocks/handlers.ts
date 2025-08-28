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
  FastPost,
  RecipesData,
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

// фаст рецепты
import fruitsalad from "../assets/FastRecipes/fuitssalad.png";
import cheseburger from "../assets/FastRecipes/cheeseburger.png";
import asparagus from "../assets/FastRecipes/Asparagus.png";
import taco from "../assets/FastRecipes/taco.png";
import chickensalad from "../assets/FastRecipes/ChickenSalad.png";
import sandwich from "../assets/FastRecipes/sandwitch.png";
import veganLettuce from "../assets/FastRecipes/VeganLettuce.png";
import soup from "../assets/FastRecipes/soup.png";

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
      "Grilled vegetables never be wrong. It’s for you who want a taste of summer",
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

const FastPost: FastPost[] = [
  {
    id: 1,
    description: "Mixed Tropical Fruit Salad with Superfood Boosts ",
    img: fruitsalad,
    helpatribut: "Healthy",
  },
  {
    id: 2,
    description: "Big and Juicy Wagyu Beef Cheeseburger",
    img: cheseburger,
    helpatribut: "Western",
  },
  {
    id: 3,
    description: "Healthy Japanese Fried Rice with Asparagus",
    img: asparagus,
    helpatribut: "Healthy",
  },
  {
    id: 4,
    description: "Cauliflower Walnut Vegetarian Taco Meat",
    img: taco,
    helpatribut: "Eastern",
  },
  {
    id: 5,
    description: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    img: chickensalad,
    helpatribut: "Healthy",
  },
  {
    id: 6,
    description: "Barbeque Spicy Sandwiches with Chips ",
    img: sandwich,
    helpatribut: "Snack",
  },
  {
    id: 7,
    description: "Firecracker Vegan Lettuce Wraps - Spicy! ",
    img: veganLettuce,
    helpatribut: "Seafood",
  },
  {
    id: 8,
    description: "Chicken Ramen Soup with Mushroom ",
    img: soup,
    helpatribut: "Japanese",
  },
];

const recipesData: RecipesData = {
  recipes: [
    {
      id: 1,
      description: "Big and Juicy Wagyu Beef Cheeseburger",
      img: burger,
      helpatribut: "Snack",
      nutrition: {
        calories: 780,
        totalFat: 48,
        protein: 42,
        carbohydrates: 38,
        cholesterol: 145,
      },
    },
    {
      id: 2,
      description: "Fresh Lime Roasted Salmon with Ginger Sauce",
      img: salmon,
      helpatribut: "Fish",
      nutrition: {
        calories: 320,
        totalFat: 18,
        protein: 34,
        carbohydrates: 6,
        cholesterol: 85,
      },
    },
    {
      id: 3,
      description: "Strawberry Oatmeal Pancake with Honey Syrup",
      img: pancake,
      helpatribut: "Breakfast",
      nutrition: {
        calories: 280,
        totalFat: 8,
        protein: 9,
        carbohydrates: 45,
        cholesterol: 65,
      },
    },
    {
      id: 4,
      description: "Fresh and Healthy Mixed Mayonnaise Salad",
      img: salad,
      helpatribut: "Healthy",
      nutrition: {
        calories: 180,
        totalFat: 12,
        protein: 6,
        carbohydrates: 15,
        cholesterol: 25,
      },
    },
    {
      id: 5,
      description: "Chicken Meatballs with Cream Cheese",
      img: meatbol,
      helpatribut: "Meat",
      nutrition: {
        calories: 320,
        totalFat: 22,
        protein: 24,
        carbohydrates: 8,
        cholesterol: 95,
      },
    },
    {
      id: 6,
      description: "Fruity Pancake with Orange & Blueberry",
      img: bluebery,
      helpatribut: "Sweet",
      nutrition: {
        calories: 210,
        totalFat: 5,
        protein: 7,
        carbohydrates: 36,
        cholesterol: 45,
      },
    },
    {
      id: 7,
      description: "The Best Easy One Pot Chicken and Rice",
      img: chicken,
      helpatribut: "Snack",
      nutrition: {
        calories: 420,
        totalFat: 14,
        protein: 32,
        carbohydrates: 45,
        cholesterol: 88,
      },
    },
    {
      id: 8,
      description: "The Creamiest Creamy Chicken and Bacon Pasta",
      img: pasta,
      helpatribut: "Noodles",
      nutrition: {
        calories: 560,
        totalFat: 26,
        protein: 28,
        carbohydrates: 52,
        cholesterol: 75,
      },
    },
    {
      id: 9,
      description: "Mixed Tropical Fruit Salad with Superfood Boosts",
      img: fruitsalad,
      helpatribut: "Healthy",
      nutrition: {
        calories: 120,
        totalFat: 1,
        protein: 3,
        carbohydrates: 28,
        cholesterol: 0,
      },
    },
    {
      id: 10,
      description: "Big and Juicy Wagyu Beef Cheeseburger",
      img: cheseburger,
      helpatribut: "Western",
      nutrition: {
        calories: 820,
        totalFat: 52,
        protein: 45,
        carbohydrates: 42,
        cholesterol: 155,
      },
    },
    {
      id: 11,
      description: "Healthy Japanese Fried Rice with Asparagus",
      img: asparagus,
      helpatribut: "Healthy",
      nutrition: {
        calories: 280,
        totalFat: 9,
        protein: 12,
        carbohydrates: 38,
        cholesterol: 35,
      },
    },
    {
      id: 12,
      description: "Cauliflower Walnut Vegetarian Taco Meat",
      img: taco,
      helpatribut: "Eastern",
      nutrition: {
        calories: 190,
        totalFat: 14,
        protein: 8,
        carbohydrates: 12,
        cholesterol: 0,
      },
    },
    {
      id: 13,
      description: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
      img: chickensalad,
      helpatribut: "Healthy",
      nutrition: {
        calories: 240,
        totalFat: 12,
        protein: 22,
        carbohydrates: 14,
        cholesterol: 55,
      },
    },
    {
      id: 14,
      description: "Barbeque Spicy Sandwiches with Chips",
      img: sandwich,
      helpatribut: "Snack",
      nutrition: {
        calories: 380,
        totalFat: 16,
        protein: 18,
        carbohydrates: 42,
        cholesterol: 45,
      },
    },
    {
      id: 15,
      description: "Firecracker Vegan Lettuce Wraps - Spicy!",
      img: veganLettuce,
      helpatribut: "Seafood",
      nutrition: {
        calories: 95,
        totalFat: 3,
        protein: 6,
        carbohydrates: 14,
        cholesterol: 0,
      },
    },
    {
      id: 16,
      description: "Chicken Ramen Soup with Mushroom",
      img: soup,
      helpatribut: "Japanese",
      nutrition: {
        calories: 220,
        totalFat: 6,
        protein: 20,
        carbohydrates: 24,
        cholesterol: 48,
      },
    },
  ],
};

export const handlers = [
  http.get("/api/caregories", () => {
    return HttpResponse.json(categories);
  }),

  http.get("api/simpeRecipes", () => {
    return HttpResponse.json(simpeRecipes);
  }),

  http.get("api/FastPost", () => {
    return HttpResponse.json(FastPost);
  }),

  http.get("api/recipesData", () => {
    return HttpResponse.json(recipesData);
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
