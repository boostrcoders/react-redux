import React from "react";
import "./MainContent.css";

const InputTextBox = props => {
  return (
    <div>
      <form onSubmit={props.formSubmitted}>
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="btn" />
        <input
          type="text"
          name="newTodo"
          onChange={event => props.newTodoChange(event.target.value)}
          value={props.newTodo}
          placeholder="Input task here..."
          className="textInput"
        />
      </form>
    </div>
  );
};

export default InputTextBox;
