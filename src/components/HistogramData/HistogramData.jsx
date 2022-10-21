import React from "react";
import Calenders from "../Calenders/Calenders";
import HistogramCard from "../HistogramCard/HistogramCard";
import OrdersAndRevenue from "../OrdersAndRevenue/OrdersAndRevenue";
import histogramData from "../../assets/Data/histogramData";
import "./HistogramData.css";

const HistogramData = () => {
  return (
    <div className="histogramData-container">
      <Calenders />
      <div className="orders-container">
        <OrdersAndRevenue name={"Pending Orders"} amount={"90"} />
        <OrdersAndRevenue name={"Revenue On Hold"} amount={"$3000"} />
      </div>

      {histogramData.map(
        ({ orders, name, id, episodes, revenueOnHold, special }) => {
          return (
            <HistogramCard
              key={id}
              orders={orders}
              name={name}
              episodes={episodes}
              revenueOnHold={revenueOnHold}
              special={special}
            />
          );
        }
      )}
    </div>
  );
};

export default HistogramData;
