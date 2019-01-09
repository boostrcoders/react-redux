import React from "react";
import "./Logo.scss";
import logo from "../../../assets/mylogo2.png";

const Logo = () => {
  return (
    <div className="logo">
      <a href="#home">
        <img width="50px" height="50px" src={logo} alt="JM" />
      </a>
    </div>
  );
};

export default Logo;
