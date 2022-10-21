import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import OrdersAndEpisodesData from "../../assets/Data/OrdersAndEpisodesData";
import "./OrdersAndEpisodes.css";

const OrdersAndEpisodes = () => {
  return (
    <div className="ordersAndEpisodes">
      {OrdersAndEpisodesData.map(({ id, name, amount }) => {
        return (
          <div key={id} className="small-div">
            <div>
              <h3>{name}</h3>
              <h2>{amount}</h2>
            </div>
            <HiArrowNarrowRight size={"1.6em"} />
          </div>
        );
      })}
    </div>
  );
};

export default OrdersAndEpisodes;
