import BlogList from "../../components/BlogPageComponents/BlogList/BlogList";
import Subscribe from "../../components/HomePageComponents/Subscribe/Subscribe";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className={styles.blog_wrapper}>
      <BlogList />
      <Subscribe />
    </div>
  );
}

export default Blog;
