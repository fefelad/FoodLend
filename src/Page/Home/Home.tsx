import Action from "../../components/Action/Action";
import Categories from "../../components/Categories/Categories";
import Promo from "../../components/Promo/Promo";
import TestRecipes from "../../components/TestRecipes/TestRecipes";

import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Action />
      <Categories />
      <TestRecipes />
      <Promo />
    </div>
  );
}

export default Home;
