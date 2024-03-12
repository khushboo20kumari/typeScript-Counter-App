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
            <center>
                <div style={{ background: "pink", height: "400px", width: "40%" ,boxShadow:"0px 5px 10px 0px rgba(0, 0, 0, 0.5)",marginTop:"150px"}}>
                    <p style={{position:"relative",top:"100px",fontWeight:"bold"}}>Counter :{count}</p>
                    <button onClick={OnIncrement} style={{ background: "green", color: "white", width: "25%", height: "40px", margin: "6px",position:"relative" ,top:"120px"}}>Increment</button>
                    <button onClick={OnDecrement} style={{ background: "red", color: "white", width: "25%", height: "40px", margin: "6px",position:"relative",top:"120px" }}>Decrement</button>
                </div>
            </center>

        </>
    );
};

export default Counter;
