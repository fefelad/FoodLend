import styles from "./Header.module.css";

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
      <div className={styles.wrapper_link}></div>
    </header>
  );
}

export default Header;
