import { useState } from "react";

const Counter = ({initialValue, incrementAmount}) => {
    const [count, setCount] = useState(initialValue)

    const handleIncrementCounter = () =>{
        setCount((count) => count +incrementAmount)
    }
    return (
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={handleIncrementCounter}>Increment</button>
        </div>
    )
}

export default Counter

