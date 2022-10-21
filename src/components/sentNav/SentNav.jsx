import React from "react";
import "./SentNav.css";

const SentNav = () => {
  return (
    <div className="sentNav-container">
      <ul>
        <li className="active">Email</li>
        <li>Fax</li>
        <li>Portal</li>
        <li>Hand Carried</li>
      </ul>
      <hr />
    </div>
  );
};

export default SentNav;
