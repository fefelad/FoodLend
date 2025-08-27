import Action from "../../components/Action/Action";
import Categories from "../../components/Categories/Categories";
import FastRecipes from "../../components/FastRecipes/FastRecipes";
import InstagramPost from "../../components/InstagramPost/InstagramPost";
import Promo from "../../components/Promo/Promo";
import Subscribe from "../../components/Subscribe/Subscribe";
import TestRecipes from "../../components/TestRecipes/TestRecipes";

import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Action />
      <Categories />
      <TestRecipes />
      <Promo />
      <InstagramPost />
      <FastRecipes />
      <Subscribe />
    </div>
  );
}

export default Home;
