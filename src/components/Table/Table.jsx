import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Pagination from "./Pagination";
import PropTypes from "prop-types";
import styles from "./Table.module.css";
import Loader from "./Loader";
const Table = ({ data,currentPage,totalPages,onPageChange,pageSize,onRowsPerPageChange }) => {
  const tableHeaders = data.length? Object.keys(data[0]):[]; 

  return (
    data.length === 0 ? <Loader /> : (
      <div className={styles.tableContainer}>
        <div className={styles.table}>
            <TableHeader headers={tableHeaders} />
            <TableBody data={data}/>
        </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} pageSize={pageSize} onRowsPerPageChange={onRowsPerPageChange} />
      </div>
    )
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  onRowsPerPageChange: PropTypes.func.isRequired,
};

export default Table;
