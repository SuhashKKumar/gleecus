import React, { useState, useEffect } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./Table.css";

const Table = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(
    new Date("10-12-2022")
      .toDateString()
      .toString()
      .split(" ")
      .slice(1)
      .join(" ")
  );
  const [rowDatas, setRowDatas] = useState([]);
  function fetching() {
    axios
      .get("https://5b9f8640f5036f00142e4a2c.mockapi.io/v1/users")
      .then((res) => setData(res.data))
      .catch((err) => alert(err.message));
  }
  function rowDataFetch(){
    data.map((ele) => {
        setRowDatas([
          ...rowDatas,
          {
            initialData: ele.createdAt,
            insuranceName: "Medicare",
            name: ele.name,
            mrn: "A1-3T26",
            bpDate: date,
            comments: 26,
            sentDate: date,
            visitDate: date, 
          },
        ]);
      });
  }
  if(rowDatas.length<10){
    rowDataFetch()
}
  useEffect(() => {
      
    fetching();
  }, []);

  //   const columnData = [
  //     {
  //       headerName: "Initial timely filling date",
  //       field: initialData,
  //     },
  //     {
  //       headerName: "Primary Insurance Name",
  //       field: insuranceName,
  //     },
  //     {
  //       headerName: "MRN",
  //       field: mrn,
  //     },
  //     {
  //       headerName: "Patient",
  //       field: name,
  //     },
  //     {
  //       headerName: "BP Dates",
  //       field: bpDate,
  //     },
  //     {
  //       headerName: "Number of comments",
  //       field: comments,
  //     },
  //     {
  //       headerName: "Age from Sent Date",
  //       field: sentDate,
  //     },
  //     {
  //       headerName: "Age from Visit Date",
  //       field: visitDate,
  //     },
  //     {
  //       headerName: "Physician",
  //       field: name,
  //     },
  //   ];
  console.log(rowDatas);
  return (
    <div className="table-container">
      <AgGridReact
        rowData={data.map((ele) => {
          initialData: ele.createdAt;
          insuranceName: "Medicare";
          name: ele.name;
          mrn: "A1-3T26";
          bpDate: date;
          comments: 26;
          sentDate: date;
          visitDate: date;
        })}
      />
    </div>
  );
};

export default Table;
