import styles from "./Header.module.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twiter from "../../assets/twitter.svg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const IsActiveLink = (path: string) => {
    return location.pathname === path ? styles.active : "";
  };

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
            <Link className={`${styles.link} ${IsActiveLink("/")}`} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${IsActiveLink("/recipes")}`}
              to="/recipes"
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${IsActiveLink("/blog")}`}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${IsActiveLink("/contact")}`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${IsActiveLink("/about")}`}
              to="/about"
            >
              About us
            </Link>
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
