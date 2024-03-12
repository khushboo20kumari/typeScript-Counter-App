import React, { useState } from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const OnIncrement = () => {
        setCount(count + 1);
    }

    const OnDecrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={OnIncrement}>Increment</button>
            <button onClick={OnDecrement}>Decrement</button>
        </>
    );
};

export default Counter;
