import styles from "./Error.module.css";
function Error({message}) {
  return <div className={styles.error}>
    <h1>{message}</h1>
  </div>;
}

export default Error;
