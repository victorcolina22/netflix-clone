import styles from "./styles.module.css";

export function Trending() {
  return (
    <div className={styles.container}>
      <div className={styles["container-line"]}>
        <div className={styles.line}>
          <p style={{ height: "300px" }}></p>
        </div>
      </div>
    </div>
  );
}
