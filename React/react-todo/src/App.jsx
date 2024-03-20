//마무리
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
  const [todos, setTodos] = useState(fetchTodos());

  const addTodo = (todo) => {
    //key값과 value값을 똑같이 저장
    localStorage.setItem(todo, todo);
    //todos.push와 같은 react 배열 추가 방식
    setTodos((currentTodos) => {
      return [currentTodos, todo];
    });
  };

  const removeTodo = (todo) => {
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
      <TodoList todos={todos} onTodoRemove={removeTodo} />
    </div>
  );
}

export default App;
