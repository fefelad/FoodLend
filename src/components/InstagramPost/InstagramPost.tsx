import { useEffect, useState } from "react";
import styles from "./Instagram.module.css";
import type {
  InstaPost,
  InsPostResponse,
} from "../../shared/types/MocyCategory";
import axios from "axios";
import logoPost from "../../assets/InstaPost/logo.png";

import like from "../../assets/icon/like.svg";
import message from "../../assets/icon/Messanger.svg";
import comment from "../../assets/icon/Comment.svg";
import save from "../../assets/icon/Save.svg";
import Btn from "../../shared/ui/Btn/Btn";

function InstagramPost() {
  const [PostInsta, setPostInsta] = useState<InstaPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const FechPost = async (pageNum: number) => {
    try {
      setLoading(true);
      const response = await axios.get<InsPostResponse>(
        `/api/InstaPost?page=${pageNum}&limit=4`
      );

      if (pageNum === 1) {
        setPostInsta(response.data.posts);
      } else {
        setPostInsta((prev) => [...prev, ...response.data.posts]);
      }

      setHasMore(response.data.hasMore);
    } catch (error) {
      console.error("Ошибка загрузки постов:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    FechPost(page);
  }, [page]);

  return (
    <div className={styles.Instagrampost_warapper}>
      <h4 className={styles.title_instagrampost}>
        Check out @foodieland on Instagram
      </h4>
      <p className={styles.Instagrampost_desc}>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolor <br /> magna aliqut enim ad minim
      </p>

      <div className={styles.post_flex}>
        {PostInsta.map((post) => (
          <div className={styles.post} key={post.id}>
            <div className={styles.post_header}>
              <img width={25} height={25} src={logoPost} alt="logo" />
              <div className={styles.post_text_header}>
                <p className={styles.title_logo}>Foodieland.</p>
                <p className={styles.title_plase}>{post.plase}</p>
              </div>
            </div>
            <img src={post.img} alt="img" />
            <div className={styles.footer_post}>
              <div className={styles.post_link}>
                <div className={styles.link_img}>
                  <img className={styles.link_pointer} src={like} alt="like" />
                  <img
                    className={styles.link_pointer}
                    src={comment}
                    alt="like"
                  />
                  <img
                    className={styles.link_pointer}
                    src={message}
                    alt="like"
                  />
                </div>
                <img className={styles.link_pointer} src={save} alt="like" />
              </div>
              <div className={styles.footer_text}>
                <p className={styles.footer_desc}>
                  <span className={styles.span_decs}>Foodieland.</span>
                  {post.title}
                </p>
                <p className={styles.post_data}>{post.data}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.btn_next}>
        <Btn onClick={loadMore} textBtn="Show more" />
      </div>
    </div>
  );
}

export default InstagramPost;
