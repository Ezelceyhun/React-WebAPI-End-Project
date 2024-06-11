import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const Datagrid = () => {
  const [userVer, setUserVer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:61334/User/");
        setUserVer(response.data);
      } catch (error) {
        setError("hata");
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoading) {
      fetchData();
    }
  }, [isLoading]);

  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "password",
      selector: (row) => row.password,
      sortable: true,
    },
    {
      name: "totalCarUnsold",
      selector: (row) => row.totalCarUnsold,
      sortable: true,
    },
    {
      name: "lastLoginTime",
      selector: (row) => row.lastLoginTime,
      sortable: true,
    },
  ];

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <DataTable
          title="User List"
          columns={columns}
          data={userVer}
          pagination
        />
      )}
    </div>
  );
};

export default Datagrid;
