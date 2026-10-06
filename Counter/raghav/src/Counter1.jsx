import React from "react";

const Calculater = () => {

  const divide = () => {
    setInput("");
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>

      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter value"
        className="rounded-2xl"
      />

      <div className="flex gap-5">
        <button
          onClick={increment}
          className="text-white bg-black rounded-2xl py-2 px-7"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="text-white bg-black rounded-2xl py-2 px-7"
        >
          Decrement
        </button>

        <button
          onClick={multiple}
          className="text-white bg-black rounded-2xl py-2 px-7"
        >
          Multiple
        </button>

        <button
          onClick={divide}
          className="text-white bg-black rounded-2xl py-2 px-7"
        >
          Divide
        </button>

        <button
          onClick={reset}
          className="text-white bg-black rounded-2xl py-2 px-7"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Calculater;