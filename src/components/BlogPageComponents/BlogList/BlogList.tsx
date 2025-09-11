import { useEffect, useState } from "react";
import type { Blog } from "../../../shared/types/MocyCategory";

import styles from "./BlogList.module.css";
import axios from "axios";

interface BlogResponse {
  posts: Blog[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalPosts: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

function BlogList() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const FechBlogPost = async (pageNum: number) => {
    try {
      setLoading(true);
      const response = await axios.get<BlogResponse>(
        `api/BlogPost?page=${pageNum}`
      );

      setPosts(response.data.posts);
      setTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };
  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    FechBlogPost(currentPage);
  }, [currentPage]);

  const pageButtons = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (loading) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className={styles.wrapper_blogList}>
      <div>
        <div className={styles.haeder_blog}>
          <h1 className={styles.haeder_blog__title}>Blog & Article</h1>
          <p className={styles.haeder_blog__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
        <div className={styles.main_blogPost}>
          <div className={styles.recipesGrid}>
            {posts.map((post) => (
              <div key={post.id} className={styles.recipeCard}>
                <div className={styles.div_img}>
                  <img src={post.recipeImage} alt={post.title} />
                </div>
                <div className={styles.recipeInfo}>
                  <h3 className={styles.title}>{post.title}</h3>
                  <p className={styles.description}>{post.description}</p>

                  <div className={styles.authorInfo}>
                    <img
                      src={post.author.avatar}
                      alt={`${post.author.firstName} ${post.author.lastName}`}
                    />
                    <p className={styles.authorName}>
                      {post.author.firstName} {post.author.lastName}
                    </p>
                    <div>
                      <span className={styles.data_post}>
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.btn_link}>
            {pageButtons.map((pageNumber) => (
              <button
                key={pageNumber}
                className={`${styles.pageButton} ${
                  currentPage === pageNumber ? styles.active : ""
                }`}
                onClick={() => handlePageClick(pageNumber)}
                disabled={loading}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;


