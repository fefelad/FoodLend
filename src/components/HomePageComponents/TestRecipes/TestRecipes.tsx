import { useEffect, useState } from "react";
import styles from "./TestRecipes.module.css";
import type { ReceptType } from "../../../shared/types/MocyCategory";
import axios from "axios";
import HelpAtribut from "../../../shared/ui/HelpAtribut/HelpAtribut";
import Like from "../../../shared/ui/Like/Like";

function TestRecipes() {
  const [recipes, setRecipes] = useState<ReceptType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const FechRecipes = async () => {
    try {
      setIsLoading(isLoading);
      const response = await axios.get("api/simpeRecipes");
      setRecipes(response.data);
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    FechRecipes();
  }, []);

  return (
    <div className={styles.recipes_wrapper}>
      <h3 className={styles.recpes_title}>Simple and tasty recipes</h3>
      <p className={styles.recipes_decription}>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut <br /> labore et dolore magna aliqut enim ad minim
      </p>
      <div className={styles.recipes_grid}>
        {recipes.map((recipes) => (
          <div className={styles.recipes_article} key={recipes.id}>
            <img src={recipes.img} alt="img" />
            <p className={styles.recipes_desc}>{recipes.description}</p>
            <div className={styles.recipes_help}>
              <HelpAtribut type="time" text="30 Minutes" />
              <HelpAtribut type="meat" text={recipes.helpatribut} />
            </div>
            <Like recipeid={recipes.id} recipeData={recipes} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestRecipes;


