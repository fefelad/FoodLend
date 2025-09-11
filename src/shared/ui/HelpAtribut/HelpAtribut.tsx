import { memo } from "react";
import styles from "./HelpAtribit.module.css";
import Knife from "../../../assets/icon/ForkKnife.svg";
import Clock from "../../../assets/icon/Timer.svg";

interface DishAttributeProps {
  type: "time" | "meat";
  text: string;
}

function HelpAtribit({ text, type }: DishAttributeProps) {
  const icon = type === "time" ? Clock : Knife;
  return (
    <div className={styles.wrapper_atribut}>
      <img src={icon} alt="icon" />
      <p className={styles.text_atribut}>{text}</p>
    </div>
  );
}

export default memo(HelpAtribit);


