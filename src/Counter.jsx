import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementCounter = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={handleIncrementCounter}>Increment</button>
    </div>
  );
};

export default Counter;
