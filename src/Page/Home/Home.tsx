import Action from "../../components/Action/Action";
import Categories from "../../components/Categories/Categories";

import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Action />
      <Categories />
    </div>
  );
}

export default Home;
