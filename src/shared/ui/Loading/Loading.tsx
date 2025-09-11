import { motion } from "framer-motion";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <motion.div
        className={styles.spinner}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={styles.loadingText}
      >
        Loading recipes...
      </motion.p>
    </div>
  );
};

export default Loading;


