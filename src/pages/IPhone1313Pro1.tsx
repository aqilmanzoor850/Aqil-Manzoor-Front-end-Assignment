import { FunctionComponent } from "react";
import styles from "./IPhone1313Pro1.module.css";

const IPhone1313Pro1: FunctionComponent = () => {
  return (
    <div className={styles.iPhone1313Pro1}>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="../rectangle-1@2x.png"
      />
      <input className={styles.rectangleInput} type="text" />
      <input className={styles.rectangleInput1} type="text" />
      <button className={styles.rectangleButton} />
      <div className={styles.rectangleDiv} />
    </div>
  );
};

export default IPhone1313Pro1;
