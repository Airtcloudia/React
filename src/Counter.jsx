import { useState } from "react";
import CounterDisplay from "./CounterDisplay";


const Counter = ({initialValue, incrementAmount}) => {
    const [count, setCount] = useState(initialValue)

    const handleIncrementCounter = () =>{
        setCount((count) => count +incrementAmount)
    }
    return (
        <div>
            <CounterDisplay content={count}/>
            <button onClick={handleIncrementCounter}>Increment</button>
        </div>
    )
}

export default Counter

