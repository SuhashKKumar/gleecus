import React from "react";
import "./PreMain.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const PreMain = ({ sent }) => {
  return (
    <div className="premain-container">
      <h2>
        Admin <HiArrowNarrowRight size={"1.5em"} />
        <Link to="/">
          <span>Pending Orders</span>
        </Link>
        {sent ? (
          <>
            <HiArrowNarrowRight size={"1.5em"} />
            <Link to="/sent">
              <span>To Be Sent</span>
            </Link>
          </>
        ) : (
          <></>
        )}
      </h2>
      {sent ? (
        <h1 className="sent-container">To Be Sent</h1>
      ) : (
        <h1 className="sent-container">Pending Orders</h1>
      )}
    </div>
  );
};

export default PreMain;
