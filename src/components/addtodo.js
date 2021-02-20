import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const AddTodo = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <TextField
        id="standard-basic"
        label="Add new todo..."
        value={props.newTodoName}
        onChange={props.onInputChange}
      />
      <Button variant="contained" color="primary" type="submit" value="Submit">
        Submit
      </Button>
    </form>
  );
};

export default AddTodo;
