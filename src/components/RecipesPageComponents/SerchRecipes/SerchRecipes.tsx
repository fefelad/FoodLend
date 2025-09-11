import { useEffect, useState } from "react";
import styles from "./SerchRecipes.module.css";
import type { Recipe, RecipesData } from "../../../shared/types/MocyCategory";
import axios from "axios";
import HelpAtribut from "../../../shared/ui/HelpAtribut/HelpAtribut";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loading from "../../../shared/ui/Loading/Loading";

function SerchRecipes() {
  const [RecipesData, setRecipeData] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAtribut, setSelectedAtribut] = useState<string | null>(null);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const FechRecipesData = async () => {
    try {
      await new Promise((time) => setTimeout(time, 1500));

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [loading]);

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
      </div>

      <div>
        <AnimatePresence mode="wait">
          {showLoading ? (
            <Loading />
          ) : (
            <div className={styles.allRecipes}>
              {FilterAtrubute.map((recipes) => (
                <Link to={`/recipes/${recipes.id}`} key={recipes.id}>
                  <div className={styles.recipes_all}>
                    <img
                      className={styles.recipes_img}
                      src={recipes.img}
                      alt="#"
                    />
                    <p className={styles.recipe_desc}>{recipes.description}</p>
                    <div className={styles.atribute}>
                      <HelpAtribut text="30 Minutes" type="time" />
                      <HelpAtribut text={recipes.helpatribut} type="meat" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SerchRecipes;


