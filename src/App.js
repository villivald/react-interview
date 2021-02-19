import React from "react";
import "./App.css";
import todos from "./constants/todos";

const App = (props) => {
  const state = {
    newTodoName: "",
    todos: todos,
  };

  const generateNewId = () => {
    return state.todos.length + 1;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    var newTodos = state.todos.slice();
    newTodos.push({
      id: generateNewId(),
      name: state.newTodoName,
      complete: false,
    });

    this.setState({ todos: newTodos, newTodoName: "" });
  };

  const onClick = (id) => {
    var todoItems = state.todos.slice();
    for (let i = 0; i < state.todos.length; i++) {
      if (todoItems[i].id === id) {
        var newComplete = !todoItems[i].complete;
        todoItems[i].complete = newComplete;
      }
    }

    this.setState({
      todos: todoItems,
    });
  };

  const onChange = (event) => {
    this.setState({ newTodoName: event.target.value });
  };
  const onRemoveClick = (id) => {
    //implement this logic
    console.log("Remove Item!");
  };

  const todoItems = () => {
    var retVal = [];

    for (let i = 0; i < state.todos.length; i++) {
      var todo = state.todos[i];
      retVal.push(
        <Hello
          key={todo.id}
          todo={todo}
          onClick={onClick}
          onRemoveClick={onRemoveClick}
        />
      );
    }
    return retVal;
  };

  return (
    <div className="">
      {todoItems()}
      <Bar
        onSubmit={onSubmit}
        newTodoName={state.newTodoName}
        onInputChange={onChange}
      />
    </div>
  );
};

const Hello = (props) => {
  var color;
  var text;

  if (props.todo.complete === true) {
    color = "lightgreen";
    text = "Complete";
  } else {
    color = "pink";
    text = "Incomplete";
  }

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
        Remove from list
      </button>
    </div>
  );
};

const Bar = (props) => {
  return (
    <form
      className="wrapper"
      style={{ gridTemplateColumns: "7fr 2fr" }}
      onSubmit={props.onSubmit}
    >
      <input
        placeholder="Add new todo"
        value={props.newTodoName}
        onChange={props.onInputChange}
      />
      <button className="btn btn-success" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default App;
