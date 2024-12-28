import "./TableHeader.module.css";
import styles from "./TableHeader.module.css";
const TableHeader = ({ headers }) => {
  return (
    <div className={styles.tableHeader}>
      {headers.map((header) => (
        <div key={header} className={styles.tableHeader__cell}>
          {header}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
