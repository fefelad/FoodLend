import { useEffect, useRef } from "react";
import styles from "./Input.module.css";

interface PropsInpute {
  value?: string;
  change: (e: string) => void;
}

function Input({ value, change }: PropsInpute) {
  const serchRecipes = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (serchRecipes.current) {
      serchRecipes.current.focus();
    }
  }, []);
  return (
    <>
      <input
        value={value}
        onChange={(e) => change(e.target.value)}
        ref={serchRecipes}
        className={styles.input}
        type="text"
        placeholder="Введите название блюд"
      />
    </>
  );
}

export default Input;
