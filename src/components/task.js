import React from "react";

const Task = (props) => {
  return (
    <div className="task-container">
      <div
        className="wrapper"
        style={{
          backgroundColor:
            props.todo.complete === true ? "lightgreen" : "#56CBF9",
          textDecoration:
            props.todo.complete === true ? "line-through" : "none",
        }}
      >
        <p>{props.todo.name}</p>
      </div>
      <button onClick={() => props.onClick(props.todo.id)}>
        {props.todo.complete === true ? "Not done" : "Done"}
      </button>
      <button onClick={() => props.onRemoveClick(props.todo.id)}>Remove</button>
    </div>
  );
};

export default Task;
