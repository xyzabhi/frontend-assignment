import { useState, useEffect } from "react";
import Table from "./components/Table/Table";
import { userData } from "./apis/userapi";
function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

const getData = async () => {
  const {data, error} = await userData();
  setData(data);
  setError(error);
  setLoading(false);
}

  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <Table isLoading={loading} error={error} data={data} />
    </>
  );
}
export default App;
