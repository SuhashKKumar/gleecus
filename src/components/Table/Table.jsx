import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./Table.css";

const Table = () => {
  const date = new Date()
    .toDateString()
    .toString()
    .split(" ")
    .slice(1)
    .join(" ");
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [hideColumn, setHideColumn] = useState(true);

  const hideHandler = (params) => {
    gridColumnApi.setColumnsVisible(["name"], hideColumn);
    setHideColumn(!hideColumn);
    gridApi.sizeColumnsToFit();
  };
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    // gridApi=params.api
    fetch("https://5b9f8640f5036f00142e4a2c.mockapi.io/v1/users")
      .then((res) => res.json())
      .then((res) => params.api.applyTransaction({ add: res }))
      .catch((err) => alert(err.message));
  };
  const columns = [
    {
      headerName: "Initial timely filling date",
      field: "",
      tooltipField: "name",
      cellRendererFramework: (params) => <p>{date}</p>,
    },
    {
      headerName: "Primary Insurance Name",
      field: "",
      tooltipField: "name",
      cellRendererFramework: (params) => <p>Medicare</p>,
    },
    {
      headerName: "MRN",
      field: "",
      tooltipField: "name",
      cellRendererFramework: (params) => <p>A1-3126</p>,
    },
    {
      headerName: "Patient",
      field: "name",
      tooltipField: "name",
      hide: hideColumn,
    },
    {
      headerName: "BP Dates",
      field: "",
      tooltipField: "name",
      cellRendererFramework: (params) => <p>{date}</p>,
    },
    {
      headerName: "Number of Comments",
      field: "",
      tooltipField: "name",
      cellRendererFramework: (params) => <p>26</p>,
    },
    {
      headerName: "Age From Sent Date",
      field: "",
      tooltipField: "name",
      cellRendererFramework: (params) => <p>{date}</p>,
    },
    {
      headerName: "Age From Visit Date",
      field: "",
      tooltipField: "name",
      cellRendererFramework: (params) => <p>{date}</p>,
    },
    { headerName: "Episode Physician", field: "name", tooltipField: "name" },
  ];
  const specialFeatures = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    flex: 1,
    resizable: true,
  };
  return (
    <div
      className=" table-container ag-theme-alpine"
      style={{ width: "94.5%", height: 500 }}
    >
      <button className="hideBtn" onClick={hideHandler}>
        {`${hideColumn ? "Show" : "Hide"}`} Patients List
      </button>
      <AgGridReact
        onGridReady={onGridReady}
        columnDefs={columns}
        defaultColDef={specialFeatures}
        enableBrowserTooltips={true}
        toolTipShowDelay={{ toolTipShowDelay: 2 }}
      />
    </div>
  );
};

export default Table;
