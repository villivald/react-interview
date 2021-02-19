import React from "react";

const Bar = (props) => {
  return (
    <form className="bar" onSubmit={props.onSubmit}>
      <input
        placeholder="Add new todo..."
        value={props.newTodoName}
        onChange={props.onInputChange}
      />
      <button className="btn btn-success" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default Bar;
