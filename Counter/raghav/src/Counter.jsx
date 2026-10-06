import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 10);
  };
  const decrement = () => {
    if (count - 5 < 0) {
      setCount(0);
      alert("Count negative nahi ho sakta. Value reset to 0.");
    } else {
      setCount(count - 5);
    }
  };
  const muiltiplication = () => {
    setCount(count * 2);
  };
  const division = () => {
    setCount(count / 5);
  };
  const reset =()=>{
    setCount(0)
  }

  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={muiltiplication}>*</button>
      <button onClick={division}>/</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default Counter;
