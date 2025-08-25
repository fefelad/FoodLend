import styles from "./Header.module.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twiter from "../../assets/twitter.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.warpper_logo}>
        <p className={styles.text_logo}>
          Foodieland <span className={styles.text_logo_dot}>.</span>
        </p>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="">
              Home
            </a>
          </li>
          <li>
            <a className={styles.link} href="">
              Recipes
            </a>
          </li>
          <li>
            <a className={styles.link} href="">
              Blog
            </a>
          </li>
          <li>
            <a className={styles.link} href="">
              Contact
            </a>
          </li>
          <li>
            <a className={styles.link} href="">
              About us
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.wrapper_link}>
        <img src={facebook} alt="facebook" />
        <img src={twiter} alt="twiter" />
        <img src={instagram} alt="instagram" />
      </div>
    </header>
  );
}

export default Header;
