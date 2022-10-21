import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [dropdown, setDropDown] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-left">
        <a className="nav-item">
          <h1>hnts</h1>
        </a>
        <a className="nav-item">
          Clinical <span>🔽</span>
        </a>
        <a className="nav-item">
          Business Development <span>🔽</span>
        </a>

        <a className="nav-item" onClick={() => setDropDown(!dropdown)}>
          Admin <span>🔽</span>
        </a>
        {dropdown ? (
          <ul className="dropdown-menu">
            <Link to="/">
              <li className="dropdown-item">Pending Orders</li>
            </Link>
            <Link to="/sent">
              <li className="dropdown-item">To Be Sent</li>
            </Link>
          </ul>
        ) : (
          <></>
        )}
      </div>
      <div className="nav-right">
        <a className="nav-item">
          <h1>HealthCare</h1>
        </a>
        <a className="nav-icon">🔔</a>
        <a className="nav-icon">
          👤<span>🔽</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
