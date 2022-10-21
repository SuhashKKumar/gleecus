import React from "react";
import "./OrdersAndRevenue.css";

const OrdersAndRevenue = ({ name, amount }) => {
  return (
    <div className="ordersAndRevenue-container">
      <h1>{name}</h1>
      <h2>{amount}</h2>
    </div>
  );
};

export default OrdersAndRevenue;
