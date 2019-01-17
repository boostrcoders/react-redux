import React from "react";
import "./MainContent.css";

const TaskItem = props => {
  return (
    <div
      className={
        props.view === "Active" && props.todo.done === false
          ? "task-card show"
          : props.view === "Done" && props.todo.done === true
          ? "task-card show"
          : props.view === "Show All"
          ? "task-card show"
          : "task-card hide"
      }
      key={props.index}
    >
      <label className="task">
        <input
          type="checkbox"
          id="task-item"
          onChange={event => props.toggleTodoDone(event, props.index)}
          checked={props.todo.done}
        />
        <span className={props.todo.done ? "todo-done" : ""}>
          {props.todo.title}
        </span>

        <span className="checkmark" />
      </label>
      <span
        className="delete-task"
        title="Delete"
        onClick={() => props.removeTodo(props.index)}
      >
        &#10005;
      </span>
    </div>
  );
};

export default TaskItem;
