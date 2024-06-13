import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import axios from "axios";

const DataGridTable = () => {
  const [Ver, setuserVer] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:61334/User/").then((resp) => {
          setuserVer(resp.data);
          console.log(resp.data);
        });
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    if (isLoading) {
      fetchData();
    }
  }, [isLoading]);

  const rows: GridRowsProp = Ver.map((user, index) => ({
    id: index, // Benzersiz bir ID kullanın, örneğin dizideki index
    col1: user.name,
    col2: user.email,
    col3: user.password,
    col4: user.totalCarUnsold,
    col5: user.lastLoginTime,
  }));

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
    { field: "col3", headerName: "Column 3", width: 150 },
    { field: "col4", headerName: "Column 4", width: 150 },
    { field: "col5", headerName: "Column 5", width: 150 },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};
export default DataGridTable;
