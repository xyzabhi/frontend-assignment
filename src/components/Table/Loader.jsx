import styles from "./Loader.module.css";   

function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__spinner}></div>
    </div>
  );
}

export default Loader;
