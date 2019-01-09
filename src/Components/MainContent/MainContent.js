import React from "react";
import Section1 from "./Section1/Section1";
import "./MainContent.scss";

const MainContent = props => {
  return (
    <div className="main-content">
      <h1>Main Content</h1>
      <Section1 />
    </div>
  );
};

export default MainContent;
