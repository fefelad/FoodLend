import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.link_footer}>
        <div className={styles.logo}>
          <p className={styles.logo_text}>
            Foodieland <span className={styles.logo_text_dot}>.</span>
          </p>
          <p className={styles.text_desc_logo}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit,
          </p>
        </div>
        <nav>
          <ul className={styles.link_items}>
            <li>
              <a className={styles.link_footer} href="">
                Recipes
              </a>
            </li>
            <li>
              <a className={styles.link_footer} href="">
                Blog
              </a>
            </li>
            <li>
              <a className={styles.link_footer} href="">
                Contact
              </a>
            </li>
            <li>
              <a className={styles.link_footer} href="">
                About us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
