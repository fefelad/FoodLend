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
        <div className={styles.link_back}>
          <Link to="/recipes" className={styles.backButton}>
            <p className={styles.back_toRecipes}> Назад к рецептам</p>
          </Link>
        </div>

        <h1 className={styles.title_desc}>{recipe.description}</h1>
        <div className={styles.wrapper_reicpes}>
          <div>
            <img
              width={840}
              height={600}
              src={recipe.img}
              alt={recipe.description}
              className={styles.recipeImage}
            />
          </div>
          <div className={styles.nutrition_information}>
            <h2 className={styles.title_information}>Nutrition Information</h2>
            <div className={styles.wrapper_info__recipes}>
              <p className={styles.recipe_calories}>Calories</p>
              <p className={styles.recipe_desc}>
                {recipe.nutrition.calories} kcal
              </p>
            </div>
            <div className={styles.wrapper_info__recipes}>
              <p className={styles.recipe_Total_Fat}>Total Fat</p>
              <p className={styles.recipe_desc}>
                {recipe.nutrition.totalFat} g
              </p>
            </div>
            <div className={styles.wrapper_info__recipes}>
              <p className={styles.recipe_protein}>Protein</p>
              <p className={styles.recipe_desc}>{recipe.nutrition.protein} g</p>
            </div>
            <div className={styles.wrapper_info__recipes}>
              <p className={styles.recipe_arbohydrate}>Carbohydrate</p>
              <p className={styles.recipe_desc}>
                {recipe.nutrition.carbohydrates} g
              </p>
            </div>
            <div className={styles.wrapper_info__recipes}>
              <p className={styles.recipe_Cholesterol}>Cholesterol</p>
              <p className={styles.recipe_desc}>
                {recipe.nutrition.cholesterol} mg
              </p>
            </div>

            <div>
              <p className={styles.text_about}>
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;


