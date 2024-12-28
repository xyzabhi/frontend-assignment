import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange,pageSize,onRowsPerPageChange }) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.pagination__button}
      >
        Previous
      </button>
      <div className={styles.pagination__pageInfo_container}>
      <span className={styles.pagination__pageInfo}>
        Page {currentPage} of {totalPages}
      </span>
     
        <select
          value={pageSize}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
          className={styles.pagination__select}
        >
          <option value={5}>5 rows</option>
          <option value={10}>10 rows</option>
          <option value={25}>25 rows</option>
          <option value={50}>50 rows</option>
        </select>
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.pagination__button}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
