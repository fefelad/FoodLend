import { memo } from "react";
import styles from "./Btn.module.css";
import inst from "../../../assets/icon/instagram.svg";
import play from "../../../assets/icon/PlayCircle.svg";

interface BtnProps {
  textBtn: string;
  img?: "play" | "inst" | null;
  onClick?: () => void;
}

function Btn({ textBtn, img, onClick }: BtnProps) {
  const imgIcon = img === "play" ? play : img === "inst" ? inst : null;
  return (
    <button onClick={onClick} className={styles.btn}>
      <p className={styles.text_btn}>{textBtn}</p>
      {imgIcon && <img src={imgIcon} alt="" />}
    </button>
  );
}

export default memo(Btn);
