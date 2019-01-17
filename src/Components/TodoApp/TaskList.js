import React from "react";
import TaskItem from "./TaskItem";
import "./MainContent.css";

const TaskList = props => {
  return (
    <div>
      <div className="sub-menu">
        <ul>
          <li>
            <label className="task">
              <input
                type="checkbox"
                id="task-item"
                // onChange={event => props.toggleTodoDone(event, props.index)}
                onChange={() => props.checkAll()}
                checked={props.allDone ? true : false}
              />
              <span className={props.allDone ? "todo-done" : ""}>
                {props.allDone ? "Uncheck All" : "All Done"}
              </span>

              <span className="checkmark" />
            </label>
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
      <div className="sub-menu">
        <ul>
          <li
            className={props.view === "Show All" ? "active" : ""}
            onClick={() => props.viewStatus("Show All")}
          >
            Show All
          </li>
          <li
            className={props.view === "Active" ? "active" : ""}
            onClick={() => props.viewStatus("Active")}
          >
            Active
          </li>
          <li
            className={props.view === "Done" ? "active" : ""}
            onClick={() => props.viewStatus("Done")}
          >
            Done
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
