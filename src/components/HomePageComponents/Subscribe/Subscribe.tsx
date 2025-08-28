import styles from "./Subscribe.module.css";

import salat from "../../../assets/subscribe/salad.png";
import eda from "../../../assets/subscribe/eda.png";
import Btn from "../../../shared/ui/Btn/Btn";
function Subscribe() {
  return (
    <div className={styles.Subscribe_wrapper}>
      <div className={styles.wrapper_text_header}>
        <h5 className={styles.Subscribe_title}>Deliciousness to your inbox</h5>
        <p className={styles.Subscribe_desc}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor <br /> incididunt ut labore et dolore magna aliqut enim ad
          minim
        </p>

        <div className={styles.link_subscribe}>
          <input
            className={styles.input}
            placeholder="Your email address..."
            type="text"
          />
          <Btn textBtn="Subscribe" />
        </div>
      </div>

      <img className={styles.salates} src={salat} alt="" />
      <img className={styles.eda} src={eda} alt="" />
    </div>
  );
}

export default Subscribe;
