import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Pagination from "./Pagination";
import PropTypes from "prop-types";

const Table = ({ data,currentPage,totalPages,onPageChange }) => {
  const tableHeaders = data.length? Object.keys(data[0]):[]; 

  return (
    <div>
        <table className="table">
            <TableHeader headers={tableHeaders} />
            <TableBody data={data}/>
        </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Table;
