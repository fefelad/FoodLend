import { memo } from "react";
import styles from "./Btn.module.css";
import inst from "../../../assets/icon/instagram.svg";
import play from "../../../assets/icon/PlayCircle.svg";

interface BtnProps {
  textBtn: string;
  img: "play" | "inst";
}

function Btn({ textBtn, img }: BtnProps) {
  const imgIcon = img === "play" ? play : inst;
  return (
    <button className={styles.btn}>
      <p className={styles.text_btn}>{textBtn}</p>
      <img src={imgIcon} alt="" />
    </button>
  );
}

export default memo(Btn);
