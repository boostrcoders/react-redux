import React from "react";
import CustomNav from "./CustomNav/CustomNav";
import Logo from "./Logo/Logo";
import "./CustomHeader.scss";

const CustomHeader = () => {
  return (
    <div className="custom-header">
      <Logo />
      <CustomNav />
    </div>
  );
};

export default CustomHeader;
