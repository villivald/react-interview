import React from "react";
import Button from "@material-ui/core/Button";

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
      <Button
        variant="contained"
        color="primary"
        style={{
          backgroundColor: props.todo.complete === true ? "#777" : "",
        }}
        onClick={() => props.onClick(props.todo.id)}
      >
        {props.todo.complete === true ? "Not done" : "Done"}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.onRemoveClick(props.todo.id)}
      >
        Remove
      </Button>
    </div>
  );
};

export default Task;
