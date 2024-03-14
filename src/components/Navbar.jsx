// Navbar.js
import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="page-container">
      <div className="navbar">
        <div className="navbar-left">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="Zomato Logo"
            className="zomato-logo"
          />
        </div>
        <div className="navbar-center">
          <div className="search-box">
            <select className="location-dropdown">
              <option value="location1">&#x1F4CD;Delhi</option>
              <option value="location2">&#x1F4CD;Noida</option>
              <option value="location2">&#x1F4CD;Gurugram</option>
            </select>
            <input
              type="text"
              placeholder="&#x1F50D; Search for Restaurant, cuisine or dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="navbar-right">
          <button className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
      <div className="breadcrumb">
        <p>
          Home / India / Patna / <span> Fraser Road Area Restaurants</span>
        </p>
      </div>
      <div className="tab">
        <img
          src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
          alt="logo1"
          className="logo1"
        />
        <span>Dining Out</span>
        <img
          src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
          alt="logo2"
          className="logo2"
        />
        <span>Delivery</span>
      </div>
      <div className="filter">
        <button>Filters</button>
        <button>Rating: 4.0+</button>
        <button>Pure Veg</button>
        <button>Cuisines</button>
      </div>
    </div>
  );
};

export default Navbar;
