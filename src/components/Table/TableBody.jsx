import styles from "./TableBody.module.css";
const TableBody = ({data}) => {
  return (
    <div className={styles.tableBody}>
  
      {data.map((item) => (
        <div key={item.id} className={styles.tableBody__row}>
          {Object.values(item).map((value, index) => (
            <td key={index} className={styles.tableBody__cell}>
              {value}
            </td>
          ))}
        </div>
      ))}

    </div>
  )
}

export default TableBody