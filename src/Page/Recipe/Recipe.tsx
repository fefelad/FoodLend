import RecipeDetail from "../../components/RecipesPageComponents/RecipeDetail/RecipeDetail";
import SerchRecipes from "../../components/RecipesPageComponents/SerchRecipes/SerchRecipes";
import styles from "./Recipe.module.css";
import { Routes, Route } from "react-router-dom";

function Recipe() {
  return (
    <div className={styles.recipe_wrapper}>
      <Routes>
        <Route path="/" element={<SerchRecipes />} />
        <Route path="/:recipeId" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default Recipe;


