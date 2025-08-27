import Btn from "../../shared/ui/Btn/Btn";
import styles from "./Promo.module.css";

import cook from "../../assets/Promo/kitchener.png";
import tomato from "../../assets/Promo/tomato.png";
import maet from "../../assets/Categories/Meat.png";
import onion from "../../assets/Promo/onion.png";
import brokal from "../../assets/Categories/vegan.png";

function Promo() {
  return (
    <div className={styles.promo_wrapper}>
      <div className={styles.promo_right_box}>
        <div className={styles.promo_text}>
          <h3 className={styles.promo_title}>
            Everyone can be a <br /> chef in their own kitchen
          </h3>
          <p className={styles.promo_desc}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut
            enim <br /> ad minim
          </p>
        </div>
        <Btn textBtn="Learn More" />
      </div>
      <div className={styles.promo_left_img}>
        <img src={cook} alt="cook" />
        <img className={styles.tomato} src={tomato} alt="tomato" />
        <img
          className={styles.meat}
          width={80}
          height={80}
          src={maet}
          alt="maet"
        />
        <img className={styles.onion} src={onion} alt="onion" />
        <img
          className={styles.brokal}
          width={80}
          height={80}
          src={brokal}
          alt="brokal"
        />
      </div>
    </div>
  );
}

export default Promo;
