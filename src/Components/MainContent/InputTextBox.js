import React from "react";
import "./MainContent.scss";

const InputTextBox = props => {
  return (
    <div>
      <form onSubmit={props.formSubmitted}>
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="btn" />
        <input
          type="text"
          name="newTodo"
          onChange={props.newTodoChange}
          value={props.newTodo}
          placeholder="Input task here..."
          className="textInput"
        />
      </form>
    </div>
  );
};

export default InputTextBox;
