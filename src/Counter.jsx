import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({ initialValue, incrementAmount, decrementAmount }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrementCounter = () => {
    setCount((count) => count + incrementAmount);
  };
  const handleDecrementCounter = () => {
    setCount((count) => count - decrementAmount);
  };
  const handleResetCounter = () => {
    setCount(initialValue);
  };
  useEffect(() => {
    console.log(`The value of the counter is ${count}`);
  }, [count]);
  return (
    <div>
      <CounterDisplay content={count} />
      <button onClick={handleIncrementCounter}>Increment</button>
      <button onClick={handleDecrementCounter}>Decrement</button>
      <button onClick={handleResetCounter}>Reset</button>
    </div>
  );
};

export default Counter;
