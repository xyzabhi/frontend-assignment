import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import PropTypes from "prop-types";

const Table = ({ data }) => {
  const tableHeaders = data.length? Object.keys(data[0]):[]; 

  return (
    <div>
      <TableHeader headers={tableHeaders} />
      <TableBody data={data}/>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
