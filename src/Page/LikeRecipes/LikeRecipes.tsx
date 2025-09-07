import LikedRecipesList from "../../components/LikeRecipesPageComponents/LikedRecipes/LikedRecipesList";
import styles from "./LikeRecipes.module.css";

function LikeRecipes() {
  return (
    <div className={styles.about_wrapper}>
      <LikedRecipesList />
    </div>
  );
}

export default LikeRecipes;
