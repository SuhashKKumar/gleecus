import React from "react";
import Histogram from "../Histogram/Histogram";
import HistogramData from "../HistogramData/HistogramData";
import PreMain from "../premain/PreMain";
import "./PendingOrders.css";

const PendingOrders = () => {
  return (
    <div>
      <PreMain />
      <div className="pending-orders-container">
        <Histogram />
        <HistogramData />
      </div>
    </div>
  );
};

export default PendingOrders;
