import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./Table.css";

const Table = () => {
  const onGridReady = (params) => {
    // gridApi=params.api
    fetch("https://5b9f8640f5036f00142e4a2c.mockapi.io/v1/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        params.api.applyTransaction({ add: res });
      }).catch(err=>alert(err.message))
  };
  const columns = [
    { headerName: "Initial timely filling date", field: "" },
    { headerName: "Primary Insurance Name", field: "" },
    { headerName: "MRN", field: "" },
    { headerName: "Patient", field: "name" },
    { headerName: "BP Dates", field: "" },
    { headerName: "Number of Comments", field: '' },
    { headerName: "Age From Sent Date", field: "" },
    { headerName: "Age From Visit Date", field: "" },
    { headerName: "Episode Physician", field: "name" },
  ];
  const specialFeatures = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    flex: 1,
  };
  return (
    <div
      className=" table-container ag-theme-alpine"
      style={{ width: "94.5%", height: 500 }}
    >
      <AgGridReact
        onGridReady={onGridReady}
        columnDefs={columns}
        defaultColDef={specialFeatures}
      />
    </div>
  );
};

export default Table;
