import { useState, useEffect, useMemo } from "react";
import Table from "./components/Table/Table";
import { userData } from "./apis/userapi";
import Error from "./components/Table/Error";
function App() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const getData = async () => {
    const { data, error } = await userData();
    setData(data);
    setError(error);
    setLoading(false);
  };
  const TableData = useMemo(() => {
    return data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  }, [data, currentPage, pageSize]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1 style={{textAlign:"center",marginTop:"20px",fontSize:"24px",fontWeight:"bold",fontFamily:"sans-serif",color:"#000",marginBottom:"20px"}}>Saas Labs Assignment</h1>
      {error ? (
        <Error message={error} />
      ) : (
        <Table
          isLoading={loading}
          error={error}
          data={TableData}
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / pageSize)}
          onPageChange={setCurrentPage}
          onRowsPerPageChange={setPageSize}
          pageSize={pageSize}
        />
      )}
    </>
  );
}
export default App;
