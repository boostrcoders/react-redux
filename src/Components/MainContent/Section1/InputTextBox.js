import React from "react";
import "./Section1.scss";

const InputTextBox = () => {
  return (
    <div>
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className="btn" />
      <input
        type="text"
        placeholder="Input task here..."
        className="textInput"
      />
    </div>
  );
};

export default InputTextBox;
