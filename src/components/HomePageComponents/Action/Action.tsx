import styles from "./Action.module.css";
import note from "../../../assets/note.png";
import HelpAtribut from "../../../shared/ui/HelpAtribut/HelpAtribut";
import Btn from "../../../shared/ui/Btn/Btn";
import people from "../../../assets/people.png";
import chikenwing from "../../../assets/Chicken_wings.png";

function Action() {
  return (
    <div className={styles.slider_wrapper}>
      <div className={styles.info_box}>
        <div className={styles.info_recipes}>
          <img src={note} alt="note" />
          <p className={styles.recipes_text}>Hot Recipes</p>
        </div>
        <div className={styles.info_box_text}>
          <h1 className={styles.text_h1}>
            Spicy delicious <br /> chicken wings
          </h1>
          <p className={styles.text_description}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            <br />
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>

          <div className={styles.atribute_wrapper}>
            <HelpAtribut type="time" text="30 Minutes" />
            <HelpAtribut type="meat" text="Chiken" />
          </div>

          <div className={styles.people_action}>
            <div className={styles.people_info}>
              <img
                className={styles.people_img}
                src={people}
                alt="people_img"
              />
              <div className={styles.people_profile}>
                <p className={styles.people_name}>John Smith</p>
                <p className={styles.poeple_data}>15 March 2022</p>
              </div>
            </div>
            <Btn textBtn="View Recipes" img="play" />
          </div>
        </div>
      </div>
      <div>
        <img src={chikenwing} alt="chiken" />
      </div>
    </div>
  );
}

export default Action;
