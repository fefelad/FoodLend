import { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import type { CategoriesType } from "../../shared/types/MocyCategory.ts";
import axios from "axios";

function Categories() {
  const [category, setCategory] = useState<CategoriesType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fechData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/caregories");
      setCategory(response.data);
      console.log("Категории получены:", response.data);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fechData();
  }, []);

  if (loading) return <div>Загрузка фильмов...</div>;
  return (
    <>
      <h1 className={styles.category_title}>Categories</h1>
      <div className={styles.wrapper_category}>
        {category.map((category) => (
          <div
            style={{
              background: category.bgColor.replace(";", ""),
            }}
            className={styles.categories_arcticle}
            key={category.id}
          >
            <img className={styles.category_img} src={category.img} alt="" />
            <p className={styles.category_text}>{category.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
