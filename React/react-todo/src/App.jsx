import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function App() {
  // const [count, setCount] = useState(0)
  // const [inputText, setInputText] = useState('');
  // const todos = fetchTodos();
  const [todos, setTodos] = useState(fetchTodos());

  const addTodo = (todo) => {
    console.log("clicked");
    //key값과 value값을 똑같이 저장
    localStorage.setItem(todo, todo);
    //todos.push와 같은 react 배열 추가 방식
    setTodos((currentTodos) => {
      return [currentTodos, todo];
    });
    // setInputText("");
  };

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
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      {/* 좌측 todos > app에서 사용 / 우측 todos TodoList에서 사용 */}
      <TodoList todos={todos} onTodoRemove={handleRemove} />
    </div>
  );
}

export default App;
