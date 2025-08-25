import Header from "../../components/Header/Header";
import Action from "../../components/Action/Action";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Action />
    </div>
  );
}

export default Home;
