import { useEffect, useState } from "react";
import Input from "../../../shared/ui/Input/Input";
import styles from "./SerchRecipes.module.css";
import type { Recipe, RecipesData } from "../../../shared/types/MocyCategory";
import axios from "axios";
import HelpAtribut from "../../../shared/ui/HelpAtribut/HelpAtribut";

function SerchRecipes() {
  const [RecipesData, setRecipeData] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAtribut, setSelectedAtribut] = useState<string | null>(null);

  const FechRecipesData = async () => {
    try {
      setLoading(loading);
      const response = await axios.get<RecipesData>("api/recipesData");
      setRecipeData(response.data.recipes);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(!loading);
    }
  };

  useEffect(() => {
    FechRecipesData();
  }, []);

  const AtributeRecipes = [
    ...new Set(RecipesData.map((recipe) => recipe.helpatribut)),
  ];

  const handleAttributeClick = (atribute: string) => {
    if (selectedAtribut === atribute) {
      setSelectedAtribut(null);
    } else {
      setSelectedAtribut(atribute);
    }
  };

  const FilterAtrubute = selectedAtribut
    ? RecipesData.filter((recipe) => recipe.helpatribut === selectedAtribut)
    : RecipesData;

  if (loading) return <div>Загрузка рецептов...</div>;
  return (
    <div className={styles.SerchRecipes_wrapper}>
      <div className={styles.atribute_header}>
        <div className={styles.wrapper_atribute}>
          {AtributeRecipes.map((atribute) => (
            <div key={atribute}>
              <button
                onClick={() => handleAttributeClick(atribute)}
                className={styles.atribute_btn}
              >
                {atribute}
              </button>
            </div>
          ))}
        </div>
        <Input />
      </div>

      <div className={styles.allRecipes}>
        {FilterAtrubute.map((recipes) => (
          <div className={styles.recipes_all} key={recipes.id}>
            <img className={styles.recipes_img} src={recipes.img} alt="#" />
            <p className={styles.recipe_desc}>{recipes.description}</p>
            <div className={styles.atribute}>
              <HelpAtribut text="30 Minutes" type="time" />
              <HelpAtribut text={recipes.helpatribut} type="meat" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SerchRecipes;
