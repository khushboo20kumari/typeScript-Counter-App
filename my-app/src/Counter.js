// import { useState } from "react"

// const Counter:React.FC=()=>{
//     const [count,setCount]=useState <Number>(0)
//     return(
//         <>
//         <p>i am counter</p>
       
//         </>
//     )
// }
// export default Counter;


import React, { useState } from "react";
const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const OnIncrement=()=>{
        
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
