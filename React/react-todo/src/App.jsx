import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

/* function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
} */

function App() {
  // const [count, setCount] = useState(0)
  // const [inputText, setInputText] = useState('');
  // const todos = fetchTodos();
  // const [todos, setTodos] = useState(fetchTodos());

  /* const handleInput = (event) => {
    console.log(event)
    const value = event.target.value;
    setInputText(value);
  } */

  /* const handleClick = () => {
    console.log('clicked')
    //key값과 value값을 똑같이 저장
    localStorage.setItem(inputText, inputText);
    //todos.push와 같은 react 배열 추가 방식
    setTodos((currentTodos) => {
      return[currentTodos, inputText];
    })
    setInputText('');
  } */

  /* const handleRemove = (todo) => {
    // // console.log(todo, index)
    // todos.splice(index, 1);
    const result = todos.filter(todoItem => {
      if(todoItem !== todo){
        return true;
      }
    })
    setTodos(result);
    localStorage.removeItem(todo);

  } */

  return (
    <div>
      <TodoHeader />
      {/* <div>
          <input type="text" value={inputText} onChange={handleInput}/>
          <button onClick={handleClick}>add</button>
        </div> */}
      <TodoInput />
      {/* <div>
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={index}>
                  <span>{todo}</span>
                  <button onClick={() =>handleRemove(todo, index)}>remove</button>
                </li>
              )
            })}
          </ul>
        </div> */}
      <TodoList />
    </div>
  );
}

export default App;
