import React, { useState } from "react";
import "./App.css";
import todos from "./constants/todos";
import Task from "./components/task";
import Bar from "./components/bar";

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(todos);

  const generateNewId = () => {
    return list.length + 1;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let newTodos = list.slice();
    newTodos.push({
      id: generateNewId(),
      name: name,
      complete: false,
    });
    setName("");
    setList(newTodos);
  };

  const onClick = (id) => {
    let todoItems = list.slice();
    for (let i = 0; i < list.length; i++) {
      if (todoItems[i].id === id) {
        let newComplete = !todoItems[i].complete;
        todoItems[i].complete = newComplete;
      }
    }
    setList(todoItems);
  };

  const onChange = (event) => setName(event.target.value);

  const onRemoveClick = (id) => {
    let newList = [...list];
    setList(newList.filter((item) => item.id !== id));
  };

  const todoItems = () => {
    let retVal = [];

    for (let i = 0; i < list.length; i++) {
      let todo = list[i];
      retVal.push(
        <Task
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
    <div>
      {todoItems()}
      <Bar onSubmit={onSubmit} newTodoName={name} onInputChange={onChange} />
    </div>
  );
};

export default App;
