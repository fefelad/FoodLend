import { useEffect, useRef } from "react";
import styles from "./Input.module.css";

function Input() {
  const serchRecipes = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (serchRecipes.current) {
      serchRecipes.current.focus();
    }
  }, []);
  return (
    <>
      <input
        ref={serchRecipes}
        className={styles.input}
        type="text"
        placeholder="Введите название блюд"
      />
    </>
  );
}

export default Input;
