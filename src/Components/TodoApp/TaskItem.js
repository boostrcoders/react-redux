import React from "react";
import "./MainContent.scss";

const TaskItem = props => {
  return (
    <div className="task-card" key={props.index}>
      <label className="task">
        <input
          type="checkbox"
          id="task-item"
          onChange={event => props.toggleTodoDone(event, props.index)}
          checked={props.todo.done}
        />
        <span
          // style={{
          //   textDecoration: todo.done ? "line-through" : "inherit"
          // }}
          className={props.todo.done ? "todo-done" : ""}
        >
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
