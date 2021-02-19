import React from "react";

const Task = (props) => {
  let color = props.todo.complete === true ? "lightgreen" : "pink";
  let text = props.todo.complete === true ? "Complete" : "Incomplete";

  return (
    <div className="wrapper" style={{ backgroundColor: color }}>
      <h3>{props.todo.name}</h3>
      <button className="btn" onClick={() => props.onClick(props.todo.id)}>
        {text}
      </button>
      <button
        className="btn"
        onClick={() => props.onRemoveClick(props.todo.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default Task;
