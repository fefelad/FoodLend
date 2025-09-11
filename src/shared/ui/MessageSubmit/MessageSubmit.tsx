import styles from "./MessageSubmit.module.css";

function MessageSubmit() {
  return (
    <div className={styles.wrapper_messageSybmit}>
      <div className={styles.text_message}>
        <p className={styles.text}>Данные отправлены!</p>
      </div>
    </div>
  );
}

export default MessageSubmit;


