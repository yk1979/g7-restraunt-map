import Image from "next/image";
import { memo } from "react";

import styles from "./style.module.css";

const TitleComponent: React.FC = () => {
  return (
    <div className={styles.title_wrapper}>
      <h1 className={styles.h1}>GINZA7</h1>
      <p className={styles.subtitle}>ごはんmap</p>
      <p className={styles.message}>
        ginza ha curry heven
        <Image src="/genie.png" alt="genie" width={35} height={35} />
      </p>
    </div>
  );
};

export const Title = memo(TitleComponent);
