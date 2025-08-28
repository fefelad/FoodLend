import SerchRecipes from "../../components/RecipesPageComponents/SerchRecipes/SerchRecipes";
import styles from "./Recipe.module.css";

function Recipe() {
  return (
    <div className={styles.recipe_wrapper}>
      <SerchRecipes />
    </div>
  );
}

export default Recipe;
