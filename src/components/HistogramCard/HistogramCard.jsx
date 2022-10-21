import React from "react";
import "./HistogramCard.css";

const HistogramCard = ({ name, orders, episodes, revenueOnHold, special }) => {
  return (
    <div className="histogram-container">
      <div className="histogramCard">
        <h1>{name}</h1>
        <div className="histogramCard-container">
          <div>
            <h3>Orders</h3>
            <h2>{orders}</h2>
          </div>
          <div>
            <h3>Episodes</h3>
            <h2>{episodes}</h2>
          </div>
          <div>
            <h3>{special ? "Expected Revenue" : "Revenue On Hold"}</h3>
            <h2>{revenueOnHold}</h2>
          </div>
        </div>
        <hr />
        <a>View Details</a>
      </div>
    </div>
  );
};

export default HistogramCard;
