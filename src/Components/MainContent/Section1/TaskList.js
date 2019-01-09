import React from "react";
import "./Section1.scss";

const TaskList = () => {
  return (
    <div className="task-container">
      <div className="task-card">
        <label className="task">
          Task 1
          <input type="checkbox" id="task-item" />
          <span className="checkmark" />
        </label>
      </div>
    </div>
  );
};

export default TaskList;
