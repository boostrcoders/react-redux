import React from "react";
import TaskItem from "./TaskItem";
import "./MainContent.scss";

const TaskList = props => {
  return (
    <div>
      <span className="checkall" onClick={() => props.checkAll()}>
        {props.allDone ? "Uncheck All" : "All Done"}
      </span>
      <div className="dropdown">
        &nbsp;&nbsp;| <button className="dropbtn">View</button>
        <div className="dropdown-content">
          <a href="./">Show All</a>
          <a href="./">Active</a>
          <a href="./">Done</a>
        </div>
      </div>
      <div className="task-container">
        {props.todos.map((todo, index) => {
          return (
            <TaskItem
              toggleTodoDone={props.toggleTodoDone}
              removeTodo={props.removeTodo}
              todo={todo}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
