import './TableHeader.css';

const TableHeader = ({ headers }) => {
  return (
    <thead className="table-header">
      <tr>
        {headers.map((header) => (
          <th key={header} className="table-header__cell">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
                    