import { useState, useEffect,useMemo } from "react";
import Table from "./components/Table/Table";
import { userData } from "./apis/userapi";
function App() {
  const pageSize = 5;
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  

const getData = async () => {
  const {data, error} = await userData();
  setData(data);
  setError(error);
  setLoading(false);
}
const TableData = useMemo(() => {
  return data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}, [data, currentPage, pageSize]);

  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <Table isLoading={loading} error={error} data={TableData} currentPage={currentPage} totalPages={Math.ceil(data.length / pageSize)} onPageChange={setCurrentPage} />
    </>
  );
}
export default App;
