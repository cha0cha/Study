// rfce

import { useState } from "react";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function TodoList() {
  const [todos, setTodos] = useState(fetchTodos());

  const handleRemove = (todo) => {
    // // console.log(todo, index)
    // todos.splice(index, 1);
    const result = todos.filter((todoItem) => {
      if (todoItem !== todo) {
        return true;
      }
    });
    setTodos(result);
    localStorage.removeItem(todo);
  };
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => handleRemove(todo, index)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
