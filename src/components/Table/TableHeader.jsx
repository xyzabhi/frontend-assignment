
const TableHeader = ({ headers }) => {
  return (
    <div>
        <thead>
            <tr>
                {headers.map((header) => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
        </thead>
    </div>
  );
};

export default TableHeader;
