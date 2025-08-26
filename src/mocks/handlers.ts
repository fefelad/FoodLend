import { http, HttpResponse } from "msw";
import breakfast from "../assets/Categories/Breakfast.png";
import vegan from "../assets/Categories/vegan.png";
import meat from "../assets/Categories/Meat.png";
import dessert from "../assets/Categories/desert.png";
import lunch from "../assets/Categories/lunch.png";
import chocolate from "../assets/Categories/chocolate.png";
import type { CategoriesType } from "../shared/types/MocyCategory";

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

export const handlers = [
  //  запрос - GET /api/caregories
  http.get("/api/caregories", () => {
    return HttpResponse.json(categories);
  }),
];
