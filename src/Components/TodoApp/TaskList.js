import React from "react";
import TaskItem from "./TaskItem";
import "./MainContent.scss";

const TaskList = props => {
  return (
    <div>
      <div className="sub-menu">
        <ul>
          <li
            className={props.allDone ? "active" : ""}
            onClick={() => props.checkAll()}
          >
            {props.allDone ? "Uncheck All" : "All Done"}
          </li>
          <li
            className={props.view === "Done" ? "active" : ""}
            onClick={() => props.viewStatus("Done")}
          >
            Done
          </li>
          <li
            className={props.view === "Active" ? "active" : ""}
            onClick={() => props.viewStatus("Active")}
          >
            Active
          </li>
          <li
            className={props.view === "Show All" ? "active" : ""}
            onClick={() => props.viewStatus("Show All")}
          >
            Show All
          </li>
        </ul>
      </div>
      <div className="task-container">
        {props.todos.map((todo, index) => {
          return (
            <TaskItem
              view={props.view}
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
