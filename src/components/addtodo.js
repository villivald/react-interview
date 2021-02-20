import React from "react";

const AddTodo = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        placeholder="Add new todo..."
        value={props.newTodoName}
        onChange={props.onInputChange}
      />
      <button className="btn-submit" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default AddTodo;
