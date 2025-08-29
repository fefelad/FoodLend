import { Link, useParams } from "react-router-dom";
import styles from "./RecipeDetail.module.css";
import { recipesData } from "../../../mocks/handlers";

function RecipeDetail() {
  const { recipeId } = useParams<{ recipeId: string }>();

  const recipe = recipesData.recipes.find(
    (findRecipes) => findRecipes.id === parseInt(recipeId || "")
  );

  if (!recipe) {
    return (
      <div className={styles.notFound}>
        <h2>Рецепт не найден</h2>
        <Link to="/recipes">Вернуться к рецептам</Link>
      </div>
    );
  }
  return (
    <div className={styles.recipeDetail_wraper}>
      <div className={styles.recipeDetail}>
        <Link to="/recipes" className={styles.backButton}>
          ← Назад к рецептам
        </Link>

        <div className={styles.recipeContent}>
          <img
            src={recipe.img}
            alt={recipe.description}
            className={styles.recipeImage}
          />

          <div className={styles.recipeInfo}>
            <h1>{recipe.description}</h1>
            <p className={styles.category}>Категория: {recipe.helpatribut}</p>

            <div className={styles.nutritionSection}>
              <h2>Пищевая ценность</h2>
              <div className={styles.nutritionGrid}>
                <div className={styles.nutritionItem}>
                  <span>Калории:</span>
                  <strong>{recipe.nutrition.calories} kcal</strong>
                </div>
                <div className={styles.nutritionItem}>
                  <span>Жиры:</span>
                  <strong>{recipe.nutrition.totalFat}g</strong>
                </div>
                <div className={styles.nutritionItem}>
                  <span>Белки:</span>
                  <strong>{recipe.nutrition.protein}g</strong>
                </div>
                <div className={styles.nutritionItem}>
                  <span>Углеводы:</span>
                  <strong>{recipe.nutrition.carbohydrates}g</strong>
                </div>
                <div className={styles.nutritionItem}>
                  <span>Холестерин:</span>
                  <strong>{recipe.nutrition.cholesterol}mg</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
