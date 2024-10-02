import React, { useState } from "react";
import usePrevious from "./usePrevious";

function SomeComponent() {
  const [counter, setCounter] = useState(0);
  const previousCounter = usePrevious(counter);

  function handleClick() {
    setCounter((prev) => prev + 1);
  }
  return (
    <button onClick={handleClick}>
      {counter} {previousCounter}
    </button>
  );
}

export default SomeComponent;
