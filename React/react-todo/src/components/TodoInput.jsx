import { useState } from "react";

function TodoInput({ onTodoAdd }) {
  const [inputText, setInputText] = useState("");

  const handleInput = (event) => {
    // console.log(event);
    const value = event.target.value;
    setInputText(value);
  };

  const handleClick = () => {
    onTodoAdd(inputText);
    setInputText("");
  };
  // const handleClick = () => {
  //   // console.log("clicked");
  //   //key값과 value값을 똑같이 저장
  //   localStorage.setItem(inputText, inputText);
  //   //todos.push와 같은 react 배열 추가 방식
  //   setTodos((currentTodos) => {
  //     return [currentTodos, inputText];
  //   });
  //   setInputText("");
  // };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={handleClick}>add</button>
    </div>
  );
}

export default TodoInput;
