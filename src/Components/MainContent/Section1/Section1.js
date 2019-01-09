import React from "react";
import InputTextBox from "./InputTextBox";
import TaskList from "./TaskList";

const Section1 = props => {
  return (
    <div>
      <h2>
        Todo List <InputTextBox />
      </h2>
      <TaskList />
      <TaskList />
      <TaskList />
      <TaskList />
    </div>
  );
};

export default Section1;
