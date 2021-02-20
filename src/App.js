import React, { useState } from "react";
import "./App.css";
import todos from "./constants/todos";
import Task from "./components/task";
import AddTodo from "./components/addtodo";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(todos);

  const generateNewId = () => {
    return uuidv4();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let newTodos = [...list];
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
    let todoList = [];
    for (let i = 0; i < list.length; i++) {
      let todo = list[i];
      todoList.push(
        <Task
          key={todo.id}
          todo={todo}
          onClick={onClick}
          onRemoveClick={onRemoveClick}
        />
      );
    }
    return todoList;
  };

  return (
    <div>
      {todoItems()}
      <AddTodo
        onSubmit={onSubmit}
        newTodoName={name}
        onInputChange={onChange}
      />
    </div>
  );
};

export default App;
