import React from "react";
import InputTextBox from "./InputTextBox";
import TaskList from "./TaskList";
import "./MainContent.scss";

const MainContent = props => {
  return (
    <div className="main-content">
      <div>
        <h2>
          {props.activePage}
          <InputTextBox
            newTodo={props.newTodo}
            formSubmitted={props.formSubmitted}
            newTodoChange={props.newTodoChange}
            message={props.message}
          />
        </h2>
        <TaskList
          checkAll={props.checkAll}
          toggleTodoDone={props.toggleTodoDone}
          removeTodo={props.removeTodo}
          todos={props.todos}
        />
      </div>
    </div>
  );
};

export default MainContent;
