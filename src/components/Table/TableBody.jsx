import "./TableBody.css";
const TableBody = ({data}) => {
  return (
    <div>
      <tbody className="table-body">
      {data.map((item) => (
        <tr key={item.id} className="table-body__row">
          {Object.values(item).map((value, index) => (
            <td key={index} className="table-body__cell">
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
    </div>
  )
}

export default TableBody