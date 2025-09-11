import { useEffect, useState } from "react";
import styles from "./FastRecipes.module.css";
import type { FastPost } from "../../../shared/types/MocyCategory";
import axios from "axios";
import Like from "../../../shared/ui/Like/Like";
import HelpAtribut from "../../../shared/ui/HelpAtribut/HelpAtribut";

function FastRecipes() {
  const [FastRecipes, setFastRecipes] = useState<FastPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const FechFastRecipes = async () => {
    try {
      setLoading(loading);
      const response = await axios.get("api/FastPost");
      setFastRecipes(response.data);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(!loading);
    }
  };

  useEffect(() => {
    FechFastRecipes();
  }, []);
  return (
    <div className={styles.FastRecipes_wrapper}>
      <div className={styles.header_titel}>
        <h5 className={styles.title_header}>
          Try this delicious recipe <br /> to make your day
        </h5>
        <p className={styles.title_desc}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor <br /> incididunt ut labore et dolore magna aliqut enim ad
          minim
        </p>
      </div>

      <div className={styles.flex_fastrecipes}>
        {FastRecipes.map((fastRecipes) => (
          <article key={fastRecipes.id} className={styles.fastRecipes_article}>
            <img src={fastRecipes.img} alt="#" />
            <p className={styles.fastRecipes_text}>{fastRecipes.description}</p>
            <div className={styles.fastRecipes_atribute}>
              <HelpAtribut text="30 Minutes" type="time" />
              <HelpAtribut text={fastRecipes.helpatribut} type="meat" />
            </div>
            <div className={styles.btn_like}>
              <Like recipeid={fastRecipes.id} recipeData={fastRecipes} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default FastRecipes;


