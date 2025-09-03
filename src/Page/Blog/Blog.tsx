import BlogList from "../../components/BlogPageComponents/BlogList/BlogList";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className={styles.blog_wrapper}>
      <BlogList />
    </div>
  );
}

export default Blog;
