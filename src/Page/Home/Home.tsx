import Action from "../../components/HomePageComponents/Action/Action";
import Categories from "../../components/HomePageComponents/Categories/Categories";
import FastRecipes from "../../components/HomePageComponents/FastRecipes/FastRecipes";
import InstagramPost from "../../components/HomePageComponents/InstagramPost/InstagramPost";
import Promo from "../../components/HomePageComponents/Promo/Promo";
import Subscribe from "../../components/HomePageComponents/Subscribe/Subscribe";
import TestRecipes from "../../components/HomePageComponents/TestRecipes/TestRecipes";

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


